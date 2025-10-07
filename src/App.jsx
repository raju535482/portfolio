import {motion} from 'framer-motion';
import StatCard from './components/StatCard';
import ProjectCard from './components/ProjectCard';
import { Mail, Phone, Linkedin } from 'lucide-react';
import "./index.css";

export default function App(){

  const projects = [
    { title: 'BuyPassNow', tech: 'Android', desc: 'Mall parking booking app' },
    { title: 'MWR Life', tech: 'Android', desc: 'Lifestyle consultant app' },
    { title: 'CTS (Custom Travel Solution)', tech: 'Android', desc: 'Flight, Hotel, Event booking with car rental' },
    { title: 'Njoy CAB Apps', tech: 'Android', desc: 'Intercity cab booking app' },
    { title: 'OC Holiday Tracker', tech: 'Android', desc: 'HR travel & holiday tracker for OneClick' },
    { title: 'Q8 Captain Apps', tech: 'Android', desc: 'Gym trainer and trainee app' },
    { title: 'Video Compresso', tech: 'Android (Personal)', desc: 'Video compression app' },
    { title: 'Quick Store 2.0', tech: 'Android (Personal)', desc: 'Instagram/Twitter/TikTok media downloader' },
    { title: 'PDF Builder', tech: 'Android (Personal)', desc: 'Image to PDF building app' },
    { title: 'AIO Sleeve', tech: 'Android', desc: 'ECG & heart rate monitoring app' },
    { title: 'Semicolon Apps', tech: 'Android', desc: "Depression survivor's social media app" },
    { title: 'Sigvaris', tech: 'Android & iOS', desc: '3D reconstruction app to measure calf, thigh, and hips' },
    { title: 'Replik3D', tech: 'Android & iOS', desc: '3D reconstruction app to measure full body, hand, feet' },
    { title: 'Michelin Measures', tech: 'iOS (LiDAR)', desc: '3D reconstruction app to scan tires using LiDAR' }
  ];

  const cardVariant = { hidden: { opacity:0, y:20 }, visible: i=> ({ opacity:1, y:0, transition: { delay: i*0.06 }}) };

  return (
    <div className="min-h-screen relative overflow-hidden animated-bg orbs">
      <div className="particles" aria-hidden="true">
        {[0,1,2,3,4].map((i)=> (<div key={i} className='particle' style={{left: (8+i*18)+'%', top: (12+i*10)+'%', background: `radial-gradient(circle at 30% 30%, rgba(139,92,246,0.28), rgba(79,70,229,0.06))`}} />))}
      </div>

      <header className="max-w-4xl mx-auto text-center py-16 px-6 relative z-10">
        <motion.p initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="text-sm text-gray-400">Mobile Application Developer</motion.p>
        <motion.h1 initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{delay:0.15}} className="text-5xl font-extrabold text-indigo-400">Raju Yadav</motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Experienced Mobile Application Developer with more than six years of expertise in Android development (Java & Kotlin)
          and one year in iOS (Swift). Passionate about building high-quality mobile applications and optimizing user experiences.
        </motion.p>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25}} className="mt-6 flex justify-center gap-6 text-gray-300">
          <a href="mailto:raju535482@gmail.com" className="flex items-center gap-2 hover:text-indigo-300"><Mail size={18}/> raju535482@gmail.com</a>
          <a href="tel:+14387787503" className="flex items-center gap-2 hover:text-indigo-300"><Phone size={18}/> +1 438-778-7503</a>
          <a href="https://linkedin.com/in/rajuyadav1221/" target="_blank" className="flex items-center gap-2 hover:text-indigo-300"><Linkedin size={18}/> linkedin.com/in/rajuyadav1221/</a>
        </motion.div>
      </header>

      <main className="relative z-10">
        <section className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 mb-16">
          {['6+ yrs','14+','10k+','10+'].map((v,i)=>(
            <motion.div custom={i} initial="hidden" whileInView="visible" viewport={{once:true}} variants={cardVariant} key={i}>
              <StatCard value={v} label={['Experience','Apps Delivered','Total Downloads','Clients / Partners'][i]} />
            </motion.div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Senior Android Developer | iOS Developer — VyoO (Applications Mobiles Overview Inc.)</h3>
              <p className="text-sm text-gray-400">Mar 2022 – Nov 2024 — Montreal, Quebec, Canada</p>
              <ul className="list-disc ml-5 mt-3 text-gray-300 text-sm">
                <li>Built Open3D v0.15.1 library for Android for offline 3D reconstruction on-device.</li>
                <li>Assisted iOS team and worked independently on multiple iOS projects.</li>
                <li>Configured CMake for custom builds across Android CPU architectures.</li>
                <li>Developed and managed AR & 3D reconstruction projects (feet, hand, full-body measurement).</li>
                <li>Handled 2–3 projects per week and delivered 10+ apps over two years.</li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Senior Android Developer — One Click IT Consultancy Pvt. Ltd</h3>
              <p className="text-sm text-gray-400">Oct 2018 – Dec 2019 — Ahmedabad, Gujarat, India</p>
              <ul className="list-disc ml-5 mt-3 text-gray-300 text-sm">
                <li>Optimized app compatibility across devices; maintained high performance.</li>
                <li>Recorded and resolved issues discovered during testing; led bug-free deliveries.</li>
                <li>Managed a health-focused project and delivered milestones on time.</li>
                <li>Worked on 20+ apps during tenure.</li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Junior Android Developer — One Click IT Consultancy Pvt. Ltd</h3>
              <p className="text-sm text-gray-400">Nov 2017 – Oct 2018 — Ahmedabad, Gujarat, India</p>
              <ul className="list-disc ml-5 mt-3 text-gray-300 text-sm">
                <li>Delivered multiple bug-free projects during probation and beyond.</li>
                <li>Upgraded legacy projects to modern SDK/AndroidX; improved stability and performance.</li>
                <li>Received Outstanding Achievement Award in 2018.</li>
              </ul>
            </motion.div>

            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg">Junior Android Developer — PluralMind Technolab Pvt. Ltd</h3>
              <p className="text-sm text-gray-400">Aug 2016 – Nov 2017 — Ahmedabad, Gujarat, India</p>
              <ul className="list-disc ml-5 mt-3 text-gray-300 text-sm">
                <li>Started as entry-level developer; self-learned and promoted to full-time.</li>
                <li>Assisted senior developers and ensured app performance standards.</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((p,i)=>(
              <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} transition={{delay:i*0.04}} key={p.title}>
                <ProjectCard title={p.title} tech={p.tech} desc={p.desc} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-indigo-400 font-semibold mb-3">Programming & Platforms</h3>
              <p className="text-gray-300 text-sm">Android (Kotlin, Java), iOS (Swift), Python, C++, HTML, CSS, PHP</p>
              <h4 className="mt-4 text-indigo-400 font-semibold">Android Implementations</h4>
              <p className="text-gray-300 text-sm">Jetpack Compose, Coroutines, Flow, Room, DI (Hilt), Google Maps, FCM, ArCore, MediaPipe, NDK/NDK builds, Open3D</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="text-indigo-400 font-semibold mb-3">Tools & Methodologies</h3>
              <p className="text-gray-300 text-sm">Android Studio, Xcode, PyCharm, JIRA, Trello, Confluence, GitHub, Bitbucket</p>
              <h4 className="mt-4 text-indigo-400 font-semibold">Other Skills</h4>
              <p className="text-gray-300 text-sm">R&amp;D, Testing, Debugging, API Integration, Scrum & Agile, Team Collaboration</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-16">
          <h2 className="text-3xl font-bold mb-6">Education & Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold">IT Project Management — Attestation of College Studies</h3>
              <p className="text-sm text-gray-400">ISI College — Jan 2020 – Feb 2022 — Montreal, QC, Canada</p>
              <h3 className="mt-4 font-semibold">MCA — Master's Degree</h3>
              <p className="text-sm text-gray-400">Dharmsinh Desai University — Aug 2013 – May 2016 — Nadiad, Gujarat, India</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold">B.Sc. in Statistics</h3>
              <p className="text-sm text-gray-400">MK Bhavnagar University — Aug 2010 – May 2013 — Bhavnagar, Gujarat, India</p>
              <h3 className="mt-4 font-semibold">Certifications</h3>
              <p className="text-sm text-gray-400">Professional Scrum Master I (PSM I) — 03/25/2021</p>
              <p className="text-sm text-gray-400">Outstanding Contribution Award — 09/01/2018</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 mb-20">
          <h2 className="text-3xl font-bold mb-6">Languages</h2>
          <div className="bg-gray-800 rounded-2xl p-6">
            <p className="text-gray-300">English — Fluent</p>
            <p className="text-gray-300">French — Beginner</p>
          </div>
        </section>

        <footer className="bg-gray-950 text-gray-400 py-10 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Raju Yadav — Mobile Application Developer</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="mailto:raju535482@gmail.com" className="hover:text-indigo-300">Contact</a>
            <a href="https://linkedin.com/in/rajuyadav1221/" target="_blank" className="hover:text-indigo-300">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  )
}
