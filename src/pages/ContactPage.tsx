import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone, Globe, MapPin } from 'lucide-react';

interface ContactPageProps {
  language: 'en' | 'id';
  darkMode: boolean;
}

export default function ContactPage({ language, darkMode }: ContactPageProps) {
  const content = {
    en: {
      title: "Get in Touch",
      description: "Have a project in mind? Let's work together!",
      contactInfo: {
        title: "Contact Information",
        phone: "Phone",
        email: "Email",
        portfolio: "Portfolio",
        address: "Address"
      },
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message"
      }
    },
    id: {
      title: "Hubungi Saya",
      description: "Punya project dalam pikiran? Mari bekerja sama!",
      contactInfo: {
        title: "Informasi Kontak",
        phone: "Telepon",
        email: "Email",
        portfolio: "Portfolio",
        address: "Alamat"
      },
      form: {
        name: "Nama Anda",
        email: "Email Anda",
        message: "Pesan Anda",
        send: "Kirim Pesan"
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    window.location.href = `mailto:thomasedwinsuryo@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center glitch">
            {content[language].title}
          </h1>
          <p className="text-xl text-center text-blue-400 mb-12">
            {content[language].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={`${darkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-lg shadow-xl h-full`}
            >
              <h2 className="text-2xl font-bold mb-6 text-blue-400">
                {content[language].contactInfo.title}
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium">{content[language].contactInfo.phone}</h3>
                    <p className="text-sm opacity-80">0895367265775</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium">{content[language].contactInfo.email}</h3>
                    <p className="text-sm opacity-80">thomasedwinsuryo@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Globe size={20} className="text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium">{content[language].contactInfo.portfolio}</h3>
                    <a href="https://thomshuft.web.app/" target="_blank" rel="noopener noreferrer" 
                      className="text-sm text-blue-400 hover:underline">
                      web
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-medium">{content[language].contactInfo.address}</h3>
                    <p className="text-sm opacity-80">
                      TB14/5c No. 27, Lendongan Tambakbayan Caturtunggal, <br />
                      Depok, Sleman DIY Yogyakarta, 55281
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`${darkMode ? 'bg-gray-800/50' : 'bg-white'} p-8 rounded-lg shadow-xl`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-blue-400" />
                    {content[language].form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Mail size={16} className="text-blue-400" />
                    {content[language].form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <MessageSquare size={16} className="text-blue-400" />
                    {content[language].form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={`w-full px-4 py-2 rounded-lg ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-300'
                    } border focus:ring-2 focus:ring-blue-500`}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {content[language].form.send}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}