"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import { Url } from "@/components/Url";
import { useEffect, useState } from "react";
export default function Home() {
  const words = {
    drinks: [
      "yakult",
      "grape soda",
      "oat matcha lattes",
      "La Croix",
      "Cholula hot sauce",
    ],
    hobbies: [
      "hosting social deduction board game nights",
      "singing my heart out at karaoke",
      "brewing the spiciest soups known to man",
      "talking about the idea of going to the gym",
    ],
  };
  const drinksEmoji = ["🍓", "🍇", "🍵", "🍊", "🌶️"];

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
    <>      <div className="w-full text-center">        <div className="pt-6 md:pt-10 pb-5">          {" "}          <AuroraText
            className="text-5xl md:text-5xl font-['PrinceOfPersia']"
            speed={1}
            colors={["#1b4332", "#2d6a4f", "#40916c", "#52b788"]}
          >
            hi, i&apos;m Osman!
          </AuroraText>
        </div>
      </div>
      <div>⋆✩˚.⋆.</div>
      <br />
      <p>
        <b>Welcome to my web-home!</b> Go ahead, grab yourself something to
        drink. I have a cooler full of <PlayLink type="drinks" />{" "}
        {drinksEmoji[wordsState["drinks"]]}.
        <br />
        <br />
        I&apos;m a programmer, researcher, artist, and game-maker. I care about
        socially impactful tech, experimental new media, creative tools, and{" "}
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
