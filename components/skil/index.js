import { TitleH3 } from "../atom/header";

import SkilDiv from "../atom/skilDiv";
import node from "../../public/icons/nodejs-icon.svg";
import python from "../../public/icons/python-icon.svg";
import react from "../../public/icons/reactjs-icon.svg";
import tailwind from "../../public/icons/tailwindcss-icon.svg";

const Skil = () => {
  return (
    <div className="w-full text-center mt-20">
      <TitleH3 title={"Skil"} />
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-4 gap-6 place-content-stretch p-10">
        <SkilDiv name={"Node Js"} img={node} />
        <SkilDiv name={"Python"} img={python} />
        <SkilDiv name={"React"} img={react} />
        <SkilDiv name={"Tailwind CSS"} img={tailwind} />
      </div>
    </div>
  );
};

export default Skil;
