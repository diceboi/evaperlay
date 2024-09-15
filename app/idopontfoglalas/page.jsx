import CalendlyPopup from '@/components/calendlyPopup'
import Horizontalcontainer from '@/components/ui/horizontalContainer'
import Mainheader from '@/components/ui/mainHeader'
import React from 'react'

export default function Idopontfoglalas() {
  return (
    <>
    <Mainheader title={'Kapcsolat'} subtitle={'Foglalj időpontot'} image={'/eva/vallalati-kepzesek.webp'}/>
    <Horizontalcontainer bgcolor={'bg-[--white]'} padding={'lg:py-32 py-16'} align={'flex-col'}>
        <div className='m-auto'>
            <CalendlyPopup />
        </div>
    </Horizontalcontainer>
    </>
  )
}
