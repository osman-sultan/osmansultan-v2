import { Url } from "@/components/Url";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Image
          src="/me.jpeg"
          width={300}
          height={195}
          className="mb-2"
          alt="Profile picture"
          priority
        />
        <p>📍 Toronto, ON, Canada</p>
      </div>
      <br />
      <p>
        <b>About me</b>
        <br />
        <br />
        Hi, I&apos;m Osman! Hailing from the suburban sprawl of Mississauga, I
        now roam the streets of Toronto looking for food and matcha to add to my
        Beli. While I look for full-time employment I occasionally work on
        data-driven intelligence tools for {""}
        <Url href="https://www.munero.net/">
          Munero - a global loyalty company
        </Url>
        .
        <br />
        <br />
        I&apos;m an industrial engineer and software developer who is a serial
        hobby hopper with terminal FOMO.
        <br />
        <br />
        I love dabbling in as many disciplines as possible, learning by
        experimenting, and building by breaking. I&apos;m also happy to chat or
        collaborate! Don&apos;t hesitate to reach out ˙ᵕ˙
        <br />
      </p>
      <br />
      <p>
        <b>Previously, I...</b>
      </p>
      <ul className="list-disc list-inside">
        <li>Graduated from UofT! nice</li>
        <li>
          Built an AI matching engine for{" "}
          <Url href="https://ploopy.co/">Ploopy</Url> - they make open-source
          computer peripherals like trackballs and headphones.
        </li>
        <li>
          Spent a year as a dev at{" "}
          <Url href="https://www.doctalk.com/">Doctalk</Url> - a startup trying
          to make doctors&apos; lives easier.
        </li>
        <li>
          Upgraded legacy code at <Url href="https://www.molex.com/">Molex</Url>{" "}
          - a global maker of connectors and electronic components.
        </li>
      </ul>

      <p>
        <b>...and I also volunteered a bit, having...</b>
      </p>
      <ul className="list-disc list-inside">
        <li>
          Worked with 6000+ students and 100+ companies at{" "}
          <Url href="https://yourenext.ca/">YNCN</Url>, to deliver the best
          career development experiences for students looking to get their foot
          in the door.
        </li>
        <li>
          Led a research project on conversational recommender systems at{" "}
          <Url href="https://utmist.gitlab.io/">UTMIST</Url>, working on
          conversational AI for education - inspired by{" "}
          <Url href="https://github.com/D3Mlab/llm-convrec">
            Prof. Scott Sanner&apos;s
          </Url>{" "}
          research.
        </li>
        <li>
          Built pro-bono websites for uni-affiliated groups with{" "}
          <Url href="https://github.com/UTFO">UTFO</Url> - a club I co-founded.
        </li>
        <li>
          Leedured frosh week 4 times - introducing 1st years to{" "}
          <Url href="https://skulepedia.ca/wiki/F!rosh_Week">Skule!</Url>.
        </li>
        <li>
          Made STEM accessible to underserved communities through{" "}
          <Url href="https://www.vosnl.org/">Visions of Science</Url>
        </li>
        <li>
          Taught Python, Java, and SQL to fellow engineering students who were
          just getting started
        </li>
      </ul>
      <p>
        Always down to chat about tech, cars, games or whatever random rabbit
        hole I&apos;m currently exploring! (☞ﾟヮﾟ)☞
      </p>
      <p>
        <br />
        <b>----------</b>
        <br />
        <br />
        Want to reach out? Feel free to email me at{" "}
        <b>osmansultan2002 at gmail dot com</b> 📬.
      </p>
    </div>
  );
}
