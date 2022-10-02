import home from "../../public/icons/home.svg";
import profil from "../../public/icons/profil.svg";
import skil from "../../public/icons/skil.svg";
import tell from "../../public/icons/tell.svg";
import LinkNav from "../atom/LinkNav";

const Navbar = () => {
  return (
    <div className="h-12 w-full bg-transparent rounded-xl fixed bottom-12 z-10 left-0 flex justify-center">
      <div className="h-12 w-max bg-slate-600 opacity-50 rounded-xl flex justify-between items-center px-4">
        <LinkNav img={home} to="#home" />
        <LinkNav img={profil} to="#about" />
        <LinkNav img={skil} to="#skil" />
        <LinkNav img={tell} to="#contact" />
      </div>
    </div>
  );
};

export default Navbar;
