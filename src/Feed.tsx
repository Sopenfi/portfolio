import film1 from "../images/filmhive.png";
import film2 from "../images/filmhive2.png";
import film3 from "../images/filmhive3.png";
import film4 from "../images/filmhive4.png";
import wingman2 from "../images/wingmanstats2.jpg";
import heatmap1 from "../images/SCMHeatmap1.png";
import heatmap2 from "../images/SCMHeatmap2.png";
import cottage from "../images/cottage.png";
import avatar from "../images/avatar2.png";

import { TweetCard } from "./tweetCard";
import type { Tweet } from "./types/tweet";

const tweets: Tweet[] = [
  {
    id: "2",
    author: "Simo Sopenletho",
    username: "sopenlehto",
    content:
      "🍿 FilmhiveAI is a website that learns your preferences and recommends movies the algorithm thinks you’ll like! \nHow?\n👉The recommender model has been trained with MovieLens dataset \nWhere? \n🐝 https://FilmHiveAI.com",
    createdAt: "3. Jan. 2026",
    avatarUrl: "/images/avatar2.png",
    images: [film1, film2, film3, film4],
  },
  {
    id: "1",
    author: "Simo Sopenletho",
    username: "sopenlehto",
    content:
      "⚡️Wingman stats is a chrome extension which fetches data from steam and displays your performance! 👾 \nAvailable to download at: \n👉 https://chromewebstore.google.com/detail/wingman-stats/mhlkglboplmplljifacjlmenemhckmdm",
    createdAt: "27. Dec. 2025",
    avatarUrl: "/images/avatar2.png",
    images: [wingman2],
  },

  {
    id: "3",
    author: "Simo Sopenletho",
    username: "sopenlehto",
    content:
      "💹 The Steam Community Market heatmap is a stock-market-like visual and dynamic representation of Counter-Strike 2 economy trends! \n👉 https://SCMHeatmap.com",
    createdAt: "17. Nov. 2025",
    avatarUrl: "/images/avatar2.png",
    images: [heatmap1, heatmap2],
  },
  {
    id: "4",
    author: "Simo Sopenletho",
    username: "sopenlehto",
    content:
      "🏡 Estimate your cottage listing price easily, or see if a given listing price is close to the data trend! \n👉 https://CottageValuator.com",
    createdAt: "6. Jul. 2025",
    avatarUrl: "/images/avatar2.png",
    images: [cottage],
  },
];

export const Feed = () => {
  return (
    <div className="divide-y w-full">
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};
