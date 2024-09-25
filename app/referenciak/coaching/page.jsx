import Mainheader from "@/components/ui/mainHeader"
import Coachingreferences from "@/components/coachingReferences";

export function generateMetadata() {

  return {
    title: 'Coaching referenciák - Perlay Éva',
    description: 'Referenciák, vélemények egy helyen. Nézd meg mit mondanak rólam ügyfeleim.',
    alternates: {
      canonical: `https://www.evaperlay.com/referenciak/coaching`
    }
  }
  
}

export default function Coaching() {
  return (
    <>
    <Mainheader title={'Referenciák'} subtitle={'Coaching referenciák'} image={'/eva/coaching.webp'}/>
    <Coachingreferences />
    </>
  )
}
