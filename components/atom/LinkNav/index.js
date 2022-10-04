import Link from "next/link";
import Image from "next/image";

const LinkNav = ({ img, to, label }) => {
  return (
    <div className="hover:bg-slate-50 flex items-center justify-center p-2 mr-2 rounded-full transition-all duration-300 hover:shadow-md group hover:shadow-cyan-900">
      <Link href={to}>
        <div className="flex hover:cursor-pointer">
          <Image src={img} />
          <span className="text-slate-800 ml-1 invisible group-hover:visible hidden group-hover:block">
            {label}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default LinkNav;
