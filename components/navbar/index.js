import home from "../../public/icons/home.svg";
import LinkNav from "../atom/LinkNav";

const Navbar = () => {
  return (
    <div className="h-12 w-full bg-transparent rounded-xl fixed bottom-12 z-10 left-0 flex justify-center">
      <div className="h-12 w-max bg-slate-600 opacity-50 rounded-xl flex justify-between items-center px-4">
        <LinkNav img={home} />
      </div>
    </div>
  );
};

export default Navbar;
