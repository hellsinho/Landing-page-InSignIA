// components/ContactSection.tsx
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"; // Ícones
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contato" className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
              Entre em Contato
            </h2>
            <p className="max-w-[600px] text-gray-600 md:text-xl">
              Tem alguma dúvida, sugestão ou quer saber mais sobre o InSignIA?
              Estamos aqui para ajudar!
            </p>

            {/* Detalhes de Contato */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-purple-600" />
                <p className="text-gray-600">contato@insignia.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-purple-600" />
                <p className="text-gray-600">+55 (81) 99999-9999</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-purple-600" />
                <p className="text-gray-600">Belo Jardim, PE - Brasil</p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/insignia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/insignia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}