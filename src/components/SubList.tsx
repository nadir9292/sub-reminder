import Image from "next/image";
import React from "react";

type CategorySub = "SVOD" | "GAME";

type Sub = {
  title: string;
  logo: string;
  prices: Array<number>;
  category: CategorySub;
};

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
    <div className="max-h-8">
      {listSubs.map((subItem) => (
        <div className="grid grid-cols-3 bg-white my-4 py-2 px-1 items-center">
          <Image
            src={subItem.logo}
            width={50}
            height={50}
            alt="logo sub"
            className="bg-offWhite rounded-xl object-contain"
            priority
          />
          <h1>{subItem.title}</h1>
          <h1>${subItem.prices[0]}</h1>
        </div>
      ))}
    </div>
  );
}
