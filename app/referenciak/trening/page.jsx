"use client"

import Mainheader from "@/components/ui/mainHeader"
import Regularcontainer from "@/components/ui/regularcontainer"
import Coachingreferencetile from "@/components/ui/coachingReferenceTile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Trening() {
  return (
    <>
    <Mainheader title={'Tréning referenciák'} image={'/eva/egyenlito3.webp'}/>
    <Regularcontainer padding={"lg:py-32 py-16"} bgcolor={'bg-[--white]'}>
    <div className="flex flex-col gap-16">
        <div>
          <h2 className="text-center">Visszajelzések, amelyeket trénerként kaptam</h2>
        </div>
        <div className="w-full">
          <Swiper
            className=""
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={32}
            slidesPerView={3}
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
              <Coachingreferencetile image={'/referenciak/pecsi-judit.webp'} name={'Pécsi Judit'} from={'HR Director, Union Biztosító'} comment={'<p>Évával trénerként a rejtett előítéletek tréningen találkoztam. Lenyűgöző a tudása ebben a témában, ennél talán a téma iránti elkötelezettsége nagyobb. Megragadott az is, ahogy figyelt ránk, hogy mit fogadtunk be, mi foglalkoztat bennünket a hallottakból. Nem csak az ismereteinket bővítette, de motivált, elgondolkodtatott és finoman arra sarkallt, hogy megkérdőjelezzek egy-két dolgot a meglévő gyakorlatunkban.</p><p>Sok hét eltelte után is szembejön olyan aspektus, kérdés, amiről ő jut eszembe. Értékelem, hogy behozott olyan szempontokat, amelyekkel tudok jobb vagy még jobb döntéseket hozni.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/sona-lasikova.webp'} name={'Sona Lasikova'} from={'Head of People & Culture development, NN Biztosító'} comment={'<p>Éva többször volt a trénerünk az elmúlt 2 évben, rejtett előítéletek témában. Mindig öröm volt vele dolgozni, mert teljes mértékben rábízhattam magam - a teljes program megtervezésétől a lebonyolításig. Különösen nagyra értékelem professzionalizmusát és szakértelmét a DEI területén. Éva egyértelműen teljes szívvel és széles mosollyal az arcán végzi a munkáját.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/horvath-katalin.webp'} name={'Horváth Katalin'} from={'HR Business Partner Team Lead, Richter Gedeon Nyrt.'} comment={'<p>Edina és Éva rejtett előítéletek tréninget tartott a HR csapatunknak. Mint felelős magyarországi nagyvállalat, fontosnak tartjuk, hogy képezzük/fejlesszük magunkat ebben a  témában is, ezzel az alkalommal a toborzási/kiválasztási folyamatunk előítélet-mentesítése volt a téma.</p><p>Számomra a szakmai tartalom mellett a két tréner azon képessége volt a legfontosabb, hogy egy olyan légkört tudtak kialakítani, személyes példáikat is beépítve, amely egy nagyon bensőséges közeget teremtett ehhez a témához. A témáról már sokat tud a HR csapat, sikerült nevesíteni, csoportosítani azokat a területeket, ahol még van lehetőség fejlődésre.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/nemeth-gabriella.webp'} name={'Németh Gabriella'} from={'HR Coordinator, Linde Gáz Magyarország Zrt.'} comment={'<p>Szerencsésnek mondhatom magam, mert személyesen vehettem részt az Egyenlítő Alapítvány Rejtett előítéletek tréningjén.<br>Jól felépített tréningnapunk volt, ahol a nem éppen könnyen emészthető témakört remek gyakorlati feladatokkal fűszerezve vettük végig a trénerekkel és a HR csapattal. Mind Éva, mind pedig Edina végtelen lelkesedéssel és profizmussal hozták közelebb az előítéletek témakört, érdekes aspektusokat felvillantva, a lényeges pontokat pedig velünk együtt, konstruktív módon átbeszélve.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/vasvari-zsofia-virag.webp'} name={'Vasvári Zsófia Virág'} from={'junior HR generalista, Union Biztosító'} comment={'<p>Éva szakmai tudása megkérdőjelezhetetlen, az emberi oldala tiszteletre méltó. Rejtett előítéletek tréningen volt szerencsém találkozni vele és tanulni tőle. Kisugárzása és természetessége azonnal megteremtette azt a fajta bizalmi légkört, mely lehetővé tette, hogy mély és komplex témákról beszélgessünk, véleményeket ütköztessünk, megosztó kérdéseket boncolgassunk.</p><p>Az elméleti hátteret számos interaktív blokkal támogatta meg, igazán valós élményt adva és testközelbe hozva a hallottakat. Jól célzott kérdéseivel, érdekes perspektíváival hamar arra késztetett, hogy megkérdőjelezzem az addigi működésemet mind a munkában, mind a magánéletemben.</p><p>Mély önreflexiót és valódi szemléletformálást kaptam. Útravaló volt a tréning, amit biztosan magammal viszek.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/ambrus-zsuzsanna.webp'} name={'Ambrus Zsuzsanna'} from={'HR Business Partner, Richter Gedeon Nyrt.'} comment={'<p>A trénerek elkötelezettsége nagyon inspirálóan hatott rám. Az előadás egyszerű, érthető, világos üzeneteket tartalmazott, sokszor megható példákkal. Sikerült úgy felépíteniük a tréning anyagát, hogy nem éreztem túl soknak, túl kevésnek, de nagyon átéreztem, hogy ezzel mennyire fontos foglalkozni.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/hoffmann-agoston.webp'} name={'Hoffmann Ágoston'} from={'Agile Coach, NN Biztosító'} comment={'<p>Az Egyenlítő Alapítvány és Éva Rejtett előítéletek tréningje nagyon hasznos volt számomra a napi munkámban. A mai napig is vannak olyan aspektusai, amelyeket használni tudok, vagy mint szempont figyelembe venni a munkatársaimmal kapcsolatban. Éva érdekesen és nagy átéléssel tudta ezeket az információkat átadni.</p>'}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Regularcontainer>
    </>
  )
}
