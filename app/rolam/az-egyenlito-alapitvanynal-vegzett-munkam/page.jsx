import Horizontalcontainer from '@/components/ui/horizontalContainer'
import Mainheader from '@/components/ui/mainHeader'
import Secondarybluebutton from '@/components/ui/SecondaryBlueButton'
import H2 from '@/components/ui/typo/H2'
import Paragraph from '@/components/ui/typo/Paragraph'
import Image from 'next/image'
import React from 'react'

export default function Egyenlitoalapitvany() {
  return (
    <>
    <Mainheader title={'Rólam'} subtitle={'Az Egyenlítő Alapítványnál végzett munkám'} image={'/eva/egyenlito1.webp'} bgposition={'lg:bg-[center_-15rem] bg-[left_-8rem_bottom_-5rem] lg:bg-[length:100%] bg-[length:200%]'}/>
    <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:pt-32 pt-16 pb-16"} align={'lg:flex-row'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <H2 className="">
              A munkahelyi egyenlőségért
              </H2>
            </div>
            <Paragraph className="">2021. óta aktív tagja és állandó munkatársa vagyok a munkahelyi egyenlőségért dolgozó Egyenlítő Alapítványnak. Mélyen hiszek abban, hogy több női vezetővel megalapozottabb és a munkahelyi kisebbségek szempontjait is figyelembe vevő döntések születnek.</Paragraph>
            <Paragraph className="">Az itt végzett munkám során folyamatosan fejlődik a mások iránti érzékenységem, elfogadásom és nyitottságom is, amelynek coachként is nagy hasznát veszem.</Paragraph>
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
            <Paragraph className="">Partnerkapcsolati vezetőként egyre több szervezettel ismertetem meg a sokszínűség, a munkahelyi egyenlőség és a befogadó vezetés (DEI) előnyeit és valósítok meg szakmai programokat (konferenciák, kutatások, sokszínűségi stratégia, érzékenyítő képzések stb.) velük együttműködve.</Paragraph>
            <Paragraph className="">Olyan szervezetekkel állok szoros munkakapcsolatban, mint a Danubius Hotels, az E.ON, a Magyar Telekom, a Morgan Stanley, az NN Biztosító vagy a Tesco Magyarország. Olvass bele partnereim visszajelzéseibe az <Secondarybluebutton text={'Egyéb vállalati referenciák'} link={'/referenciak/egyeb-vallalati'}/> menüpont alatt!</Paragraph>
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
            <Paragraph className="">2023-tól trénerként is részt veszek rejtett előítéletek vállalati képzések megtartásában. Az NN, a Linde Gas, az Union Biztosító és a Richter Gedeon HR csapatait képeztem már előítéleteik tudatosítása és HR folyamataik minél objektívebbé és befogadóvá tételében. Olvass bele a tréning résztvevők visszajelzéseibe a <Secondarybluebutton text={'Tréning referenciák'} link={'/referenciak/trening'}/> menüpont alatt!</Paragraph>
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
