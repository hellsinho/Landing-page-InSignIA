// components/TeamSection.tsx
import { Linkedin, Github, Mail } from "lucide-react"; // Ícones

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Helson Gonçalves",
      role: "Desenvolvedor Fullstack",
      image: "/img/helson.jpg", // Substitua pelo caminho da imagem
      description: "Responsável pelo desenvolvimento da IA e treinamento do modelo.",
      social: {
        linkedin: "https://linkedin.com/in/joaosilva",
        github: "https://github.com/joaosilva",
        email: "helson.santos25@gmail.com",
      },
    },
    {
      name: "Italo Pimentel",
      role: "Desenvolvedor Mobile Fullstack",
      image: "/img/italo.jpg", // Substitua pelo caminho da imagem
      description: "Responsável pela integração do modelo e criação do aplicativo mobile.",
      social: {
        linkedin: "https://linkedin.com/in/mariasouza",
        github: "https://github.com/mariasouza",
        email: "maria.souza@insignia.com",
      },
    },
  ];

  return (
    <section id="equipe" className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="container px-4 md:px-6">
        <div className="space-y-6 text-center">
          {/* Título */}
          <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
            Nossa Equipe
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-600 md:text-xl">
            Conheça as mentes por trás do InSignIA.
          </p>

          {/* Grid de Membros da Equipe */}
          <div className="flex justify-center"> {/* Container flex para centralizar o grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl"> {/* Limita a largura máxima do grid */}
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Foto */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-32 w-32 rounded-full mb-4"
                  />

                  {/* Nome e Cargo */}
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>

                  {/* Descrição */}
                  <p className="mt-2 text-gray-600 text-center">{member.description}</p>

                  {/* Redes Sociais */}
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-500 hover:text-gray-900"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}