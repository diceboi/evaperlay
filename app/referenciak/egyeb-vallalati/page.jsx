import Mainheader from "@/components/ui/mainHeader"
import Vallalati from "@/components/Vallalati";

export const metadata = {
  title: 'Vállalati referenciák - Perlay Éva',
  description: 'Vállalati referenciák, vélemények egy helyen. Nézd meg mit mondanak rólam vállalati ügyfeleim.',
  alternates: {
    canonical: `https://www.evaperlay.com/referenciak/egyeb-vallalati`
  }
}

export default function VallalatiPage() {
  return (
    <>
    <Mainheader title={'Referenciák'} subtitle={'Egyéb vállalati referenciák'} image={'/eva/beszelgeto2.webp'} bgposition={'lg:bg-[center_-0rem] bg-[left_-8rem_top_0rem] lg:bg-[length:100%] bg-[length:200%]'}/>
    <Vallalati />
    </>
  );
}
