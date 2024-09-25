import Gyik from '@/components/Gyik'
import Mainheader from '@/components/ui/mainHeader';

export function generateMetadata() {

  return {
    title: 'GYIK, Gyakran ismételt kérdések - Perlay Éva',
    description: 'Ha kérdéseid merültek fel a Coaching-gal kapcsolatban, itt megtalálod az őszinte válaszokat.',
    alternates: {
      canonical: `https://www.evaperlay.com/gyik`
    }
  }
  
}

export default function GyikPage() {

  return (
    <>
    <Mainheader title={'GYIK'} subtitle={'Gyakran ismételt kérdések'} image={'/gyik.webp'} bgposition={'lg:bg-[left_0rem_top_-15rem] bg-[left_0rem_top_0rem] lg:bg-[length:100%] bg-[length:250%]'}/>
    <Gyik />
    </>
    
  );
}
