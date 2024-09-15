import Image from "next/image"

export default function Bgcontainer({children, bgimage, height, bgopacity, bgcolor, blendmode}) {
  return (
    <section className={`relative flex flex-col lg:justify-center justify-end items-center px-2 ${height} overflow-hidden`}>
        <Image src={bgimage} fill style={{ objectFit: 'cover', objectPosition: '30% 0%' }}/>
        <div className={`absolute w-full h-full ${bgcolor} ${bgopacity} ${blendmode}`}></div>
        <div className='container'>
            {children}
        </div>
    </section>
  )
}
