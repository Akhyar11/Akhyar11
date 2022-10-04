import { TitleH3 } from "../atom/header";
import Link from "next/link";

export default function Blog() {
  return (
    <div id="blog" className="text-center mt-10">
      <TitleH3 title={"Blog"} />
      <div className="w-full shadow md:grid md:grid-cols-4 pt-20 p-10">
        <div className="w-full h-72 bg-secondary rounded-2xl shadow-2xl shadow-cyan-900 flex flex-col p-4 transition-all duration-300">
          <div className="bg-slate-600 w-full h-36 rounded-xl mb-4"></div>
          <p className="text-left text-slate-800">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
            excepturi.
          </p>
          <Link href={"#"}>
            <span className="text-blue-500 block w-full text-right hover:cursor-pointer hover:text-blue-700">
              show more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
