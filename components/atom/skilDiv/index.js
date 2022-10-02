import Image from "next/image";

const SkilDiv = ({ name, img }) => {
  return (
    <div className="w-full font-semibold mt-10 h-56 rounded-2xl border border-yellow-600 ring ring-yellow-600 shadow-2xl shadow-cyan-900 hover:bg-yellow-600 transition-all duration-300 text-slate-800 items-center flex justify-center flex-col group">
      <Image src={img} className="transition-all duration-300" />
      <div className="h-1 group-hover:h-max transition-all duration-300 group-hover:mt-2">
        {name}
      </div>
    </div>
  );
};

export default SkilDiv;
