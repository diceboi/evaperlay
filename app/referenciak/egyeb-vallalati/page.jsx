"use client";

import Mainheader from "@/components/ui/mainHeader"
import Regularcontainer from "@/components/ui/regularcontainer"
import Coachingreferencetile from "@/components/ui/coachingReferenceTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Vallalati() {
  return (
    <>
    <Mainheader title={'Egyéb vállalati referenciák'} image={'/eva/egyenlito3.webp'}/>
    <Regularcontainer bgcolor={"bg-[--white]"} padding={'py-32'}>
      <div className="flex flex-col gap-16">
        <div>
          <h2 className="text-center">Céges partnereim mondták rólam</h2>
        </div>
        <div className="w-full">
          <Swiper
            className=""
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={32}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
          >
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/kemeny-peter.webp'} name={'Kemény Péter'} from={'Sokszínűség és integráció szakértő, E.ON Hungária Zrt.'} comment={'<p>Azért szeretek Évával együtt dolgozni, mert nála mindig rendben van a hatékonyság és barátságosság, az értő figyelem és a szakmai ötletek aránya. Több helyzetben is volt alkalmam megfigyelni és megtapasztalni milyen tudatosan építi partnerkapcsolatait, miközben együttműködési törekvése őszinte érdeklődéssel, gyakorlatiassággal és támogató szándékkal társul. Könnyen ráhangolódik partnerei igényeire és kitartó az ügyfélnek fontos értékek leszállításában.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/liptai-judit.webp'} name={'Liptai Judit'} from={'Group Director of Sales and Marketing, Danubius Hotels'} comment={'<p>Nagy tiszteletben tartjuk az Egyenlítő Alapítvány munkáját, igyekszünk részt venni eseményeiken és részesei voltunk a mentor programjuknak is.<br><br>Évával sok egyeztetésen, közös gondolkodáson vagyunk túl, jó hangulat, értő figyelem és konstruktív együttműködés jellemezte ezeket a megbeszéléseket. Éva őszinte, empatikus, kedves lénye a garancia arra, hogy a közös munka mindkét félnek örömet okozzon és arra sarkalljon, hogy még többet tegyünk nemes céljaink eléréséért.</p>'}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Regularcontainer>
    </>
  );
}
