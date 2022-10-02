import Link from "next/link";
import Image from "next/image";

const LinkNav = ({ img }) => {
  return (
    <div className="hover:bg-slate-50 flex items-center justify-center p-2 mr-2 rounded-full transition-all duration-300 shadow-md shadow-cyan-900">
      <Link href={"#"}>
        <Image src={img} />
      </Link>
    </div>
  );
};

export default LinkNav;
