import Image from "next/image"
import profilPic from "../../public/icons/Akhyar2.jpg"

const AboutMe = () => {
  return(
    <div className="w-full">
      <header className="w-full text-center mt-20">
        <h3 className="text-secondary font-semibold text-lg mb-2">About Me</h3>
        <div className="h-[3px] bg-slate-100 w-[150px] rounded-md mx-auto"></div>
        <div className="flex justify-center mx-auto w-[200px] md:w-[300px] border-2 border-secondary rounded-3xl ring ring-secondary mt-14">
          <Image 
            src={profilPic}
            className="rounded-3xl"
          />
        </div>
      </header>
      <main className="w-full">

      </main>
    </div>
  )
}

export default AboutMe