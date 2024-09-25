import Mainheader from "@/components/ui/mainHeader";
import Contactus from "@/components/ui/contactus";

export function generateMetadata() {

  return {
    title: 'Kapcsolat - Perlay Éva',
    description: 'Vedd fel velem a kapcsolatot, ha kérdésed van, vagy időpontot szeretnél foglalni Coachingra, vagy Tréningre.',
    alternates: {
      canonical: `https://www.evaperlay.com/kapcsolat`
    }
  }
  
}

export default function Kapcsolat() {

  return (
    <>
    <Mainheader title={'Kapcsolat'} subtitle={'Vegyük fel a kapcsolatot!'} image={'/eva/tanulmanyaim.webp'} bgposition={'lg:bg-[left_0rem_top_0rem] bg-[left_-18rem_top_0rem] lg:bg-[length:100%] bg-[length:250%]'} />
    <Contactus />
    </>
  );
}
