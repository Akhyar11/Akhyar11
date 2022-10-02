const Profil = ({ profil }) => {
  return (
    <div className="md:w-40 w-28 py-3 my-10 rounded-lg text-center font-semibold md:text-xl bg-secondary text-slate-800 hover:bg-yellow-300 transition-all duration-300 mx-4 h-max hover:text-slate-900 shadow-cyan-900 shadow-lg">
      <h1 className="">{profil}</h1>
    </div>
  );
};

export default Profil;
