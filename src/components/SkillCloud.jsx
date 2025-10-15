import Marquee from "react-fast-marquee";
import SkillItem from "./SkillItem.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss,
  faHtml5,
  faJs,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons/faGitAlt";
import { faChartSimple, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

let marqueeArr = [
  {
    title: "JavaScript",
    icon: faJs,
    iconColor: "text-black",
    description: "A versatile programming language for web development.",
  },
  {
    title: "React",
    icon: faReact,
    iconColor: "text-black",
    description: "A powerful library for building user interfaces.",
  },
  {
    title: "NodeJS",
    icon: faNodeJs,
    iconColor: "text-black",
    description: "A JavaScript runtime for server-side development.",
  },
  {
    title: "CSS",
    icon: faCss,
    iconColor: "text-black",
    description: "A styling language for designing web page layouts.",
  },
  {
    title: "Git",
    icon: faGitAlt,
    iconColor: "text-black",
    description: "A version control system for tracking code changes.",
  },
  {
    title: "Python",
    icon: faPython,
    iconColor: "text-black",
    description: "A beginner-friendly language for various programming needs.",
  },
  {
    title: "Linux",
    icon: faLinux,
    iconColor: "text-black",
    description: "An open-source operating system for developers and servers.",
  },
  {
    title: "HTML",
    icon: faHtml5,
    iconColor: "text-black",
    description: "The standard markup language for creating web content.",
  },
  {
    title: "SQL",
    icon: faDatabase,
    iconColor: "text-black",
    description: "A query language for managing and retrieving database data.",
  },
  {
    title: "Data Visualization",
    icon: faChartSimple,
    iconColor: "text-black",
    description:
      "The art of representing data through visual charts and graphs.",
  },
];

function SkillCloud() {
  const [playMarquee, togglePlayMarquee] = useState(true);

  return (
    <div className="flex flex-col place-items-center gap-2 lg:gap-12 py-8 text-white bg-black lg:h-80 border-y-2 border-primary-light">
      <p className="text-2xl lg:text-4xl">My Tool Kit</p>
      <div className=" h-32 w-full flex place-items-center overflow-visible">
        <Marquee
          autoFill={true}
          speed={30}
          play={playMarquee}
          className=" overflow-hidden h-48 relative"
        >
          {marqueeArr.map((item, index) => (
            <SkillItem
              arr={item}
              key={index}
              togglePlayMarquee={togglePlayMarquee}
            ></SkillItem>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default SkillCloud;
