"use client";

import { Url } from "@/components/Url";
import projectSections from "@/lib/projects.json";
import Image from "next/image";
import { useState } from "react";

function Project({
  item,
}: {
  item: {
    name: string;
    type: string;
    description: string;
    date: string;
    link: string | null;
    image: string;
  };
}) {
  const { name, type, description, date, link, image } = item;

  const handleNoLinkClick = () => {
    if (!link) {
      alert("this is a work in progress — email me if you want a preview!");
      return "";
    }
  };

  return (
    <div className="flex flex-col w-full mb-10">
      <a
        href={link || undefined}
        onClick={!link ? handleNoLinkClick : undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image
          src={image}
          alt={name}
          width={800}
          height={500}
          className="card mb-5 object-cover"
        />
      </a>
      <a
        href={link || undefined}
        onClick={!link ? handleNoLinkClick : undefined}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold"
      >
        [{name}]
      </a>
      <p>
        {type} / {date}
      </p>
      <p>{description}</p>
    </div>
  );
}

function Section({
  section,
  selectedType,
}: {
  section: {
    title: string;
    list: Array<{
      name: string;
      type: string;
      description: string;
      date: string;
      link: string | null;
      image: string;
    }>;
  };
  selectedType: string;
}) {
  const { title, list } = section;
  const filteredList =
    selectedType === "all"
      ? list
      : list.filter((item) => item.type === selectedType);
  if (filteredList.length === 0) return null;

  return (
    <>
      <p>
        <b>{title}</b>
      </p>
      <div className="flex flex-row gap-2 flex-wrap justify-between">
        {filteredList.map((item, index) => (
          <div key={index}>
            <Project item={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default function Projects() {
  const [selectedType, setSelectedType] = useState("all");

  // Get unique types from all sections
  const allTypes = [
    "all",
    ...new Set(
      projectSections.flatMap((section) =>
        section.list.map((item) => item.type)
      )
    ),
  ];

  return (
    <>
      <p>
        Take a look around! I often use Typescript, Next.js/React.js, Python,
        SQL, and Java. Smaller projects live on my{" "}
        <Url href="https://github.com/osman-sultan">GitHub</Url>.
      </p>
      <div className="flex flex-row gap-2 mt-4 mb-4">
        {allTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`${
              selectedType === type
                ? "bg-black text-white"
                : "bg-[#40A860] text-white"
            }`}
          >
            [{type}]
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {projectSections.map((section, index) => (
          <Section key={index} section={section} selectedType={selectedType} />
        ))}
      </div>
    </>
  );
}
