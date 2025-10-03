import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold">Raju Yadav</h1>
        <p className="text-lg text-gray-600">
          Senior Android Developer | PHP & Web Developer
        </p>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          Experienced Android Developer with 5+ years of expertise in mobile and
          backend development. Skilled in Android (Java, Kotlin), iOS (Swift), and
          web technologies (PHP, HTML, CSS, JavaScript). Passionate about
          delivering scalable, user-friendly applications and collaborating with
          clients to transform ideas into digital solutions.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-white shadow-md rounded-2xl p-6 max-w-4xl mx-auto my-6">
        <h2 className="text-2xl font-semibold mb-4">Core Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          <li>Android (Java, Kotlin, Jetpack)</li>
          <li>iOS (Swift, SwiftUI)</li>
          <li>PHP & MySQL</li>
          <li>HTML, CSS, JavaScript</li>
          <li>APIs & Backend Systems</li>
          <li>Agile/Scrum</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Senior Android Developer | VyoO (Montreal)</h3>
              <p className="text-sm text-gray-600">Mar 2022 – Nov 2024</p>
              <ul className="list-disc ml-6">
                <li>Led Android app development for AR & 3D reconstruction projects.</li>
                <li>Integrated native C++ libraries and collaborated with iOS team.</li>
                <li>Delivered 10+ production apps ensuring performance and scalability.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Senior Android Developer | One Click IT (India)</h3>
              <p className="text-sm text-gray-600">Nov 2017 – Dec 2019</p>
              <ul className="list-disc ml-6">
                <li>Developed healthcare and enterprise apps with optimized performance.</li>
                <li>Built PHP/MySQL modules for dashboards and data sync.</li>
                <li>Delivered 20+ apps balancing mobile and backend work.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Junior Android Developer | PluralMind (India)</h3>
              <p className="text-sm text-gray-600">Aug 2016 – Nov 2017</p>
              <ul className="list-disc ml-6">
                <li>Assisted in Android projects and lightweight PHP APIs.</li>
                <li>Worked on 5+ Android apps ensuring performance standards.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white shadow-md rounded-2xl p-6 max-w-4xl mx-auto my-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">AR Measurement App</h3>
              <p className="text-sm text-gray-600">Android | Kotlin, C++</p>
              <p className="mt-2">Developed an AR-based app for accurate body/feet measurements using Open3D libraries.</p>
              <a href="#" className="flex items-center gap-2 text-blue-600 mt-2">
                <Globe size={16}/> View Project
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Healthcare Mobile App</h3>
              <p className="text-sm text-gray-600">Android & PHP</p>
              <p className="mt-2">Designed and developed a healthcare app with backend integration for patient data management.</p>
              <a href="#" className="flex items-center gap-2 text-blue-600 mt-2">
                <Globe size={16}/> View Project
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-bold">Web Dashboard for Enterprise App</h3>
              <p className="text-sm text-gray-600">PHP, MySQL, HTML/CSS/JS</p>
              <p className="mt-2">Built a responsive dashboard for managing app data, user accounts, and analytics.</p>
              <a href="#" className="flex items-center gap-2 text-blue-600 mt-2">
                <Globe size={16}/> View Project
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white shadow-md rounded-2xl p-6 max-w-4xl mx-auto my-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc ml-6">
          <li>Attestation of College Studies, IT Project Management – ISI College, Montreal</li>
          <li>MCA – Dharmsinh Desai University, Gujarat</li>
          <li>B.Sc. in Statistics – MK Bhavnagar University, Gujarat</li>
        </ul>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Certifications & Awards</h2>
        <ul className="list-disc ml-6">
          <li>Professional Scrum Master I (PSM I)</li>
          <li>Outstanding Contribution Award – 2018</li>
        </ul>
      </section>

      {/* Contact */}
      <footer className="bg-gray-900 text-white p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:raju535482@gmail.com" className="flex items-center gap-2">
            <Mail /> raju535482@gmail.com
          </a>
          <a href="tel:+14387787503" className="flex items-center gap-2">
            <Phone /> +1 438-778-7503
          </a>
          <a href="https://linkedin.com/in/rajuyadav1221" target="_blank" className="flex items-center gap-2">
            <Linkedin /> LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}