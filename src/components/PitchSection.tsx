// components/PitchSection.tsx
export default function PitchSection() {
    return (
      <section id="pitch" className="w-full min-h-screen flex items-center justify-center bg-white">
        <div className="container px-4 md:px-6">
          <div className="space-y-8 text-center">
            {/* Título */}
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
              Conheça o InSignIA
            </h2>
  
            {/* Vídeo do Pitch (YouTube) */}
            <div className="relative w-full max-w-4xl mx-auto aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/UYFRrzcg4Sg" // Link do vídeo do YouTube
                title="Pitch do InSignIA"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
  
            {/* Descrição */}
            <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl">
              Assista ao nosso pitch e descubra como o InSignIA está revolucionando a tradução de Libras
              usando visão computacional e inteligência artificial.
            </p>
          </div>
        </div>
      </section>
    );
  }