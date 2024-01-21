import Task from "./components/Task";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";

export const App = () => {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Header />
      <Hero />
      <Task />
      <Footer />
    </div>
  );
};
