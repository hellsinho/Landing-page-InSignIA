// components/Navbar.tsx
"use client"; // Certifique-se de que este componente é renderizado no cliente

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [navbarStyle, setNavbarStyle] = useState("light"); // Estado para controlar o estilo da Navbar

  useEffect(() => {
    // Função para observar as seções
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Verifica a seção atual e define o estilo da Navbar
            if (["sobre", "tecnologias", "pitch","equipe", "contato"].includes(entry.target.id)) {
              setNavbarStyle("dark"); // Altera para estilo escuro
            } else {
              setNavbarStyle("light"); // Altera para estilo claro
            }
          }
        });
      },
      { threshold: 0.5 } // Define o ponto de interseção (50% da seção visível)
    );

    // Observa as seções
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    // Limpa o observador ao desmontar o componente
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[40%] max-w-4xl mx-auto backdrop-blur-md rounded-full border shadow-lg z-50 transition-all duration-300 ${
        navbarStyle === "dark"
          ? "bg-gray-900/80 border-gray-800" // Estilo escuro
          : "bg-white/10 border-white/20" // Estilo claro
      }`}
    >
      <div className="flex justify-center p-4">
        <div className="flex items-center space-x-4">
          <Link
            href="#hero"
            className={`transition-all duration-300 ${
              navbarStyle === "dark" ? "text-white" : "text-gray-300"
            } hover:text-purple-500`}
          >
            Home
          </Link>
          <Link
            href="#sobre"
            className={`transition-all duration-300 ${
              navbarStyle === "dark" ? "text-white" : "text-gray-300"
            } hover:text-purple-500`}
          >
            Sobre
          </Link>
          <Link
            href="#tecnologias"
            className={`transition-all duration-300 ${
              navbarStyle === "dark" ? "text-white" : "text-gray-300"
            } hover:text-purple-500`}
          >
            Tecnologias
          </Link>
          <Link
            href="#pitch"
            className={`transition-all duration-300 ${
              navbarStyle === "dark" ? "text-white" : "text-gray-300"
            } hover:text-purple-500`}
          >
            Pitch
          </Link>
          <Link
            href="#demonstracao"
            className={`transition-all duration-300 ${
              navbarStyle === "dark" ? "text-white" : "text-gray-300"
            } hover:text-purple-500`}
          >
            Demonstração
          </Link>
          <Link
            href="#equipe"
            className={`transition-all duration-300 ${
              navbarStyle === "dark" ? "text-white" : "text-gray-300"
            } hover:text-purple-500`}
          >
            Equipe
          </Link>
          <Link
            href="#contato"
            className={`transition-all duration-300 ${
              navbarStyle === "dark" ? "text-white" : "text-gray-300"
            } hover:text-purple-500`}
          >
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}