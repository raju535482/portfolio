import { Mail, Phone, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <section className="text-center py-20">
        <h2 className="text-lg text-gray-400">Hi, I’m</h2>
        <h1 className="text-5xl font-extrabold text-indigo-400">Raju Yadav</h1>
        <p className="text-xl mt-2 text-gray-300">Senior Android & Web Developer</p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          Crafting exceptional mobile and web experiences with Kotlin, Java, Swift, PHP, and JavaScript.
        </p>
      </section>
      <footer className="bg-gray-950 text-gray-400 py-10 text-center">
        <h2 className="text-xl font-bold mb-4 text-white">Get in Touch</h2>
        <div className="flex justify-center gap-8">
          <a href="mailto:raju535482@gmail.com" className="flex items-center gap-2 hover:text-indigo-400">
            <Mail size={18}/> raju535482@gmail.com
          </a>
          <a href="tel:+14387787503" className="flex items-center gap-2 hover:text-indigo-400">
            <Phone size={18}/> +1 438-778-7503
          </a>
          <a href="https://linkedin.com/in/rajuyadav1221" target="_blank" className="flex items-center gap-2 hover:text-indigo-400">
            <Linkedin size={18}/> LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}