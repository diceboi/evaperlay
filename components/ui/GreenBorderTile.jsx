import { motion } from "framer-motion";

export default function GreenBorderTile({text}) {
  return (
    <motion.div 
    className="flex flex-col justify-center relative align-middle py-4 pl-7 pr-4 -ml-1 bg-white shadow-sm border-l-4 border-[--aquamarine]"
    initial={{ y: -20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.2, type: "ease-out", delay: 0.2}}
    >
      <div className="absolute flex flex-col items-center justify-center top-1/2 -translate-y-1/2 -right-7 w-8 h-8"></div>
        {text}
    </motion.div>
  );
}
