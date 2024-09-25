"use client"

import Mainheader from "@/components/ui/mainHeader"
import Regularcontainer from "@/components/ui/regularcontainer"
import Coachingreferencetile from "@/components/ui/coachingReferenceTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import H2 from "@/components/ui/typo/H2";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Coachingreferences from "@/components/coachingReferences";

export default function Coaching() {
  return (
    <>
    <Mainheader title={'Referenciák'} subtitle={'Coaching referenciák'} image={'/eva/coaching.webp'}/>
    <Coachingreferences />
    </>
  )
}
