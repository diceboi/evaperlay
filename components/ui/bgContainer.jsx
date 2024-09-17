import Image from "next/image"

export default function Bgcontainer({children, bgimage, height, bgopacity, bgcolor, blendmode}) {
  return (
    <section style={{backgroundImage:`url("${bgimage}")`}} className={`relative flex flex-col lg:justify-center justify-end items-center px-2 ${height} overflow-hidden bg-no-repeat lg:bg-[right_0rem_top_-4rem] bg-[left_-30rem_top_0rem] lg:bg-[length:120%] bg-[length:350%]`}>
        <div className={`absolute w-full h-full ${bgcolor} ${bgopacity} ${blendmode}`}></div>
        <div className='container'>
            {children}
        </div>
    </section>
  )
}
