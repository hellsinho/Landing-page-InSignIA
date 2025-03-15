// components/TechSection.tsx
export default function TechSection() {
  return (
    <section id="tecnologias" className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          {/* Título */}
          <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
            Tecnologias Utilizadas
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl">
            O InSignIA é construído com as melhores ferramentas e tecnologias modernas para garantir
            desempenho, precisão e escalabilidade.
          </p>

          {/* Grid de Tecnologias */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Inteligência Artificial (IA) */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/img/IA.png" // Substitua pelo caminho da logo
                alt="Logo de Inteligência Artificial"
                className="h-40 w-40 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Inteligência Artificial</h3>
              <p className="text-gray-600 text-center">
                Utilizamos modelos de IA avançados para processar e interpretar sinais de Libras em tempo real.
              </p>
            </div>

            {/* Visão Computacional */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/img/visao_computacional.png" // Substitua pelo caminho da logo
                alt="Logo de Visão Computacional"
                className="h-40 w-40 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Visão Computacional</h3>
              <p className="text-gray-600 text-center">
                Capturamos e analisamos movimentos das mãos e expressões faciais para traduzir Libras com precisão.
              </p>
            </div>

            {/* Realidade Aumentada */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="/img/realidade_aumentada.png" // Substitua pelo caminho da logo
                alt="Logo de Realidade Aumentada"
                className="h-40 w-40 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">Realidade Aumentada</h3>
              <p className="text-gray-600 text-center">
                Integramos realidade aumentada para criar experiências interativas e imersivas com Libras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}