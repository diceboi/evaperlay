"use client"

import Regularcontainer from './ui/regularcontainer'

export default function Whattoexpect() {
  return (
    <Regularcontainer>
        <div className='flex flex-row lg:flex-col gap-20'>
            <div className='flex flex-col gap-8 w-1/2'>
                <h2 className="text-4xl font-bold">
                    Mire számíthatsz?
                </h2>
                <p className='text-lg'>
                    A coaching az ügyféllel való partneri együttműködés, olyan gondolatébresztő és kreatív folyamat, amely arra inspirálja az ügyfelet, hogy a legtöbbet hozza ki önmagából személyes és szakmai szempontból is. 
                </p>
                <span className='italic text-neutral-400'>International Coaching Federation</span>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                <h3>Egyenrangú partnerekként</h3>
            </div>
        </div>
        
    </Regularcontainer>
  )
}
