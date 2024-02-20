import { ReactNode } from "react";
import Head from "next/head";

interface Props{
  children: ReactNode
  title: string
}

export default function Layout({ children, title }: Props){
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="bg-gray-500 w-screen px-3 text-xl">
        <p>{title}</p>
      </header>
      <main className="flex flex-1 flex-col w-screen">
        {children}
      </main>
    </div>
  )
}
