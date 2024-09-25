import TreningReferences from "@/components/TreningReferences"
import Mainheader from "@/components/ui/mainHeader"

export function generateMetadata() {

  return {
    title: 'Tréning referenciák - Perlay Éva',
    description: 'Tréning referenciák, vélemények egy helyen. Nézd meg mit mondanak rólam ügyfeleim.',
    alternates: {
      canonical: `https://www.evaperlay.com/referenciak/trening`
    }
  }
  
}

export default function Trening() {
  return (
    <>
    <Mainheader title={'Referenciák'} subtitle={'Tréning referenciák'} image={'/eva/egyenlito3.webp'} bgposition={'lg:bg-[center_-12rem] bg-[center]'}/>
    <TreningReferences />
    </>
  )
}
