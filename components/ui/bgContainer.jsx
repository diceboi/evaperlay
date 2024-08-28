import Image from "next/image"

export default function Bgcontainer({children, bgimage, height, bgopacity, bgcolor, blendmode}) {
  return (
    <section className={`relative flex flex-col justify-center items-center py-20 px-2 ${height} `}>
        <Image src={bgimage} fill style={{ objectFit: 'cover', objectPosition: '25% 35%' }}/>
        <div className={`absolute w-full h-full ${bgcolor} ${bgopacity} ${blendmode}`}></div>
        <div className='container'>
            {children}
        </div>
    </section>
  )
}
