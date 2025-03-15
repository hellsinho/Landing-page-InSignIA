// components/HeroSection.tsx
"use client"; // Certifique-se de que este componente é renderizado no cliente

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Ícone opcional
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          {/* Título com Efeito de Fade-in */}
          <motion.h1
            className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Traduzindo Libras em Tempo Real
          </motion.h1>

          {/* Subtítulo com Efeito de Fade-in */}
          <motion.p
            className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Conectando mundos através da visão computacional. Experimente nossa
            solução inovadora para tradução de Libras usando IA.
          </motion.p>

          {/* Botões CTA com Efeito de Fade-in */}
          <motion.div
            className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {/* Botão "Saiba Mais" */}
            <a href="#sobre">
              <Button className="mt-6 bg-white text-black hover:bg-gray-200 cursor-pointer transition-all duration-500 ease-in-out">
                Saiba Mais
              </Button>
            </a>

            {/* Botão "Experimente Agora" */}
            <Button className="mt-6 bg-white text-black hover:bg-gray-200 cursor-pointer transition-all duration-500 ease-in-out">
              Experimente Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}