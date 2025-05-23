"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { Url } from "@/components/Url";
import { useEffect, useState } from "react";
export default function Home() {
  const words = {
    drinks: [
      "mango juice",
      "Tang",
      "matcha lattes",
      "ice cold Evian",
      "sweet lassi",
    ],
    hobbies: [
      "grinding Assassin's Creed",
      "reminding myself next year is Ferrari's year",
      "catching up on brainrot",
      "rewatching Harry Potter, ATLA, and LOTR",
      "continuing my matcha quest",
      "ranking food on Beli",
      "admiring Lamine Yamal",
      "binging One Piece",
    ],
  };
  const drinksEmoji = ["🥭", "🍊", "🍃", "💧", "🥛"];

  const initialWordsState = Object.fromEntries(
    Object.keys(words).map((key) => [key, 0])
  );
  const [wordsState, setWordsState] = useState(initialWordsState);
  useEffect(() => {
    // set drink to random
    const randomDrinkIndex = Math.floor(Math.random() * words.drinks.length);
    const randomHobbyIndex = Math.floor(Math.random() * words.hobbies.length);
    setWordsState({
      ...initialWordsState,
      drinks: randomDrinkIndex,
      hobbies: randomHobbyIndex,
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  type WordsKey = keyof typeof words;

  function incrementWords(key: WordsKey) {
    const index = wordsState[key];
    const length = words[key].length;
    const nextIndex = (index + 1) % length;
    setWordsState({ ...wordsState, [key]: nextIndex });
  }

  function PlayLink({ type }: { type: WordsKey }) {
    return (
      <a className="link play" onClick={() => incrementWords(type)}>
        {words[type][wordsState[type]]}
      </a>
    );
  }
  return (
    <>
      {" "}
      <div className="w-full text-center">
        {" "}
        <div className="pt-6 md:pt-10 pb-5">
          <AuroraText
            className="text-5xl md:text-5xl font-['PrinceOfPersia']"
            speed={2}
            colors={["#15803d", "#16a34a", "#22c55e", "#059669", "#047857"]}
          >
            hi, i&apos;m Osman!
          </AuroraText>
        </div>
      </div>
      <div>(∩｀-´)⊃━━☆ﾟ.*･｡ﾟ</div>
      <br />
      <p>
        <b>Welcome to my web-home!</b> Go ahead, grab yourself something to
        drink. I have a cooler full of <PlayLink type="drinks" />
        {drinksEmoji[wordsState["drinks"]]}.
        <br />
        <br />
        I&apos;m a programmer and engineering grad based in Toronto 🍁. I care
        about how large-scale systems work, why they break, and how tech can
        make them fairer, more accessible, and built for people.
        <br />
        <br />
        When I&apos;m not breaking code I&apos;m {""}
        <PlayLink type="hobbies" />.
        <br />
        <br /> Reach out anytime at <b>osmansultan2002 at gmail dot com</b>.
        <br />
        <br />
        Else, find me at:{" "}
        <Url href="https://www.linkedin.com/in/osmansultan-">linkedin</Url>{" "}
        <Url href="https://github.com/osman-sultan">github</Url>
        <br />
      </p>
    </>
  );
}
