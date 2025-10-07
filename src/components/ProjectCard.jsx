import { motion } from 'framer-motion';

export default function ProjectCard({title, tech, desc}){
  return (
    <motion.div whileHover={{ scale: 1.04, y: -8 }} className="bg-gray-800 rounded-2xl p-5 hover:shadow-xl transition tilt-hover">
      <h3 className="font-semibold text-lg text-white">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{desc}</p>
      <div className="text-xs text-gray-400 mt-3">{tech}</div>
    </motion.div>
  )
}
