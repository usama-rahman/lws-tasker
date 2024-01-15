import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import Task from "./components/Task";

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
