"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import Regularcontainer from './ui/regularcontainer';
import { motion } from 'framer-motion';
import 'swiper/css'

export default function Socialcred() {
  return (
    <Regularcontainer>
        <h2 className="text-4xl font-bold mb-8">
        Ezt mondták rólam
        </h2>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <motion.div 
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
                className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 rounded-3xl ">
                <h3 className="text-2xl font-bold">Új perspektíva kell</h3>
                <p className="text-sm">
                    Hasznos kérdésekre, eszköztárra vagy más nézőpontra lenne
                    szükséged.
                </p>
                </motion.div>
            </SwiperSlide>
            <SwiperSlide>
                <motion.div 
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
                className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 rounded-3xl ">
                <h3 className="text-2xl font-bold">Új perspektíva kell</h3>
                <p className="text-sm">
                    Hasznos kérdésekre, eszköztárra vagy más nézőpontra lenne
                    szükséged.
                </p>
                </motion.div>
            </SwiperSlide>
            <SwiperSlide>
                <motion.div 
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
                className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 rounded-3xl ">
                <h3 className="text-2xl font-bold">Új perspektíva kell</h3>
                <p className="text-sm">
                    Hasznos kérdésekre, eszköztárra vagy más nézőpontra lenne
                    szükséged.
                </p>
                </motion.div>
            </SwiperSlide>
            <SwiperSlide>
                <motion.div 
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4, }}
                className="flex flex-col justify-between gap-4 p-4 bg-white w-full min-h-48 rounded-3xl ">
                <h3 className="text-2xl font-bold">Új perspektíva kell</h3>
                <p className="text-sm">
                    Hasznos kérdésekre, eszköztárra vagy más nézőpontra lenne
                    szükséged.
                </p>
                </motion.div>
            </SwiperSlide>
        </Swiper>
    </Regularcontainer>
  )
}
