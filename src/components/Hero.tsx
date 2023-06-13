import Link from "next/link";

export const Hero = () => {
  return (
    <div className="lg:mt-24 mt-10 max-w-lg mb-12">
      <h1 className="text-3xl font-semibold">TweetMS</h1>
      <p className="my-3">
        Personal tweet automation service by{" "}
        <Link
          href="https://abhin.dev/?ref=tweetms"
          className="font-medium underline text-blue-600"
          target="_blank"
          rel="noopener"
        >
          Abhin Rustagi ↗
        </Link>{" "}
        to schedule tweets! Displayed here all the tweets that have already been
        posted by this service.
      </p>
      <p className="my-3">
        Built using Nextjs, Tailwind, Github Actions, & Google Sheets API.
      </p>
      <p className="my-3">
        If you like this project, find the instructions in the{" "}
        <Link
          href="https://www.github.com/AbhinRustagi/tweetms"
          className="text-sky-500 font-medium underline"
          rel="noopener"
        >
          readme of the Github Repository ↗
        </Link>{" "}
        to use it for yourself.
      </p>
    </div>
  );
};
