import { Card, Hero, Meta } from "@/components";
import { cardDefaultProps } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Meta />
      <header className="my-4 flex justify-end max-w-4xl lg:px-0 px-6 mx-auto">
        <Link
          href="/docs"
          className="rounded-lg px-4 py-2 text-sm bg-sky-200/75 text-sky-700 hover:bg-sky-300/75 font-semibold"
        >
          Docs
        </Link>
      </header>
      <main className="max-w-4xl lg:px-0 px-6 mx-auto py-6">
        <Hero />
        <Card {...cardDefaultProps} />
      </main>
    </>
  );
}

// export async function getServerSideProps() {
//   const response = await fetch("/api/getPostedTweets");
//   const data = response.json();

//   return {
//     props: {
//       tweets: [],
//     },
//   };
// }
