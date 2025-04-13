import CalendlyPopup from '@/components/calendlyPopup'
import H1 from '@/components/ui/typo/H1'
import SubTitle from '@/components/ui/typo/SubTitle'

export async function generateMetadata() {

  return {
    title: 'Időpontfoglalás - Perlay Éva',
    description: 'Ne bízd a véletlenre, foglalj egy konzultációt velem, és derítsük ki együtt, hogyan tudunk közösen dolgozni.',
    alternates: {
      canonical: `https://www.evaperlay.com/idopontfoglalas`
    }
  }
  
}

export default function Idopontfoglalas() {
  return (
    <>
    <section style={{backgroundImage:`url("/calendar.webp")`}} className={`relative flex flex-col items-center justify-end text-white w-full min-h-[100vh] overflow-hidden px-2 py-32 bg-cover bg-center bg-no-repeat`}>
        <div className={`absolute w-full h-full top-0 left-0 bg-gradient-to-b lg:from-[#2b089de3] from-[#2b089dc9] to-[#1e066f92] z-10 `}></div>
        <div className="flex flex-col items-center gap-4 py-8 z-10">
            <SubTitle>
            Foglalj időpontot
            </SubTitle>
            <H1 classname={'text-center'}>Az első, 60 perces konzultációnkra!</H1>
        </div>
        <div className='m-auto z-10'>
            <CalendlyPopup />
        </div>
      </section>
    </>
  )
}
