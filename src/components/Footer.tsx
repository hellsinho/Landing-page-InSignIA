// components/Footer.tsx
"use client"; // Adicione esta linha para marcar o componente como Client Component

import { Linkedin, Github, Mail, ArrowUp } from "lucide-react"; // Ícones

export default function Footer() {
  // Função para rolar suavemente até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  };

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">InSignIA</h3>
            <p className="text-gray-300">
              Conectando mundos através da visão computacional e inteligência artificial.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#tecnologias" className="text-gray-300 hover:text-white transition-colors">
                  Tecnologias
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="text-gray-300 hover:text-white transition-colors">
                  Demonstração
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-300 hover:text-white transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/insignia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/insignia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:contato@insignia.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Botão "Voltar ao Topo" */}
        <div className="flex justify-end mt-8">
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-3xl hover:bg-purple-700 transition-colors cursor-pointer"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>

        {/* Direitos Autorais */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} InSignIA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}