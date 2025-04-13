import Horizontalcontainer from '@/components/ui/horizontalContainer'
import Mainheader from '@/components/ui/mainHeader'
import Secondarybluebutton from '@/components/ui/SecondaryBlueButton'
import H2 from '@/components/ui/typo/H2'
import Paragraph from '@/components/ui/typo/Paragraph'
import Image from 'next/image'
import React from 'react'

export async function generateMetadata() {

  return {
    title: 'Az Egyenlítő Alapítványnál végzett munkám - Perlay Éva',
    description: 'Már több mint 10 éve a szakmában vagyok, és ennek egy jelentős részét az Egyenlítő Alapítványnál töltöttem.',
    alternates: {
      canonical: `https://www.evaperlay.com/rolam/aktiv-dei-tapasztalatom`
    }
  }
  
}

export default function Egyenlitoalapitvany() {
  return (
    <>
    <Mainheader title={'Rólam'} subtitle={'Aktív DEI tapasztalatom'} image={'/eva/egyenlito1.webp'} bgposition={'lg:bg-[center_-22rem] bg-[center_-8rem_bottom_0rem] lg:bg-[length:100%] bg-[length:300%]'}/>
    <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:pt-32 pt-16 pb-16"} align={'lg:flex-row'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <H2 className="">
              A munkahelyi egyenlőségért
              </H2>
            </div>
            <Paragraph className="">2021 - 2025 között aktív tagja és állandó munkatársa voltam a munkahelyi egyenlő esélyekért dolgozó Egyenlítő Alapítványnak. Mélyen hiszek abban, hogy több női vezetővel megalapozottabb és a munkahelyi kisebbségek szempontjait is figyelembe vevő döntések születnek.</Paragraph>
            <Paragraph className="">Az itt végzett munkám során fejlődött a mások iránti érzékenységem, elfogadásom és nyitottságom, amelynek coachként is nagy hasznát veszem.</Paragraph>
          </div>
          <div className="relative lg:w-1/2 lg:min-h-max min-h-[50vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/egyenlito2.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:py-16"} align={'lg:flex-row-reverse'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <H2 className="">
                Szervezeti sokszínűség a gyakorlatban
              </H2>
            </div>
            <Paragraph className="">Partnerkapcsolati vezetőként rengeteg szervezettel ismertettem meg a sokszínűség, a munkahelyi egyenlőség és a befogadó vezetés (DEI) előnyeit és valósítottam meg szakmai programokat (konferenciák, kutatások, sokszínűségi stratégia, érzékenyítő képzések stb.) velük együttműködve.</Paragraph>
            <Paragraph className="">Olyan szervezetekkel álltam szoros munkakapcsolatban, mint a Danubius Hotels, az E.ON, a Magyar Telekom, a Morgan Stanley, az NN Biztosító vagy a Tesco Magyarország. Olvass bele partnereim visszajelzéseibe az <Secondarybluebutton text={'Egyéb vállalati referenciák'} link={'/referenciak/egyeb-vallalati'}/> menüpont alatt!</Paragraph>
          </div>
          <div className="relative lg:w-1/2 lg:min-h-max min-h-[50vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/egyenlito4.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:pb-32 pb-16 pt-16"} align={'lg:flex-row'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <H2 className="">
              Mentorprogram és vállalati tréningek
              </H2>
            </div>
            <Paragraph className="">2022-ben beindítottam a női tehetségeket kibontakoztató Egyenlítő Mentorprogramot, amely többszáz fős, évente bővülő, 6 hónapos szakmai programmá nőtte ki magát.</Paragraph>
            <Paragraph className="">2023 - 2025 között trénerként is részt vettem rejtett előítéletek vállalati képzések megtartásában. Az NN, a Linde Gas, az Union Biztosító és a Richter Gedeon HR csapatait is képeztem már előítéleteik tudatosítása és HR folyamataik minél objektívebbé és befogadóvá tételében. Olvass bele a tréning résztvevők visszajelzéseibe a <Secondarybluebutton text={'Tréning referenciák'} link={'/referenciak/trening'}/> menüpont alatt!</Paragraph>
          </div>
          <div className="relative lg:w-1/2 lg:min-h-max min-h-[50vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/egyenlito5.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>      
    </>
  )
}
