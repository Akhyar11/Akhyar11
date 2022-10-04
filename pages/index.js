import AboutMe from "../components/about";
import Home from "../components/home";
import Navbar from "../components/navbar";
import Skil from "../components/skil";
import Blog from "../components/blog";

const Index = () => {
  return (
    <div className="font-karla bg-primary text-slate-100 lg:px-96 min-h-screen">
      <Home />
      <AboutMe />
      <Navbar />
      <Skil />
      <Blog />
    </div>
  );
};

export default Index;
