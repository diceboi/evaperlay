import Mainheader from '@/components/ui/mainHeader'
import Primarygreenbuton from '@/components/ui/primaryGreenButon'
import Regularcontainer from '@/components/ui/regularcontainer'
import Secondarybluebutton from '@/components/ui/SecondaryBlueButton'

export default function Vallalatikepzesek() {
  return (
    <>
    <Mainheader title={'Vállalati képzések'} image={'/eva/egyenlito3.webp'}/>
    <Regularcontainer padding={'pt-20 pb-32'} bgcolor={'bg-[--white]'}>
        
        <div className='flex flex-col gap-32'>

        
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-8'>
            <h2>Érzékenyítő alapképzések</h2>
            <p>Melynek folyamán a résztvevők megismerhetik, hogy nem tudatos előítéleteink hogyan befolyásolják viselkedésünket , ezzel együtt milyen, nem megbízható döntési folyamatokat indukálnak.</p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>Rejtett előítéletek alapképzés</h3>
            <p className='text-sm lg:text-md'>Nem tudatos előítéletek kezelése, <b>bevezető képzés</b></p>
            <p className='text-sm lg:text-md'>Ez egy rövid, félnapos képzés, ahol a résztvevők feltárhatják saját rejtett előítéleteiket, megérthetik, azok mikor és hogyan alakultak ki, milyen célt szolgálnak, ugyanakkor hogyan hátráltatják az egyén és a szervezet fejlődését.<br></br>
            Programunk keretében a résztvevők megismerkedhetnek rejtett előítéleteink minőségével és eszközöket kapnak ezek tudatosításához és kezeléséhez.</p>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>0,5 nap</b></p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>Rejtett előítéletek elmélyítő képzés</h3>
            <p className='text-sm lg:text-md'>Nem tudatos előítéletek kezelése képzés <b>minden kollégának</b></p>
            <p className='text-sm lg:text-md'>Az egy 1 napos képzés, ahol a résztvevők feltárhatják saját rejtett előítéleteiket, megérthetik, azok mikor és hogyan alakultak ki, milyen célt szolgálnak, ugyanakkor hogyan hátráltatják az egyén és a szervezet fejlődését. Megismerkedhetnek rejtett előítéleteik minőségeivel és kezelésével, de olyan stratégiai tudásra is szert tehetnek, mely lehetőséget ad arra, hogy a szervezet gazdasági és pénzügyi érdekei mentén integrálják a diverzitás és befogadás kultúrájának előnyeit. A résztvevők elméleti képzésben részesülnek és elsajátítják az eszközök gyakorlati alkalmazását.</p>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>1 nap</b></p>
          </div>
        </div>

        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-8'>
            <h2>Érzékenyítő vezetői képzések</h2>
            <p>A megnövekedett verseny miatt elengedhetetlen a tehetségek megtalálása és megtartása.
            A világ megváltozott és felgyorsult. A homogén csapatok nem képesek az új körülmények között elég gyorsan és elég hatékonyan reagálni.A vezetőknek tudniuk kell, hogyan aknázzák ki a sokszínűség előnyeit és ezáltal agilisebb, gyorsabban innováló, gyorsabban piacra lépő céggé váljanak.
            A vezető az aki lehetővé teheti, hogy csapatai előtt ne legyenek akadályok, csapatai gyorsan és agilisen, váltásra, változtatásra képesen nyerjenek. Ha a vezető nem segíti, sőt nem befogadó attitűdjével akár limitálja is csapatait, az rövid és hosszú távon is sokba kerül egy cégnek. A sikeres vezető az, akinek a legsikeresebb csapata van.</p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>Befogadó vezető képzés</h3>
            <p className='text-sm lg:text-md'><b>Innovatív vezetői program a globális vezetők számára.</b> Inclusive Leadership Masterclass programunk keretében a résztvevők nem csak rejtett előítéleteink minőségeivel és kezelésével ismerkedhetnek meg, de olyan vezetői, stratégiai tudásra is szert tehetnek, mely lehetőséget ad arra, hogy a szervezet gazdasági érdekei mentén integrálják a diverzitás és befogadás kultúrájának előnyeit. A képzés végén a résztvevők személyre szabott stratégiával távoznak.</p>
            <p className='text-sm lg:text-md'>A befogadó szemléletű vezetőképzés segíti a vezetőket implicit feltételezéseik és előítéleteik megértésében. Emellett arra törekszik, hogy javítsa motivációjukat és képességeiket a különféle csoportokkal való együttműködésre és a csoportok motiválására.</p>
            <p className='text-sm lg:text-md'>A tréning segítséget nyújt olyan folyamatok felismeréséhez,</p>
            <ul className="list-disc marker:text-[--aquamarine] text-sm lg:text-md ml-4">
              <li>amelyek homogenitást eredményeznek</li>
              <li>amelyek elnyomják a kíváncsiságot és nyitottságot a különböző ötletek iránt</li>
              <li>amelyek másokkal szembeni elfogultsághoz vezetnek</li>
            </ul>
            <p className='text-sm lg:text-md'>A tréning célja, hogy fejlessze a résztvevők</p>
            <ul className="list-disc marker:text-[--aquamarine] text-sm lg:text-md ml-4">
              <li>együttműködő képességét</li>
              <li>önismeretét</li>
              <li>kulturális intelligenciáját</li>
              <li>döntéshozatali kompetenciáját</li>
            </ul>
            <p className='text-sm lg:text-md'>Az időszakos visszamérések és konzultáció során lehetőség van a kialakított stratégia ellenőrzésére.
            Ha Te is hiszel a csapatod erejében, de szeretnéd még jobban kiaknázni a benned, bennük rejlő erőt a sikeresebb innováció reményében, és megérintettek azok a pozitív kimenetek melyeket ez a képzés ajánl, akkor neked szól a Befogadó vezető képzési program melynek eredményeképpen egyszerre leszel, hatékonyabb, innovatívabb és népszerűbb vezető.</p>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>2 nap</b></p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>Befogadó kommunikáció képzés</h3>
            <p className='text-sm lg:text-md'>Milyen vezető vagy?</p>
            <p className='text-sm lg:text-md'>Számos vezetési stílus létezik. Nincs jó vagy rossz, csak őszinte és hamis!
            A hatékony vezetés egyik legfontosabb eleme a transzparens, őszinte kommunikáció kialakítása a csapattagokkal. A saját őszinteségünk és átláthatóságunk mint vezetők, példaként szolgál csapattagjaink számára.</p>
            <p className='text-sm lg:text-md'>Amikor egy csoportért felelünk, fontos az egyértelműség. Kollégáink önmagunk tükörképei, és ha az őszinte és etikus magatartást választjuk kulcsfontosságú értéknek, akkor a csapat is ezt fogja követni.</p>
            <p className='text-sm lg:text-md'>A nagyszerű vezetők az egyéni preferenciák alapján testre szabják interakcióikat és kommunikációs stílusukat az egyes helyzetek és csapattagok számára.</p>
            <p className='text-sm lg:text-md'>Az aktív kommunikációs készségek és az átláthatóság megmutatása bizalmat teremt a csapatban, és javítja az általános morált. A legfontosabb minden kommunikációban, hogy mindenek felett valódi legyen.
            Ha szeretnél olyan kommunikátor lenni akiben megbízik és követ a csapata, ezt a képzést ne hagyd ki.</p>
            <p className='text-sm lg:text-md'>A tréning része az üzleti stratégiához, a személyes kompetenciákhoz és a fejlődési területekhez kapcsolódó cselekvési és visszamérési terv készítése.</p>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>2 nap</b></p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>HR program - Rejtett előítéletek képzés</h3>
            <p className='text-sm lg:text-md'>A diverzitás és befogadás kultúrája a kiválasztásnál kezdődik és itt néha be is fejeződik sajnos.
            <b>HR program - Rejtett előítéletek képzés</b> segít az ezen a területen dolgozókat a nem tudatos előítéleteik felismerésében és megértésében. Arra törekszik, hogy csökkentse a toborzás és a kiválasztás elfogultságát azáltal, hogy bemutatja az objektív felvételi gyakorlatokhoz szükséges készségeket. Emellett fejleszti a HR vezetők képességét, hogy figyelemmel kísérjék és kezeljék saját és mások elfogultságát, hogy társként segíthessék vezetőik diverzitási törekvéseit a szervezeten belül.</p>
            <p className='text-sm lg:text-md'>A tréning eredményeként a résztvevők képesek lesznek</p>
            <ul className="list-disc marker:text-[--aquamarine] text-sm lg:text-md ml-4">
              <li>Megérteni a kognitív vakfoltok és az elfogultság természetét, eredetét és következményeit</li>
              <li>Azonosítani a toborzást és az értékelést befolyásoló különféle elfogultságokat</li>
              <li>Tudatosítani saját elfogultságukat</li>
              <li>Megérteni, hogy az ember mikor hajlamos az elfogultságra</li>
              <li>Alkalmazni objektív felvételi gyakorlatokat</li>
              <li>Alkalmazni különféle technikák a gondolkodás sokféleségének megismerésére és integrálására, valamint az együttműködési kultúra előmozdítására</li>
            </ul>
            <p className='text-sm lg:text-md'>A tréning része az üzleti stratégiához, a személyes kompetenciákhoz és a fejlődési területekhez kapcsolódó cselekvési és visszamérési terv készítése.</p>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>2 nap</b></p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>Generációk együttműködése a munkahelyen</h3>
            <p className='text-sm lg:text-md'>Generációk együttműködése a munkahelyen képzés <b>minden kollégának</b></p>
            <p className='text-sm lg:text-md'>A tréning célja rámutatni arra, hogy a rejtett előítéleteink hogyan vezethetnek véletlenszerű diszkriminatív döntésekhez különböző generációk együttműködése kapcsán, vezetői működésünkben, új munkatársaink kiválasztásakor, a teljesítmény értékelésekor, előléptetési döntések során és számos más munkatársi interakcióban.</p>
            <p className='text-sm lg:text-md'>A tréning során megismerjük a különböző generációkat, azok motivációit attitűdjük jellemző vonásait. Tudatosíthatjuk a bennünk rejlő, eddig nem tudatos előítéleteinket más korosztályokkal kapcsolatban. Ez lehet az első lépés azok leküzdésében, szokásaink megváltoztatásában. Tréningünk azonban túlmegy a tudatosításon és praktikus eszközöket is ad a résztvevők kezébe.</p>
            <p className='text-sm lg:text-md'>A tréning segítséget nyújt olyan folyamatok felismeréséhez,</p>
            <ul className="list-disc marker:text-[--aquamarine] text-sm lg:text-md ml-4">
              <li>amelyek homogenitást eredményeznek</li>
              <li>amelyek elnyomják a kíváncsiságot és nyitottságot </li>
              <li>amelyek másokkal szembeni elfogultsághoz vezetnek</li>
              <li>amelyek bizonyos csoportokat kirekesztenek, elidegenítenek és esetleg a cégtől eltávolítanak</li>
            </ul>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>0,5 nap</b></p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>CQ - Leadership Masterclass</h3>
            <p className='text-sm lg:text-md'>Az CQ - Leadership Masterclass programunk keretében a résztvevők ismereteket szerezhetnek arról mi működik jól és mi kerülendő egy interkulturális kontextusban. A képzés résztvevői megtanulják hogyan lehet áthidalni a kulturális hiányosságokat és hogyan működjenek sikeresen globális kapcsolataikban. A képzés végén a résztvevők személyre szabott stratégiával távoznak.</p>
            <p className='text-sm lg:text-md'>A Kulturális Intelligenciára épülő vezetőképzés segíti a résztvevőket implicit feltételezéseik és előítéleteik megértésében. Emellett arra törekszik, hogy javítsa motivációjukat és képességeiket a különféle, kulturálisan eltérő csoportokkal való együttműködésre és a csoportok motiválására.</p>
            <p className='text-sm lg:text-md'>Az időszakos visszamérések és konzultáció során lehetőség van a kialakított stratégia ellenőrzésére.</p>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>2 nap</b></p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>CQ - Leadership Foundation</h3>
            <p className='text-sm lg:text-md'>Az CQ - Leadership Foundation program egy 1 napos képzés melyen a résztvevők az CQ - Leadership Masterclass programhoz hasonlóan részesülnek az elméleti képzésben és elsajátítják az eszközök gyakorlati alkalmazását. </p>
            <p className='text-sm lg:text-md'>Ennél a tréningnél az egyéni stratégia kidolgozása és elmélyülés már a program utáni konzultációs időszakban történik.</p>
            <p className='text-sm lg:text-md'>A képzés időtartama: <b>1 nap</b></p>
          </div>

          <div className='flex flex-col gap-8 bg-white p-8 border-l-4 border-[--aquamarine] shadow-sm'>
            <h3>Egyensúly - Befogadó Vezetői Program Női tehetségeknek</h3>
            <p className='text-sm lg:text-md italic border-l-4 border-[--dukeblue] pl-4'>Motto: “Vállalj szerepet a döntésekben, éld meg a küldetésed!”</p>
            <p className='text-sm lg:text-md'>Bizonyított tény, hogy a sokszínű és befogadó vállalatok jelentős, kétszámjegyű előnyt élveznek az eredményesség terén és az innovációs képességük is erősebb. A sokszínűség egyik vetülete a nők esélyegyenlősége a társadalom minden területén. Valljuk és tapasztaljuk, hogy a női vezetői minőségek és energiák által elfogadóbbak, együttműködőek, fenntarthatóak és ezáltal eredményesebbek is a csapatok, vállalatok és a társadalmak. A Magyarországon működő top vállalatoknál még mindig kevesebb mint 10%-ban nő az első számú vezető.</p>
            <p className='text-sm lg:text-md'>Célul tűztük ki, hogy minél több nő számára tegyük vonzóvá és teremtsünk esélyt arra, hogy az üzleti döntéshozásban szerepet vállaljanak. Ezt három úton kívánjuk megvalósítani:</p>
            <ul className="list-disc marker:text-[--aquamarine] text-sm lg:text-md ml-4">
              <li>vállalatok vezetése részére stratégiai tervet készítünk, hogy sokszínű és befogadó kultúrát hozzanak létre, ahol a nők számára is vonzó a vezetői feladatkör</li>
              <li>női példaképeket mutatunk be a nők részére és felkeltjük az ambíciót a vezetői küldetésre</li>
              <li>női vezető fejlesztő programot biztosítunk a vállalatok számára, ahol az önismeret, az érzelmi intelligencia, a vezetői modellek és készségek, média-kommunikáció, sokszínűség és elfogadás, self-branding és styling témakörével és neves szakemberek által gazdagítjuk és motiváljuk a résztvevőket.</li>
            </ul>
            <p className='text-sm lg:text-md'>A női vezető nem jobb, és nem rosszabb, mint a férfi. Sokszor nem is más. Egy dolog más azonban vele kapcsolatban, mint egy férfi esetében. A fogadtatás, befogadás, elismerés és értékelés a szervezet felől, a kollégák, partnerek részéről.
            Kutatások bizonyítják, hogy a nők teljesítményét a férfiakéhoz képest alacsonyabban ítéljük meg, hogy tárgyalások alkalmával egy nő szavába 4-szer többször közbevágunk, hogy egy önéletrajzot majdnem 30%-kal jobbra értékelünk ha férfi név van rajta, mintha ugyanazon az önéletrajzon egy nő neve van.</p>
            <p className='text-sm lg:text-md'>A nők úgy nőnek fel, úgy töltenek el hosszú éveket egy vállalatnál, hogy nem látnak maguk előtt olyan példaképeket, aki beindítaná bennük az ambíciót arra, hogy ők is nagyobb szerepet vállaljanak a cégükön belül. Sokszor előfordul, hogy a nagyon máshogy kinéző és viselkedő férfi vezetői csapat pont, hogy elidegeníti a női középvezetőket a magasabb pozícióktól. Ők nem akarnak olyanná válni, az ilyen cégeknél hiába akarják a középvezetőket kinevezni, a nők inkább nem kérnek belőle. Sokszor gondolhatjuk, hogy ez az ambíció hiánya, vagy a családi nyomás eredménye, de valójában egy befogadó szervezetnél ez általánosságban nem probléma.</p>
            <p className='text-sm lg:text-md'>A nők ma még nagyon komoly kisebbségben vannak a felsővezetésben hazánkban. Ezért annak a cégnek amely több női felsővezetőt szeretne, meg kell változnia és a náluk dolgozó nőket jobban meg kell támogatnia a vezetőség felé vezető úton, mint a férfi kollégákat.
            Az ilyen cégeknél ugyanis még erősebb és eltökéltebb nőkre van szükségünk, akik vezetőként sikerre jutván a cégeiket pozitív módon befolyásolják. És ezt képzéssel lehet hatékonyan segíteni. Mind a vezetőség érzékenyítésével és a szervezet befogadóbbá alakításával, mind a nők kiemelt megerősítésével.</p>
            <p className='text-sm lg:text-md'>Alapítványunk tapasztalt és sikeres női vezetői már megtapasztalták ezt az utat, személyes történeteik, tapasztalataik és megküzdési taktikáik vannak, amiket most szívesen megosztanak az utánuk jövő generációkkal, a jövő női vezetőivel.</p>
            <p className='text-sm lg:text-md'>Programunk neve Egyensúly, mert hiszünk abban, hogy egy nő is csak úgy lehet hosszú távon sikeres vezető, ha boldog és kiegyensúlyozott. Ha “a helyén van”, ha “önmagát adhatja” és nem szerepet játszik, tettet, vagy nem próbál erőszakosan férfivá válni a siker érdekében.
            Programunkkal segítünk nekik megtalálni a saját útjukat, vezetői identitásukat, és megmutatjuk nekik, hogy vélt gyengeségeiket hogyan változtassák előnnyé.</p>
            <p className='text-sm lg:text-md'><b>2 különböző szintű tréninget ajánlunk:</b></p>
            <ul className="list-disc marker:text-[--aquamarine] text-sm lg:text-md ml-4">
              <li>Középvezető leszek!</li>
              <li>Felsővezető leszek!</li>
            </ul>
          </div>


        </div>
        <div className='flex flex-col items-center gap-8'>
            <h3 className='text-center'>Ha valamelyik felkeltette az érdeklődésedet, vedd fel velem a kapcsolatot!</h3>
            <Primarygreenbuton text={'Kapcsolatfelvétel'} link={'/kapcsolat'}/>
        </div>
        </div>

        
    </Regularcontainer>
    </>
  )
}
