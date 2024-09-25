import Mainheader from "@/components/ui/mainHeader";
import Temaim from "@/components/temaim";

export const metadata = {
  title: 'Témáim - Perlay Éva',
  description: 'Mentális egészség, munkahelyi egyenlőség, vezetési stílusok. Csak néhány a témáim közül amikre fókuszálok, és amelyek szakmai szenvedélyemet és tapasztalatomat is kifejezik.',
  alternates: {
    canonical: `https://www.evaperlay.com/szolgaltatasok/egyeni-coaching`
  }
}

export default function TemaimPage() {
  return (
    <>
      <Mainheader
        title={"Témáim"}
        subtitle={"Ezekre a témákra fókuszálok"}
        image={"/eva/temaim3.webp"}
        bgposition={
          "lg:bg-[center_-0rem] bg-[right_-5rem_top_0rem] lg:bg-[length:100%] bg-[length:200%]"
        }
      />
      <Temaim />
    </>
  );
}
