import Mainheader from "@/components/ui/mainHeader";
import Mireszamithatsz from "@/components/Mireszamithatsz";

export function generateMetadata() {

  return {
    title: 'Egyéni Coaching - Perlay Éva',
    description: 'Egyenrangú partnerként azzal fogunk dolgozni ami számodra fontos, jövőorientáltan, végig mérhető célok mentén.',
    alternates: {
      canonical: `https://www.evaperlay.com/szolgaltatasok/egyeni-coaching`
    }
  }
  
}

export default function EgyeniCoachingPage() {

  return (
    <>
      <Mainheader title={'Hogy dolgozom?'} subtitle={'Egyéni coaching'} image={'/eva/beszelgeto2.webp'} bgposition={'lg:bg-[center_-5rem] bg-[center]'} />
      <Mireszamithatsz />
    </>
  );
}