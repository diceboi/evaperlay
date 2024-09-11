import Horizontalcontainer from '@/components/ui/horizontalContainer'
import Mainheader from '@/components/ui/mainHeader'
import Image from 'next/image'
import React from 'react'

export default function Egyenlitoalapitvany() {
  return (
    <>
    <Mainheader title={'Az Egyenlítő Alapítványnál végzett munkám'} image={'/eva/egyenlito1.webp'}/>
    <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:py-32 py-16"} align={'lg:flex-row'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="">
                Egyenlőségért és befogadásért
              </h2>
            </div>
            <p className="">2021. óta aktív tagja és állandó munkatársa vagyok a munkahelyi egyenlőségért dolgozó Egyenlítő Alapítványnak. Mélyen hiszek abban, hogy több női vezetővel megalapozottabb és a munkahelyi kisebbségek szempontjait is figyelembe vevő döntések születnek.</p>
            <p className="">Az itt végzett munkám során folyamatosan fejlődik a mások iránti érzékenységem, elfogadásom és nyitottságom is, amelynek coachként is nagy hasznát veszem.</p>
          </div>
          <div className="relative lg:w-1/2 min-h-[60vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/egyenlito2.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:py-32 py-16"} align={'lg:flex-row-reverse'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="">
                Szervezeti sokszínűség a gyakorlatban
              </h2>
            </div>
            <p className="">Partnerkapcsolati vezetőként egyre több szervezettel ismertetem meg a sokszínűség, a munkahelyi egyenlőség és a befogadó vezetés (DEI) előnyeit és valósítok meg szakmai programokat (konferenciák, kutatások, sokszínűségi stratégia, érzékenyítő képzések stb.) velük együttműködve.</p>
            <p className="">Olyan szervezetekkel állok szoros munkakapcsolatban, mint a Danubius Hotels, az E.ON, a Magyar Telekom, a Morgan Stanley, az NN Biztosító vagy a Tesco Magyarország. Olvass bele partnereim visszajelzéseibe az egyéb vállalati referenciák menüpont alatt!</p>
          </div>
          <div className="relative lg:w-1/2 min-h-[60vh] overflow-hidden rounded-xl">
            <Image 
            src={"/eva/egyenlito4.webp"}
            fill
            style={{ objectFit: 'cover' }}
            />
          </div>
      </Horizontalcontainer>
      <Horizontalcontainer bgcolor={"bg-white"} padding={"lg:py-32 py-16"} align={'lg:flex-row'}>
          <div className="flex flex-col justify-center gap-8 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="">
                Mentorprogram női vezetőknek
              </h2>
            </div>
            <p className="">2022-ben beindítottam a női tehetségeket kibontakoztató Egyenlítő Mentorprogramot, amely többszáz fős, évente bővülő, 6 hónapos szakmai programmá nőtte ki magát.</p>
            <p className="">2023-tól trénerként is részt veszek rejtett előítéletek vállalati képzések megtartásában. Az NN, a Linde Gas, az Union Biztosító és a Richter Gedeon HR csapatait képeztem már előítéleteik tudatosítása és HR folyamataik minél objektívebbé és befogadóvá tételében. Olvass bele a tréning résztvevők visszajelzéseibe a tréning referenciák menüpont alatt!</p>
          </div>
          <div className="relative lg:w-1/2 min-h-[60vh] overflow-hidden rounded-xl">
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
