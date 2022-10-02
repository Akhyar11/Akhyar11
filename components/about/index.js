import Image from "next/image";
import profilPic from "../../public/icons/Akhyar2.jpg";
import Profil from "../atom/profil";
import { TitleH3 } from "../atom/header";

const AboutMe = () => {
  return (
    <div className="w-full text-center mt-20">
      <TitleH3 title="About Me" />
      <div className="lg:flex lg:justify-between">
        <div className="flex shadow-lg shadow-cyan-900 justify-center mx-auto w-[200px] md:w-[300px] border-2 border-secondary rounded-3xl ring ring-secondary mt-14">
          <Image src={profilPic} className="rounded-3xl" />
        </div>
        <div className="flex flex-col mx-auto px-10">
          <div className="flex pt-8 justify-between w-max mx-auto">
            <Profil profil="Mahasiswa" />
            <Profil profil="Freelencer" />
          </div>
          <div className="text-center font-karla md:w-[550px] mx-4 md:mx-auto md:text-lg font-thin tracking-wide">
            <p>
              Hello everyone im Muhammad Akhyar im 18 yers old i like watch
              anime, my faforit anime is moster, im majory of information sistem
              at POLITEKNIK INDONUSA SURAKARTA i lived in Bawu Kemusu Boyolali
              or milk city
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
