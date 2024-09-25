import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import Paragraph from "@/components/ui/typo/Paragraph";
import H2 from "@/components/ui/typo/H2";
import H3 from "@/components/ui/typo/H3";
import Secondarybluebutton from "@/components/ui/SecondaryBlueButton";

export default function AdatkezelesiTajekoztato() {
  return (
    <>
      <Mainheader subtitle={"Adatkezelési tájékoztató"} />
      <Regularcontainer padding={"lg:py-32 py-16"} bgcolor={"bg-[--white]"}>
        <div className="flex flex-col gap-8">

          {/* Section 1 */}
          <H2>1. Az adatkezelési tájékoztató célja</H2>
          <Paragraph>
            Perlay Éva E.V. (cím: 1021 Budapest, Kuruclesi út 9/b), a továbbiakban, szolgáltató, adatkezelő) mint adatkezelő, magára nézve kötelezőnek ismeri el jelen jogi közlemény tartalmát.
          </Paragraph>
          <Paragraph>
            Kötelezettséget vállal arra, hogy tevékenységével kapcsolatos minden adatkezelés megfelel a jelen szabályzatban és a hatályos nemzeti jogszabályokban, valamint az Európai Unió jogi aktusaiban meghatározott elvárásoknak.
          </Paragraph>
          <Paragraph>
            Jelen adatkezelési tájékoztató az alábbi domain-re terjed ki: <Secondarybluebutton text={'www.evaperlay.com'} link={'/'}/>
          </Paragraph>
          <Paragraph>
          Adatkezelő adatkezeléseivel kapcsolatosan felmerülő adatvédelmi irányelvek folyamatosan elérhetők a https://evaperlay.com/adatkezelesi-tajekoztato címen.
        Adatkezelő fenntartja magának a jogot jelen tájékoztató bármikori módosítására. A változásokról az érintettek kellő időben tájékoztatásra kerülnek.
        Amennyiben kérdése lenne jelen közleményhez kapcsolódóan, kérjük, írja meg és megválaszoljuk kérdését.
        Adatkezelő elkötelezett ügyfelei és partnerei személyes adatainak védelmében, kiemelten fontosnak tartja ügyfelei információs önrendelkezési jogának tiszteletben tartását. Adatkezelő a személyes adatokat bizalmasan kezeli, és megtesz minden olyan biztonsági, technikai és szervezési intézkedést, mely az adatok biztonságát garantálja.
        Adatkezelő az alábbiakban ismerteti adatkezelési gyakorlatát.
          </Paragraph>

          {/* Section 2 */}
          <H2>2. Fogalom meghatározások</H2>
          <Paragraph>
            2.1. Személyes adat: Azonosított vagy azonosítható természetes személyre vonatkozó bármely információ.
          </Paragraph>
          <Paragraph>
            2.2. Érintett: Bármely információ alapján azonosított vagy azonosítható természetes személy, akinek a személyes adatait kezelik.
          </Paragraph>
          <Paragraph>
            2.3. Adatkezelő: A természetes vagy jogi személy, aki az adatkezelés céljait és eszközeit meghatározza.
          </Paragraph>
          <Paragraph>
            2.4. Adatfeldolgozó: Az adatkezelő nevében személyes adatokat kezel.
          </Paragraph>

          {/* Section 3 */}
          <H2>3. A kezelt személyes adatok köre</H2>
          <H3>3.1. Regisztráció során megadott adatok</H3>
          <Paragraph>
            Az érintett által a regisztráció során a szolgáltatónak megadott adatok különösen az alábbiak lehetnek: név, e-mail cím, jelszó.
          </Paragraph>

          <H3>3.2. Számlázáshoz kapcsolódó adatok</H3>
          <Paragraph>
            A számlázáshoz kapcsolódóan a szolgáltató az érintett nevét, címét, valamint egyéb szükséges adatokat kezeli a hatályos jogszabályok alapján.
          </Paragraph>

          <H3>3.3. Technikai adatok</H3>
          <Paragraph>
            A szolgáltató az érintett számítógépének IP-címét, a látogatás időpontját, a megtekintett oldalakat és az operációs rendszert technikai adatok formájában kezeli. Ezek az adatok kizárólag statisztikai célokat szolgálnak.
          </Paragraph>

          <H3>3.4. Cookie-k használata</H3>
          <Paragraph>
            A szolgáltató a látogatók számítógépére cookie-t helyezhet el, amely lehetővé teszi a felhasználói élmény javítását, a weboldal funkcióinak biztosítását, és statisztikai adatok gyűjtését.
          </Paragraph>

          {/* Section 4 */}
          <H2>4. Az adatkezelés jogalapja, célja, és módja</H2>
          <Paragraph>
            Az adatkezelésre a felhasználók önkéntes hozzájárulása alapján kerül sor, melyet a felhasználók a weboldalon történő regisztrációval, illetve egyéb módon történő kapcsolatfelvétellel adnak meg.
          </Paragraph>
          <Paragraph>
            Az adatkezelés célja a felhasználók megfelelő kiszolgálása, szolgáltatások biztosítása, számlázás, valamint a szolgáltató által jogszabályban előírt kötelezettségek teljesítése.
          </Paragraph>

          {/* Section 5 */}
          <H2>5. Az adatkezelő adatai, elérhetősége</H2>
          <Paragraph>
            Név: Perlay Éva E.V.
            <br />
            Székhely: 1021 Budapest, Kuruclesi út 9/b
            <br />
            Elérhetőség: perlay.eva@domain.com
          </Paragraph>

          {/* Section 6 */}
          <H2>6. Az érintettek jogai és jogérvényesítési lehetőségeik</H2>
          <Paragraph>
            Az érintettek kérelmezhetik az adatkezelőtől a rájuk vonatkozó személyes adatokhoz való hozzáférést, azok helyesbítését, törlését vagy kezelésének korlátozását, tiltakozhatnak az ilyen személyes adatok kezelése ellen, valamint jogosultak az adatok hordozhatóságára.
          </Paragraph>
          <Paragraph>
            Az érintetteknek joguk van a személyes adataik helyesbítését kérni. Ha az adatok hibásak, az adatkezelő köteles azokat indokolatlan késedelem nélkül helyesbíteni.
          </Paragraph>
          <Paragraph>
            Az adatkezelés korlátozását kérheti az érintett, ha például vitatja az adatok pontosságát, vagy ha az adatkezelés jogellenes, de nem kívánja, hogy adatait töröljék.
          </Paragraph>

          {/* Section 7 */}
          <H2>7. Adatbiztonság</H2>
          <Paragraph>
            Az adatkezelő kötelezi magát arra, hogy megfelelő technikai és szervezési intézkedéseket alkalmaz a személyes adatok biztonságának garantálása érdekében. Az adatokhoz való hozzáférés szigorúan korlátozott, és csak az erre jogosult személyek férhetnek hozzá.
          </Paragraph>

          {/* Section 8 */}
          <H2>8. Jogorvoslati lehetőségek</H2>
          <Paragraph>
            Az érintett a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH) fordulhat, ha úgy véli, hogy személyes adatainak kezelése során jogsérelem érte.
          </Paragraph>
          <Paragraph>
            További jogorvoslati lehetőségek: az érintett polgári peres eljárást is kezdeményezhet, ha megítélése szerint az adatkezelő megsértette a személyes adatok védelmére vonatkozó jogait.
          </Paragraph>

        </div>
      </Regularcontainer>
    </>
  );
}
