import { cardDefaultProps } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  fullName: string;
  username: string;
  tweet: string;
  date: string;
  time: string;
  link: string;
  profileImage: string;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="rounded-lg border-stone-200 border border-solid bg-white w-80 cursor-pointer hover:border-sky-400 hover:border-2 ease-in-out duration-100">
      <Link
        href={props.link}
        target="_blank"
        rel="noopener"
        className="block p-8"
      >
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
            <Image
              src={props.profileImage}
              alt={`${props.username} twitter profile picture`}
              fill
            />
          </div>
          <div>
            <p className="font-bold">{props.fullName}</p>
            <p className="font-light text-gray-500 text-sm">{props.username}</p>
          </div>
        </div>
        <p className="leading-relaxed">{props.tweet}</p>
        <p className="mt-3 text-sm">
          {props.time} - {props.date}
        </p>
        {/* # TODO: Add Retweets, likes & other data points */}
      </Link>
    </div>
  );
};

Card.defaultProps = cardDefaultProps;
