import { Sub } from "@/src/types/Sub";
import Image from "next/image";
import React from "react";

const listSubs: Array<Sub> = [
  {
    title: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/240px-Netflix-new-icon.png",
    prices: [5.99, 13.49, 19.99],
    category: "SVOD",
  },
  {
    title: "Prime Video",
    logo: "https://get-picto.com/wp-content/uploads/2023/08/logo-amazon-prime-video.webp",
    prices: [6.99, 69.9],
    category: "SVOD",
  },
  {
    title: "Disney+",
    logo: "https://media.zenfs.com/en/evening_standard_239/be0710aaaf5abfdcfe63e97dda34ea9a",
    prices: [5.99, 8.99, 11.99],
    category: "SVOD",
  },
  {
    title: "Apple TV+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/AppleTVLogo.svg/2048px-AppleTVLogo.svg.png",
    prices: [9.99],
    category: "SVOD",
  },
  {
    title: "OCS",
    logo: "https://alloforfait.fr/wp-content/uploads/2014/01/OCS-logo-carr%C3%A9.jpg.webp",
    prices: [10.99, 12.99],
    category: "SVOD",
  },
  {
    title: "Max",
    logo: "https://logodownload.org/wp-content/uploads/2024/03/max-logo-0.png",
    prices: [5.99, 59.99],
    category: "SVOD",
  },
  {
    title: "Paramount+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Paramount_Pictures_2022_%28Blue%29.svg",
    prices: [7.99, 79.99],
    category: "SVOD",
  },
];

export default function SubList() {
  return (
    <div className="max-h-96 overflow-auto">
      {listSubs.map((subItem) => (
        <div className="grid grid-cols-3 bg-white/30 backdrop-blur-lg rounded-xl  my-4 py-2 px-1 items-center shadow-lg">
          <Image
            src={subItem.logo}
            width={70}
            height={70}
            alt="logo sub"
            className="rounded-xl ml-2"
            priority
          />
          <h1 className="font-bold">{subItem.title}</h1>
          <h1 className="w-fit ml-8 p-2 rounded-lg italic">
            {subItem.prices[0]}€
          </h1>
        </div>
      ))}
    </div>
  );
}
