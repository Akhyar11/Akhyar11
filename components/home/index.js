import TypewriterComponent from "typewriter-effect";
import Image from "next/image";
import profilPic from "../../public/icons/Akhyar.jpg";

const Home = () => {
  const job = ["Fullstact Developer", "AI engenering"];

  return (
    <div
      className="flex justify-center w-full font-karla flex-col pt-20"
      id="home"
    >
      <div className="flex flex-col text-center font-medium text-xs mb-14">
        <h3>Hello Im</h3>
        <h3 className="text-2xl text-secondary font-bold">Muhammad Akhyar</h3>
        <h3 className="font-thin mb-2">
          <TypewriterComponent
            options={{
              strings: job,
              autoStart: true,
              cursor: "|",
              loop: true,
            }}
          />
        </h3>
        <div className="h-[3px] bg-slate-100 w-[150px] rounded-md mx-auto"></div>
      </div>
      <div className="flex shadow-cyan-900 shadow-2xl justify-center mx-auto w-[200px] md:w-[300px] border-2 border-secondary rounded-3xl ring ring-secondary">
        <Image
          src={profilPic}
          alt="photo profil author"
          width={400}
          height={400}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Home;
