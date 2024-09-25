"use client"

import Regularcontainer from "@/components/ui/regularcontainer"
import Coachingreferencetile from "@/components/ui/coachingReferenceTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import H2 from "./ui/typo/H2";

export default function Vallalati() {
  return (
    <Regularcontainer bgcolor={"bg-[--white]"} padding={'lg:py-32 py-16'}>
      <div className="flex flex-col gap-16">
        <div>
          <H2 classname="lg:text-center lg:self-center">Céges partnereim mondták rólam</H2>
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
                  slidesPerView: 3,
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
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/jakab-judit.webp'} name={'Jakab Judit'} from={'Sokszínűségi és esélyegyenlőségi szakértő, Magyar Telekom'} comment={'<p>Évával mindig öröm volt együttdolgozni. Felkészült volt, ismerte a témát/projektet, amin dolgozott, bármit kérdezhettem tőle, képben volt, vagy ha mégsem, villámgyorsan utánajárt a dolognak. Mindig partnerségre, közös értékteremtésre törekedett, szem előtt tartva a vállalati oldal szempontjait, igényeit, mindezt úgy, hogy közben ne sérüljön a szakmaiság, partnerség.<br><br>Személy szerint nagyra értékelem nyitott, kedves, empatikus hozzáállását, kitartását, szakmai alázatát és azt, hogy mindig őszinte érdeklődéssel tanult új dolgokat, illetve ugyanilyen lelkesedéssel osztotta meg tudását velem és másokkal is.</p>'}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Regularcontainer>
  )
}
