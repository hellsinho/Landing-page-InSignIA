// components/DemoSection.tsx
import { Button } from "@/components/ui/button";
import { Upload, PlayCircle } from "lucide-react"; // Ícones

export default function DemoSection() {
  return (
    <section id="demonstracao" className="w-full min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Vídeo de Demonstração */}
          <div className="flex flex-col items-center justify-center space-y-4">
            
            <div className="relative w-full max-w-xs bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <video
                src="/video/demonstracao.mp4" // Substitua pelo caminho do vídeo
                controls
                autoPlay // Inicia o vídeo automaticamente
                muted // Necessário para autoplay em muitos navegadores
                loop // Faz o vídeo repetir
                className="w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="h-16 w-16 text-white opacity-75" />
              </div>
            </div>
          </div>

          {/* Área de Upload e Instruções */}
          <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Veja o InSignIA em Ação
            </h2>
            <h3 className="text-2xl font-bold text-white">
              Teste Você Mesmo
            </h3>
            <p className="max-w-[500px] text-gray-300 text-center">
              Faça upload de um vídeo em Libras e veja a tradução em tempo real.
            </p>

            {/* Área de Upload */}
            <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex flex-col items-center space-y-4">
                <Upload className="h-12 w-12 text-gray-300" />
                <p className="text-gray-300 text-center">
                  Arraste e solte um vídeo ou clique para selecionar.
                </p>
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  id="upload-video"
                />
                <label
                  htmlFor="upload-video"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg cursor-pointer hover:bg-purple-700 transition-colors"
                >
                  Escolher Vídeo
                </label>
              </div>
            </div>

            {/* Botão de CTA */}
            <Button className="mt-4 bg-white text-gray-900 hover:bg-gray-200">
              Experimente a Versão Completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}