import { Card, Hero, Meta } from "@/components";
import { cardDefaultProps } from "@/data";

export default function Home() {
  return (
    <>
      <Meta />
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
