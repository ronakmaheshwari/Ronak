import { BriefcaseBusiness, CodeXml, Globe, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function BioSection() {
  const bioData = [
    {
      icon: CodeXml,
      title: "FullStack Developer & Blockchains",
      type: "text",
    },
    { icon: BriefcaseBusiness, title: "Currently a Student", type: "text" },
    { icon: MapPin, title: "Pune, Maharashtra, India", type: "text" },
    { icon: Phone, title: "+91 95452-93102", type: "link" },
    { icon: Mail, title: "ronakmaheshwari077@gmail.com", type: "link" },
    { icon: Globe, title: "ronak.10xdevs.me", type: "link" },
  ];
  return (
    <section className="relative flex full-line-bottom h-auto border-x p-4 gap-2 flex-col items-center justify-center">
      {bioData.map((item, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-start gap-4 font-mono text-sm "
        >
          <div className="bg-muted shrink-0  text-muted-foreground size-6 flex items-center justify-center rounded-sm ">
            <item.icon className="size-4" />
          </div>{" "}
          {item.type === "link" ? (
            <a
              target="_blank"
              href={
                item.title.includes("vercel.app")
                  ? `https://${item.title}`
                  : item.title.startsWith("+91")
                  ? `tel:${item.title}`
                  : `mailto:${item.title}`
              }
              className="text-balance  hover:underline"
            >
              {item.title}
            </a>
          ) : (
            <span className="text-balance">{item.title}</span>
          )}
        </div>
      ))}
    </section>
  );
}

export default BioSection;
