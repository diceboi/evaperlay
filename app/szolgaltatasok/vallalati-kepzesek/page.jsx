import Mainheader from '@/components/ui/mainHeader'
import Primarygreenbuton from '@/components/ui/primaryGreenButon'
import Regularcontainer from '@/components/ui/regularcontainer'
import Secondarybluebutton from '@/components/ui/SecondaryBlueButton'

export default function Vallalatikepzesek() {
  return (
    <>
    <Mainheader title={'Vállalati képzések'} image={'/eva/vallalati-kepzesek.webp'}/>
    <Regularcontainer padding={'pt-20 pb-32'} bgcolor={'bg-[--white]'}>
        <div className='flex flex-col items-center gap-8'>
            <h2 className='text-center'>Válogass az <Secondarybluebutton text={'Egyenlítő Alapítvány céges képzéseiből'} link={'https://egyenlitoalapitvany.org/ceges'}/></h2>
            <h3 className='text-center'>és ha valamelyik felkeltette az érdeklődésedet, vedd fel velem a kapcsolatot!</h3>
            <Primarygreenbuton text={'Kapcsolatfelvétel'} link={'/kapcsolat'}/>
        </div>
    </Regularcontainer>
    </>
  )
}
