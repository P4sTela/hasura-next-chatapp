import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query GetMessages{
    Message {
      id
      user
      content
    }
  }
`;

export const POST_MESSAGE = gql`
  mutation PostMessage($user: String!, $content: String!) {
    insert_Message_one(object: { user: $user, content: $content }) {
      id
      user
      content
    }
  }
`;
