import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { useScrollReveal } from './hooks/useScrollReveal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initialize scroll reveal animations
  useScrollReveal();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-primary-50 min-h-screen font-sans text-primary-900 selection:bg-primary-200 selection:text-primary-900">
      <Header onOpenModal={openModal} />

      <main>
        <Home onOpenModal={openModal} />
        <About />
        <Projects />
        <Skills />
      </main>

      <Footer onOpenModal={openModal} />

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
