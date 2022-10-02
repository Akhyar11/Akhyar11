import AboutMe from "../components/about";
import Home from "../components/home";
import Navbar from "../components/navbar";
import Skil from "../components/skil";

const Index = () => {
  return (
    <div className="font-karla bg-primary text-slate-100 lg:px-96 min-h-screen">
      <Home />
      <AboutMe />
      <Navbar />
      <Skil />
    </div>
  );
};

export default Index;
