import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home">
      <h1 className="text-5xl">Welcome to Chat App</h1>
      <Link href="/main">
        <a className="text-2xl">Go to chat</a>
      </Link>
    </Layout>
  );
}
