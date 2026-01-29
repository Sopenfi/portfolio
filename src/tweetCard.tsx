import { useRef } from "react";
import type { Tweet } from "./types/tweet";
import React from "react";

function linkify(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline break-all"
        >
          {part}
        </a>
      );
    } else {
      return (
        <span key={index} className="break-words">
          {part}
        </span>
      );
    }
  });
}

function TweetContent({ content }: { content: string }) {
  return (
    <div className="whitespace-pre-wrap">
      {content.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {linkify(line)}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
export const TweetCard = ({ tweet }: { tweet: Tweet }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };
  return (
    <div className="p-4 hover:bg-gray-900 transition border-b border-l border-r border-gray-500">
      <div className="flex gap-3">
        <div className="h-15 w-15 rounded-full flex-shrink-0">
          <img
            src={tweet.avatarUrl || "/images/twitterheader.jpg"}
            alt={`${tweet.author}'s avatar`}
            className="h-15 w-15 rounded-full flex-shrink-0"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">{tweet.author}</span>
            <span className="text-gray-500">@{tweet.username}</span>
            <span className="text-gray-500">· {tweet.createdAt}</span>
          </div>
          <div className="mt-1 text-sm">
            <TweetContent content={tweet.content} />
          </div>
        </div>
      </div>

      {tweet.images && tweet.images.length > 0 && (
        <div className="relative mt-3">
          {tweet.images.length > 1 && (
            <>
              <button
                onClick={scrollLeft}
                className="ml-3 absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 pr-3 pl-3 rounded-full z-10"
              >
                ◀
              </button>

              <button
                onClick={scrollRight}
                className="mr-3 absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 pr-3 pl-3 rounded-full z-10"
              >
                ▶
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {tweet.images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Tweet media"
                className="snap-center flex-shrink-0 w-full  h-full max-h-[400px] mx-auto object-scale-down rounded-xl border border-gray-700"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
