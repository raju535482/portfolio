import { Mail, Phone, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-lg text-gray-400">Hi, I’m</h2>
        <h1 className="text-5xl font-extrabold text-indigo-400">Raju Yadav</h1>
        <p className="text-xl mt-2 text-gray-300">Senior Android Developer | Junior iOS Developer | Junior Web Developer | Scrum Master</p>
        <p className="max-w-2xl mx-auto mt-4 text-gray-400">
          Crafting exceptional mobile and web experiences with Kotlin, Java, Swift, PHP, and JavaScript.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-indigo-400">20+</h3>
          <p className="text-gray-400">Apps Delivered</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-indigo-400">1M+</h3>
          <p className="text-gray-400">Total Downloads</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-indigo-400">5+</h3>
          <p className="text-gray-400">Years Experience</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-indigo-400">10+</h3>
          <p className="text-gray-400">Clients</p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="text-center mb-20">
        <div className="bg-gray-800 p-8 rounded-2xl max-w-xl mx-auto shadow-xl">
          <h3 className="text-indigo-400 uppercase text-sm font-semibold">Featured Project</h3>
          <h2 className="text-2xl font-bold mt-2">AR Measurement App</h2>
          <p className="mt-3 text-gray-400">
            An AR-based app for accurate body/feet measurements using Open3D libraries.
          </p>
          <div className="flex justify-center mt-4 gap-6 text-gray-400 text-sm">
            <span>Android</span>
            <span>Kotlin</span>
            <span>C++</span>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-2 text-indigo-400">Core Technologies</h3>
            <div className="mb-4">
              <p>Kotlin / Java</p>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-indigo-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div className="mb-4">
              <p>Swift / iOS</p>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-indigo-500 h-2 rounded-full w-[75%]"></div>
              </div>
            </div>
            <div className="mb-4">
              <p>PHP / MySQL</p>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-indigo-500 h-2 rounded-full w-[80%]"></div>
              </div>
            </div>
            <div className="mb-4">
              <p>HTML / CSS / JS</p>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-indigo-500 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-2 text-indigo-400">Specialized Skills</h3>
            <div className="mb-4">
              <p>Firebase</p>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-indigo-500 h-2 rounded-full w-[88%]"></div>
              </div>
            </div>
            <div className="mb-4">
              <p>Agile / Scrum</p>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className="bg-indigo-500 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Apps</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">Healthcare Mobile App</h3>
            <p className="text-gray-400 mt-2">App with backend integration for patient data management.</p>
            <p className="text-sm mt-3 text-gray-500">Android | PHP | MySQL</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h3 className="text-xl font-bold">Enterprise Dashboard</h3>
            <p className="text-gray-400 mt-2">Responsive web dashboard for managing app data and analytics.</p>
            <p className="text-sm mt-3 text-gray-500">PHP | MySQL | HTML/CSS/JS</p>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="max-w-5xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Development Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-indigo-400">Ideation & Planning</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm">
              <li>Requirements gathering</li>
              <li>User flow & wireframes</li>
              <li>Prototype development</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-indigo-400">Development</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm">
              <li>Architecture setup</li>
              <li>Agile sprints</li>
              <li>Testing & reviews</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-indigo-400">Launch & Growth</h3>
            <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm">
              <li>App store optimization</li>
              <li>Integration & monitoring</li>
              <li>Regular updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
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