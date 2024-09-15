import { motion } from "framer-motion";
import Paragraph from "./typo/Paragraph";
import Label from "./typo/Label";

export default function IconTile({icon, title, text}) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2, type: "spring", bounce: 0.4 }}
      className="flex flex-col justify-center items-center gap-4 p-8 bg-white w-full min-h-72 hover:shadow-xl transition-all duration-500 "
    >
      <div className="flex flex-col justify-center items-center h-1/3 w-full">
        {icon}
      </div>
      <div className="flex flex-col justify-start items-center gap-4 h-1/2 w-full">
        <Paragraph classname={'font-bold text-center'}>{title}</Paragraph>
        <Label classname={'text-center'}>
          {text}
        </Label>
      </div>
    </motion.div>
  );
}
