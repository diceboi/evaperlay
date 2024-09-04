"use client"

import Mainheader from '@/components/ui/mainHeader'
import Regularcontainer from '@/components/ui/regularcontainer'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Primarygreenbuton from '@/components/ui/primaryGreenButon'
import { TbPlus } from "react-icons/tb";
import { TbMinus } from "react-icons/tb";

export default function Gyik() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  const faqs = [
    {
      question: 'Mi a coaching és miben segít?',
      answer: (
        <>
          <p>A sokféle definíció közül szerintem az ICF (International Coaching Federation) meghatározása fedi ezt le a legjobban:</p>
          <p>A coaching az ügyféllel való partneri együttműködés, olyan gondolatébresztő és kreatív folyamat, amely arra inspirálja az ügyfelet, hogy a legtöbbet hozza ki önmagából személyes és szakmai szempontból is.</p>
          <p>Akik résztvevői lesznek egy coaching folyamatnak, megtapasztalhatják annak élményét, hogy:</p>
          <ul className='list-disc marker:text-[--aquamarine] pl-4'>
            <li>másképp látják majd személyes kihívásaikat és lehetőségeiket,</li>
            <li>megerősödik gondolkodásuk és döntéshozó képességük,</li>
            <li>fejlődik személyes hatékonyságuk,</li>
            <li>nő az önbizalmuk és</li>
            <li>közelebb kerülnek munkájuk és élet-szerepük beteljesítéséhez.</li>
          </ul>
        </>
      ),
    },
    {
      question: 'Milyen a jó coach?',
      answer: (
        <>
          <p>Az ICF kompetencia-modellje hatékony sorvezető lehet egy coach teljesítményének megítéléséhez. Eszerint egy jó coach:</p>
          <ul className='list-disc marker:text-[--aquamarine] pl-4'>
            <li>Etikusan viselkedik: Érti és következetesen betartja a coaching etikai irányelveit és a coach-szakmai normákat.</li>
            <li>Coaching szemléletben működik: Nyitott, kíváncsi, rugalmas és ügyfélközpontú szemléletet fejleszt és tart fenn.</li>
            <li>Megállapodásokat köt, és azokat megtartja: Partnerségben az ügyféllel és más érdekelt felekkel (stakeholder) tiszta és egyértelmű megállapodásokat köt a coaching-kapcsolatra, -folyamatra, -célokra és -tervekre. A teljes folyamatra és az egyes ülésekre egyaránt szerződik.</li>
            <li>Elősegíti és fenntartja a bizalmat és biztonságot: Partnerségben az ügyféllel biztonságos és támogató teret hoz létre, amiben az ügyfél szabadon megnyilvánulhat. Fenntartja a kölcsönös tiszteletet és bizalmat.</li>
            <li>Tudatosan van jelen: Teljes tudatossággal van jelen az ügyfélleI nyitott, rugalmas, megtartó és magabiztos kapcsolódásban.</li>
            <li>Aktívan figyel/hallgat: Egyaránt koncentrál arra, amit az ügyfél mond és nem mond ki, hogy teljesen megértse az ügyfél kommunikációját az ügyfél rendszereinek kontextusában, és hogy támogassa az ügyfél önkifejezését.</li>
            <li>Előmozdítja a tudatosságot: Előmozdítja az ügyfél tanulását, valamint, hogy az ügyfél új felismerésekre jusson. Ehhez olyan eszközöket és technikákat használ, mint például a hatásos/erőteljes kérdezéstechnika, csendtartás, metaforák és analógiák.</li>
            <li>Elősegíti/facilitálja az ügyfél fejlődését: Partnerségben az ügyféllel cselekvéssé alakítja a tanulást és a felismeréseket. Odafigyel arra, hogy fejlődjön az ügyfél autonómiája/önrendelkezése a coaching-folyamatban.</li>
          </ul>
        </>
      ),
    },
    {
      question: 'Hogy én jó coach vagyok-e?',
      answer: (
        <>
          <p>Igyekszem azzá válni. Ha itt valami nagyképű és egyértelmű IGEN-t olvasnátok, akkor mindenképpen érdemes lenne gyanakodnotok. Két dolgot tudok ehhez hozzátenni: Egyrészt nézzetek körül a Referenciák menüpont alatt, különös tekintettel a coaching referenciákra, hadd beszéljenek helyettem az ügyfeleim arról, mennyire voltak megelégedve a közös munkával.</p>
          <p>Másrészt hadd mondjam el, hogy fantasztikus élmény nekem a coaching, őszinte örömömet lelem a közös munkában, az ügyfeleimmel való beszélgetésekben, a kapcsolódásunkban és fejlődésük nyomon követésében. Ebből az örömből bőven tudok töltekezni és energiát fordítani arra, hogy folyamatosan fejlesszem magam, akár magánemberként (önismeret), akár szakemberként (képzések, módszertanok, szakmai gyakorlat). Elkötelezett vagyok, hogy megtegyek minden tőlem telhetőt annak érdekében, hogy hatékony segítség legyek.</p>
        </>
      ),
    },
    {
      question: 'Mit jelent az, hogy diplomás coach?',
      answer: (
        <>
          <p>Business és team coach oklevelemet a Budapesti Metropolitan Egyetem által szervezett, 3 féléves szakirányú továbbképzés elvégzésével szereztem, amely közgazdász alapdiplomámmal együtt egyetemi végzettségnek felel meg. Az államilag elismert coach képzések között a Metropolitan (METU) híres arról, hogy rendkívül gyakorlatorientált, oktatói pedig a coach szakma legjobbjai közül kerülnek ki, akik maguk is gyakorló szakemberek.</p>
        </>
      ),
    },
    {
      question: 'Mi a különbség a coaching és a terápia között?',
      answer: (
        <>
          <p>A coaching nem terápia, azaz nem foglalkozik a múlttal és a dolgok miértjeinek elemzésével. Jellemzően jövő- és célorientált, azaz a jelenből előretekintve fogalmaz meg célokat, fejlődési lehetőségeket és segíti ezek megvalósulását.</p>
        </>
      ),
    },
    {
      question: 'Mi a különbség a coaching és a tanácsadás között?',
      answer: (
        <>
          <p>A coaching nem tanácsadás, azaz a coach nem mondja meg, mit kell tennie az ügyfélnek. Ha ez mégis megtörténik, könnyen sérülhet a coachingban kialakított egyenrangú partneri viszony, az ügyfélközpontúság és az ügyfél felelősségben tartása. A coach ehelyett abban segíti az ügyfelet, hogy rátaláljon a számára fontos, neki testhezálló, egyedi megoldásokra.</p>
        </>
      ),
    },
    {
      question: 'Mi a különbség a coaching és a mentoring között?',
      answer: (
        <>
          <p>A mentoring folyamatban jellemző, hogy egy adott szakterületen tapasztalt mentor megosztja tudását, tapasztalatait, megéléseit és véleményét egy nála kevesebb tapasztalattal rendelkező mentorálttal, ezáltal elősegítve annak tanulását, szakmai fejlődését. A mentor és mentorált kapcsolat a szakmai tapasztalatot tekintve asszimmetrikus, a mentor jó esetben előrébb jár a tanulásban a mentorálthoz képest. A mentor a coaching eszköztárát is felhasználhatja a folyamat során, de nem szorítkozik arra.</p>
        </>
      ),
    },
    {
      question: 'Mi a különbség a coaching és a tréning között?',
      answer: (
        <>
          <p>A coachingnak nem része a tréning során fontos frontális tudásátadás. Természetesen amennyiben az ügyfél fejlődését szolgálja, megengedett a coaching folyamatba tréning elemeket is bevinni, ezt azonban érdemes transzparensen kezelni.</p>
        </>
      ),
    },
    {
      question: 'Mi a különbség a coaching és egy baráti beszélgetés között?',
      answer: (
        <>
          <p>A coaching minden esetben célorientált. Fontos, hogy a coach és az ügyfél mind a teljes folyamatra, mind az adott ülésre mérhető célokat tűzzön ki, folyamatosan finomhangolja azokat és végül reflektáljon azok megvalósulására. Egy baráti beszélgetésnél nincs szerződéskötés és célállítás, így nem is mérhető annak eredménye.</p>
          <p>Emellett más tudatosító és segítő foglalkozásokhoz hasonlóan a coach a baráthoz képest tart bizonyos érzelmi távolságot ügyfelétől, így tud annak valóban hatékonyan segíteni.</p>
        </>
      ),
    },
    {
      question: 'Meddig tart egy coaching folyamat?',
      answer: (
        <>
          <p>Ez mindig egyedi megállapodás kérdése, de jellemzően 6-8 coaching ülésből. Voltak már 4 és 10 alkalmas folyamataim is, amikor az adott ügyfél, téma és szituáció úgy igényelte.</p>
          <p>Átlagosan két heti rendszerességgel (ez alkalomtól függően lehet 1, 2 és 3 heti is) számolva ez azt jelenti, hogy körülbelül 3-4 hónapot dolgozom együtt egy-egy ügyfelemmel. Ez néha lehet ennél kevesebb, illetve több is (ld. fenti példák).</p>
          <p>Amit biztosan állíthatok, hogy a coaching jellemzően jelentősebb rövidebb egy terápiás folyamatnál, mert célja, hogy minél gyorsabban az ügyfél kezébe adja azokat az eszközöket, amelyeket felhasználva a továbbiakban saját maga “üzleti edzője” lehet.</p>
        </>
      ),
    },
    {
      question: 'Tudunk-e online is együtt dolgozni?',
      answer: (
        <>
          <p>Természetesen! Egyáltalán nem jelent gondot, sőt segíthet alkalmanként időt spórolni, illetve nagy földrajzi távolságot áthidalni.</p>
          <p>Ahogy sok más szakma esetében, az online térben végzett munka a coachingban is előtérbe került és felértékelődött az elmúlt években. Oktatóink éppen ezért vegyítették az online és a személyes coaching gyakorlatokat, ezzel is fokozva gyakorlatunk életszerűségét.</p>
          <p>Az ügyfeleim igényei szerint szoktam vegyíteni a személyes és online üléseket, ideális legalább a folyamat elején és végén személyesen is találkozni, hogy ne csak képernyőről ismerjük egymást.</p>
        </>
      ),
    },
    {
      question: 'Miért üzleti coachinggal foglalkozom?',
      answer: (
        <>
          <p>Attól függően, hogy magánéleti, szakmai vagy felsővezetői témákra irányul, megkülönböztetünk life, business és executive coachingot.</p>
          <p>Ezek közül üzleti, azaz business coachinggal foglalkozom, mert mind a tanulmányaim, mind a korábbi szakmai hátterem alapján ezen a területen vagyok jártas és lehetek ezáltal hiteles is.</p>
        </>
      ),
    },
    {
      question: 'Ez azt jelenti, hogy magánéleti témán nem tudunk együtt dolgozni?',
      answer: (
        <>
          <p>Az embernek nem választható el teljesen a szakmai és magánélete, ezek mindenkinél összeérnek és hatnak egymásra. Szakmai coachingnak is lehet magánéleti szála és fordítva.</p>
          <p>Beszéljünk róla, hogy milyen témához keresel szakmai segítséget és ehhez én vagyok-e a megfelelő partner. Ha úgy ítéljük meg, hogy a témád speciális szaktudást igényel, akkor szívesen továbbirányítalak olyan szakemberekhez, akikkel ügyfeleim vagy én meg voltunk elégedve.</p>
        </>
      ),
    },
    {
      question: 'Milyen coaching módszereket különböztet meg a szakma? Mivel foglalkozom?',
      answer: (
        <>
          <p>A coaching lehet egyéni (1:1), csoportos (egy coach több ügyféllel ugyanazon a témán dolgozik), csoportos coaching esethozóval (az ügyfelek eseteit dolgozzák fel), illetve team coaching (egy coach egy csapatot egy adott témában fejleszt).</p>
          <p>Egyéni és team coachingot is tanultam, azóta elsősorban egyéni coachingot tartok, illetve vállalati tréningeket.</p>
        </>
      ),
    },
    {
      question: 'Milyen coaching irányzatok állnak hozzám közel?',
      answer: (
        <>
          <p>Elsősorban a tranzakcióanalízis (TA) és a megoldásközpontú vagy brief coaching. Időről-időre használom ezeknek az irányzatoknak az eszközeit, a jövőben pedig tervezem szakmai tudásom ilyen irányú specializációját-bővítését is.</p>
        </>
      ),
    },
    {
      question: 'Miért tartom fontosnak coaching tapasztalatom mentálhigiénés tudással való kibővítését?',
      answer: (
        <>
          <p>Teljesen mindegy, hogy business vagy life coachingról beszélünk, az ügyfelek mindkettőnél emberek, tele érzelmekkel, amelyeknek a coachingban is nagyon fontos szerepük van.</p>
          <p>A megfelelő kérdések és coaching eszközök alkalmazása mellett legalább annyira fontosnak tartom, hogy magabiztosan és kellő rálátással, valamint érzékenységgel tudjak a coachingban megjelenő érzelmekkel dolgozni. A széleskörű mentálhigiénés ismeretek és segítői gyakorlat megszerzésén keresztül ezt és a mélyben zajló lélektani folyamatokra való rálátásomat kívánom fejleszteni.</p>
        </>
      ),
    },
    {
      question: 'Mit jelent a coachok neve mellett látható ACC, PCC, MCC rövidítés? Nálam miért nem látsz (még) ilyet?',
      answer: (
        <>
          <p>Ezek az ICF nemzetközileg egységes minősítési szintjeit takarják: a gyakorlott, a tapasztalt és a mester coach fokozatot. Az egyes szintekhez tartozó egységes keretrendszer és magas elvárások egyfajta biztosítékként szolgálnak az ügyfelek számára a coach munkájának minőségét illetően.</p>
          <p>Ezért különösen fontosnak tartom az akkreditációt. De úgy gondolom, mindennek hagyni kell megfelelő időt és kifutást. Tehát jelenleg még nem, de néhány éven belül jó esély van rá, hogy ott fogod látni valamelyik rövidítést a nevem mögött.</p>
        </>
      ),
    },
    {
      question: 'Milyen árakkal dolgozom?',
      answer: (
        <>
          <p>Egyéni coaching esetén jellemzően eltér a személyes és az online alkalmak díjszabása. Vállalati megkeresés esetén minden esetben egyedi ajánlatot küldök, miután tisztáztuk a célokat és az igényeket.</p>
          <p>Az ún. 0. beszélgetés során, amely nálam minden esetben egy ingyenes, 30 perces online konzultáció, az árazással kapcsolatban is tudunk egyeztetni.</p>
          <p>Ha rátérnél a coaching témád egyeztetésére vagy további kérdéseid vannak, foglalj egy ingyenes, 30 perces konzultációt velem!</p>
          <Primarygreenbuton classname={''} text={'Foglalás'} link={'/idopontfoglalas'}/>
        </>
      ),
    },
  ];

  return (
    <>
      <Mainheader title={'Gyakran ismételt kérdések'} image={'/gyik.webp'} />
      <Regularcontainer padding={"lg:py-32 py-16"} bgcolor={'bg-[--white]'}>
        <div className='flex flex-col gap-8 overflow-hidden'>
          {faqs.map((faq, index) => (
            <div key={index} className='relative flex flex-col gap-4 bg-white'>
              <div className='flex flex-nowrap justify-between bg-white p-4 z-10 cursor-pointer' onClick={() => toggleFAQ(index)}>
                <h3 className='pt-3 w-8/12'>{faq.question}</h3>
                {openFAQ === index ? (
                  <TbMinus className='min-w-6 min-h-6 text-[--aquamarine] mt-3'/>
                ):(
                  <TbPlus className='min-w-6 min-h-6 text-[--aquamarine] mt-3'/>
                )}
              </div>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: openFAQ === index ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className='overflow-hidden'
              >
                <div className='flex flex-col gap-4 p-4 border-t'>
                  {faq.answer}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </Regularcontainer>
    </>
  );
}
