"use client"

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

  const Blogtile = ({ featuredimage, postdate, title, authorimage, authorname, category, classname, content, href }) => {

    return(
        <>
            <Link href={href} className={classname}>
                <div style={{backgroundImage:`url("${featuredimage}")`}} className="w-full min-h-[150px] bg-cover bg-center bg-no-repeat">
                </div>
                <div className="flex flex-col justify-between gap-4 w-full h-full p-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <Image src={authorimage} height={30} width={30} alt='author' className='rounded-full'/>
                            <p className="text-sm ">{authorname}</p>
                            <p className="text-sm ">{postdate}</p>
                            <p className="text-sm border border-neutral-300 rounded-full px-2">{category}</p>
                        </div>                    
                        <h3 className="text-xl font-bold">{title}</h3>
                        <div className="text-sm" dangerouslySetInnerHTML={{ __html: content }}></div>
                    </div>
                    <div className="relative h-8">
                        <FiArrowRight className='absolute text-[--aquamarine] right-4 bottom-0 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-0 ease-out duration-200'/>
                    </div>
                </div>
            </Link>
        </>
    )
  }

  export default Blogtile;