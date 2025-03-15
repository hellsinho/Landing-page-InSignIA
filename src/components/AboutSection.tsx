// components/AboutSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Ícone opcional

export default function AboutSection() {
  return (
    <section id="sobre" className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="container px-4 md:px-30">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Texto */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
              Sobre o InSignIA
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              O <strong>InSignIA</strong> é uma solução inovadora que combina visão computacional
              e inteligência artificial para traduzir a Língua Brasileira de Sinais (Libras) em
              tempo real. Nosso nome reflete a essência do projeto: <strong>insígnia</strong> como
              símbolo de inclusão, <strong>sign</strong> como representação da comunicação por sinais,
              e <strong>IA</strong> como a tecnologia que torna tudo isso possível.
            </p>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Nosso objetivo é promover a inclusão e facilitar a comunicação entre surdos e ouvintes,
              tornando a interação mais acessível e natural.
            </p>
            <a href="#demonstracao">
            <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-700 cursor-pointer transition-all duration-500 ease-in-out">
              Veja funcionando!
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </a>
          </div>

          {/* Imagem ou Ilustração */}
          <div className="flex items-center justify-center w-2/3">
            <img
              src="/img/picture_about.png" // Caminho absoluto a partir da pasta public
              alt="Ilustração sobre o projeto InSignIA"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}