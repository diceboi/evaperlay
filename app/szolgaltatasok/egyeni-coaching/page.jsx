import Mainheader from "@/components/ui/mainHeader";
import Regularcontainer from "@/components/ui/regularcontainer";
import GridWhiteTile from "@/components/ui/gridWhiteTile";

export default function Mireszamithatsz() {
  return (
    <>
      <Mainheader title={'Egyéni coaching'} image={'/eva/beszelgeto2.webp'} />
      <Regularcontainer padding={'py-20'}>
        <div className="flex flex-col gap-8">
          <h2 className="text-center">Mire számíthatsz?</h2>
          <h3 className="text-center">Közös munkánk során tehát:</h3>
          <div className="grid grid-cols-4 grid-rows-2 grid-flow-row gap-6">
            <GridWhiteTile text={'Egyenrangú partnerként'} mark={true}/>
            <GridWhiteTile text={'azzal fogunk dolgozni, ami számodra fontos'} mark={true}/>
            <GridWhiteTile text={'Te felelsz a folyamat során levont tanulságokért és céljaid megvalósításáért'} mark={true}/>
            <GridWhiteTile text={'Én felelek a coaching technikák alkalmazásáért és az ülések strukturálásáért.'} mark={false}/>
            <GridWhiteTile text={'Nem lesz részed tanácsadásban (tapasztalat megosztásban is csak kivételes esetben)'} mark={true}/>
            <GridWhiteTile text={'Jövőorientáltan, azaz nem a “miérteken”, hanem a “hogyanokon” fogunk dolgozni.'} mark={true}/>
            <GridWhiteTile text={'Végig mérhető célok mentén.'} mark={false}/>
          </div>
        </div>
      </Regularcontainer>
    </>
  );
}