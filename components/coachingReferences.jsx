"use client";

import Coachingreferencetile from "./ui/coachingReferenceTile";
import Regularcontainer from "./ui/regularcontainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import H2 from "./ui/typo/H2";
import SubTitle from "./ui/typo/SubTitle";

export default function Coachingreferences() {
  return (
    <Regularcontainer bgcolor={"bg-[--white]"} padding={'py-16 lg:py-32'}>
      <div className="flex flex-col gap-16">
        <div className="flex flex-col lg:items-center gap-4">
            <SubTitle>
            Coaching referenciák
            </SubTitle>
            <H2>Ügyfeleim mondták rólam</H2>
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
              <Coachingreferencetile image={'/referenciak/bencze-mariann.webp'} name={'Bencze Mariann'} from={'Head of Culture, Engagement and DEIB, Adverity (Bécs, Ausztria)'} comment={'<p>Éva nemcsak magasan képzett szakember, de a nyitottság, érzelmi intelligencia és empatikus hozzáállás kombinációjával is rendelkezik. Az általa teremtett biztonságos és elfogadó légkör lehetővé tette számomra, hogy szabadon felfedezzem gondolataimat, félelmeimet és törekvéseimet.</p><p>Úgy érzem, hogy Éva hatása messze túlmutat a coaching keretein. Őszinte szenvedélye mások támogatása iránt igazán különlegessé teszi: veleszületett képessége van ügyfelei motiválására, inspirálására és önbizalmuk erősítésére.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/kiss-imre.webp'} name={'Kiss Imre'} from={'Consumer Insights Manager, Kia Europe (Frankfurt, Németország)'} comment={'<p>Szakmai kihívásokkal kerestem meg Évát, és ő beleegyezett, hogy együtt dolgozzon velem ezeken. Hozzáállását az én igényeimre szabta, és úgy hámozta le a problémáim különböző rétegeit, mint a hagymát. Amit először a fő problémáimnak tartottam, azokról jól irányzott kérdései által kiderült, hogy egy mélyebb dolog tünetei csupán.</p><p>Összességében csak ajánlani tudom az Évával való együttműködést. Empatikus, profi, intelligens és nagyon leegyszerűsítve remek beszélgetőpartner.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/sas-dora.webp'} name={'Sas Dóra'} from={'Global VP of Business Development, Teads (Zürich, Svájc)'} comment={'<p>Éva kiváló szakember, aki támogató és inspiráló módon segített céljaim elérésében. Professzionális hozzáállása és empátiája révén gyorsan kialakítottuk a bizalmi kapcsolatot, és könnyedén megtaláltuk a közös hangot. Jól irányzott kérdéseivel segített mélyebb problémákat feltárni, önmagamat jobban megismerni és iránymutatásával teljesen új nézőpontokat megismerni. Biztos vagyok benne, hogy a coaching során megszerzett tudást és eszköztárat hosszú távon is tudom majd kamatoztatni.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/pecsi-anita.webp'} name={'Pécsi Anita'} from={'Digitális Termékmenedzser, Paramount Group'} comment={'<p>A coaching folyamat kezdetekor elakadva éreztem magam a karrieremben, alacsony volt a szakmai önbizalmam, nem tudtam, merre és hogyan haladjak tovább. </p><p>Ehhez képest a közös munkánk végére, Éva sok gondolatébresztő kérdésének és az alkalmak közötti “házi feladatoknak” köszönhetően rengeteg új ötletem született. </p><p>Visszanyertem a szakmai magabiztosságom, melynek segítségével képes vagyok tovább alakítani a karrieremet, és ezért végtelenül hálás vagyok.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/szabo-domokos.webp'} name={'Szabó Domokos'} from={'Group Wholesale Director, Vanguards - divatipari cégcsoport'} comment={'Évával gyorsan egymásra hangolódtunk és gördülékeny volt a közös munka. Az tetszett legjobban, hogy a kitűzött célok megoldását segített végig szem előtt tartani és proaktívan visszamérni, ezáltal fontos felismerésekre jutottam a saját szükségleteimmel kapcsolatban.'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/varga-zsuzsa.webp'} name={'Varga Zsuzsa'} from={'Business Development Director CEE, Terrytory Influence (Bertelsmann Group)'} comment={'<p>Éva életem egy nagyon nehéz időszakában lett a coach-om, amikor sokat tudott segíteni stabil pontjaim megtalálásában. Jó meglátásai és alapos kérdései segítettek új megvilágításba helyezni a dolgokat és új nézőpontokat találni. </p><p>Gyorsan megértette az üzleti és szakmai helyzetemet, és segített a gyakorlati cselekvési pontok megfogalmazásában. Mindez a szakértelem párosul fantasztikus, kedves és nagyon támogató személyiségével. Azóta is hálás vagyok neki a folyamatokért, amiket elindított bennem.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/sopov-kata.webp'} name={'Sopov Kata'} from={'Innovációs menedzser, Adaptive Media'} comment={'Évával nagyon hamar megtaláltuk a közös hangot. Rögtön értette, amiről beszélek, nem voltak fölösleges körök. Sokat segített abban, hogy ne csak a konkrét problémákkal foglalkozzak, hanem a gondolkodásmódomat is meg tudjam változtatni.'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/jankovics-diana.webp'} name={'Jankovics Diána'} from={'Key Account Manager, Lindt Magyarország'} comment={'Élveztem Évával a közös munkát. Figyelmes és hatékony kérdésekkel segített a saját céljaim megfogalmazásában. Mindig felkészült és a közösen kitűzött célt tartotta szem előtt. Szívesen vettem részt minden alkalmon, mert kellemes légkör várt rám.'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/somkovi-bernadett.webp'} name={'Somkövi Bernadett'} from={'nyelvtanár, tréner'} comment={'<p>Szerettem, hogy Éva teret adott a kusza problémagombolyagom gomolygásának, hogy aztán egy jól irányzott kérdés hatására egyértelművé váljon számomra a főszál és a saját megoldásom felé indulhassak el. </p><p>Jólesett, hogy biztonságban érezhettem magam mellette, hogy felelősségben tartott és hogy szakmai és emberi tudott lenni egyszerre.</p>'}/>
            </SwiperSlide>
            <SwiperSlide>
              <Coachingreferencetile image={'/referenciak/blankprofile.webp'} name={'Dobos Kata'} from={'szakfordító és tolmács'} comment={'<p>Évával öröm volt együttműködni. Minden alkalomra felkészülten érkezett, együtt mértük fel és határoztuk meg a fejlesztendő területeimet, melyeket segített fókuszba helyezni és konkretizálni. </p><p>Végig jó szakemberként funkcionált, semleges tudott maradni és kívülről szemlélni a dolgokat, sosem "okoskodott bele" semmibe, nem próbálta megmondani a "tutit", hanem mellettem állva, velem együtt haladva segített eljutni a cél felé. </p><p>Jó kérdéseket tett fel, melyek sokszor elgondolkodtattak, további elmélkedésre ösztönöztek, nekem is kellett dolgoznom magamon. Számomra mindig nagyon megnyugtató volt vele beszélgetni, megnyílhattam neki. Higgadt, empatikus személyisége és jó meglátásai miatt abszolút jó coach-nak tartom.</p>'}/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Regularcontainer>
  );
}
