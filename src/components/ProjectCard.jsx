import PropTypes from "prop-types";
import { faCss, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const descriptionText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates tempore voluptatem provident maxime reiciendis delectus rem esse mollitia ut culpa libero, quis necessitatibus eius corporis veniam iusto sapiente. Eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptates tempore voluptatem provident maxime reiciendis delectus rem esse mollitia ut culpa libero, quis necessitatibus eius corporis veniam iusto sapiente. Eligendi.";

const techArr = ["react", "html", "css"];

const ProjectCard = ({
  img = "https://placehold.co/600x400",
  title = "Awsome Project",
  description = descriptionText,
  weblink,
  githubLink,
  youtubeLink,
  technologiesArr = techArr,
}) => {
  return (
    <div className="w-full bg-black  mx-auto border-2 border-primary rounded-2xl overflow-hidden p-2 pb-6">
      <div className="grid w-full rounded-t-xl overflow-hidden relative">
        <img src={img} alt="" className="w-full" />
        <div className=" bg-black absolute h-full w-full opacity-0 text-lg  fadeTransition p-4">
          <p>{description}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex justify-between place-items-center">
          <a href={weblink}>
            <p className="text-3xl m-4 font-medium hover:text-primary-light cursor-pointer">
              {title}
            </p>
          </a>
          <a href={weblink}>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="m-4 text-2xl hover:text-primary-light cursor-pointer"
            />
          </a>
        </div>
        <div className="w-full border rounded-full border-primary-light mx-auto"></div>
        <p className="m-4 mb-2 font-light text-lg">Technologies Used:</p>
        <div className="flex flex-wrap gap-4 mx-4 text-primary-light text-nowrap">
          {technologiesArr.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <p className="m-4 mb-2 font-light text-lg">Links:</p>
        <div className="flex gap-4 mx-4">
          {weblink && (
            <a href={weblink}>
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-2xl cursor-pointer hover:text-primary-light"
              />
            </a>
          )}
          {githubLink && (
            <a href={githubLink}>
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl cursor-pointer hover:text-primary-light"
              />
            </a>
          )}
          {youtubeLink && (
            <a href={youtubeLink}>
              <FontAwesomeIcon
                icon={faYoutube}
                className="text-2xl text-red-700 cursor-pointer hover:text-primary-light"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  technologiesArr: PropTypes.array,
  weblink: PropTypes.string,
  githubLink: PropTypes.string,
  youtubeLink: PropTypes.string,
};

export default ProjectCard;
