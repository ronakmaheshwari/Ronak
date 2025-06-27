import Image from "next/image";
import React from "react";
import MyImage from "../../../public/ronak.jpeg";
import { VerifiedFilledIcon } from "../Icons";
import { FlipSentences } from "../ui/FlipSentences";

function ProfileSection() {
  const flipSentences = [
    "Full stack developer crafting modern web applications.",
    "Open source contributor building in public consistently.",
    "Unhealthy obsession with building things." 
  ];

  return (
    <section className="relative flex full-line-bottom h-auto border-x  ">
      <div className="shrink-0 border-r ">
        <div className="p-1">
          <Image
            className="size-32 sm:size-40 rounded-full object-cover ring-1 ring-border ring-offset-2 ring-offset-background select-none"
            alt="Ronak Maheshwari avatar"
            src={MyImage}
            width={512}
            height={512}
            quality={100}
            priority
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between grow items-end pb-1 px-4 lining-tilt-background">
          <span className="line-clamp-1 font-mono text-xs text-zinc-300 select-none dark:text-zinc-800 tracking-wider">
            Last updated 1 days ago
          </span>
          
      
        </div>
        <div className=" border-t">
          <h1 className=" pl-4 py-0.5 font-semibold  select-none text-2xl flex items-center font-mono  ">
            Ronak Maheshwari&nbsp;
            <VerifiedFilledIcon />{" "}
          </h1>
        </div>
        <div className="h-9 border-t flex items-center justify-start  py-1 pl-4  md:h-auto">
          <FlipSentences sentences={flipSentences} />
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
