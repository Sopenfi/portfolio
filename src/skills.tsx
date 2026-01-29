import python from "../images/python.png";
import react from "../images/react.png";
import javascript from "../images/javascript.png";
import dart from "../images/dart.png";
import flutter from "../images/flutter.png";
import r from "../images/r.png";
import figma from "../images/Figma.png";
import sql from "../images/sql.png";
import TypeScript from "../images/ts.png";
import tailwind from "../images/tailwind.png";
const skillsprof = [
  { src: python, name: "Python" },
  { src: react, name: "React" },
  { src: javascript, name: "JavaScript" },
  { src: TypeScript, name: "TypeScript" },
  { src: tailwind, name: "Tailwind CSS" },
];
const skillsgood = [
  { src: r, name: "R" },
  { src: figma, name: "Figma" },
  { src: sql, name: "SQL" },
  { src: dart, name: "Dart" },
  { src: flutter, name: "Flutter" },
];
function skills() {
  return (
    <div className="mx-auto border border-gray-500 w-[800px] w-full">
      <div className="p-5 flex flex-col">
        Proficient
        <div className="pt-5 flex flex-row">
          {skillsprof.map((skill) => (
            <div key={skill.name} className="relative group m-2">
              <img
                src={skill.src}
                alt={skill.name}
                className="h-10 w-full object-contain rounded-md"
              />
              <div
                className="
            absolute -top-8 left-1/2 transform -translate-x-1/2
            bg-black text-white text-sm rounded
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            whitespace-nowrap
          "
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5"> Intermediate </div>
        <div className="pt-5 flex flex-row">
          {skillsgood.map((skill) => (
            <div key={skill.name} className="relative group m-2">
              <img
                src={skill.src}
                alt={skill.name}
                className="h-10 w-full object-contain rounded-md"
              />
              <div
                className="
            absolute -top-8 left-1/2 transform -translate-x-1/2
            bg-black text-white text-sm rounded
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
            whitespace-nowrap
          "
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default skills;
