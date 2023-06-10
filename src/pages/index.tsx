import { Card } from "@/components/Card";
import React from "react";

export default function Home() {
  return (
    <main>
      <p className="text-red-500">hello</p>
      <Card />
    </main>
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
