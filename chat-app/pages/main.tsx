import {
  GetMessagesQuery,
  PostMessageMutation,
} from "@/types/generated/graphql";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MESSAGES, POST_MESSAGE } from "@/queries/queries";
import { FormEvent, useState } from "react";
import Layout from "@/components/Layout";

const Main = () => {
  const [content, setContent] = useState("" as string);
  const [user, setUser] = useState("user" as string);
  const { data, error } = useQuery<GetMessagesQuery>(GET_MESSAGES, {
    fetchPolicy: "cache-and-network",
    pollInterval: 500,
  });
  const [postMessage] = useMutation<PostMessageMutation>(POST_MESSAGE);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await postMessage({
        variables: {
          user: user,
          content: content,
        },
      });
    } catch (error) {
      alert((error as Error).message);
    }
  };

  if (error) return <p>Error: {(error as Error).message}</p>;
  if (!data) return <p>Loading...</p>;
  return (
    <Layout title="main">
      <div className="flex flex-col justify-center items-left w-1/2 mx-auto">
        {data.Message.map((message) => (
          <div key={message.id}>
            <p>
              {message.user}: {message.content}
            </p>
          </div>
        ))}
      </div>

      <form
        className="flex flex-col justify-center items-center pt-12"
        onSubmit={submit}
      >
        user:{" "}
        <input
          type="text"
          placeholder="user"
          className="px-3 py-2 justify-center items-center"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        content:{" "}
        <input
          type="text"
          placeholder="ここに入力"
          className="px-3 py-2 justify-center items-center"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          disabled={!content}
          className="disabled:opacity-40 my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
          data-testid="new"
          type="submit"
        >
          {"Submit"}
        </button>
      </form>
    </Layout>
  );
};
export default Main;
