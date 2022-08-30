import AboutMe from "../components/about";
import Home from "../components/home";
import Navbar from "../components/navbar";

const Index = () => {
  return (
    <div className="font-karla bg-primary text-slate-100 px-20 min-h-screen">
      <Home />
      <AboutMe />
      <Navbar />
    </div>
  );
};

export default Index;
