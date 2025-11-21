import React from "react";
import { ArrowRight } from "lucide-react";

interface HomeProps {
  onOpenModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenModal }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-linear-to-b from-primary-400 to-white z-0"></div>

      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="animate-fade-in">
          <h2 className="text-primary-500 font-medium tracking-widest mb-4 uppercase text-sm md:text-base">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-900 mb-6 tracking-tight">
            Gabriel Venas
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary-600 mb-8">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-primary-500 text-lg md:text-xl mb-10 leading-relaxed">
            I build accessible, pixel-perfect, and performant web experiences.
            Passionate about creating software that improves the lives of those
            around me.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenModal}
              className="px-8 py-4 bg-gray-800 text-white rounded-full font-bold text-lg hover:bg-primary-900 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </button>
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-primary-800 border border-primary-200 rounded-full font-bold text-lg hover:bg-primary-50 transition-all transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
