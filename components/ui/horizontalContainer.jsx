export default function Horizontalcontainer({children, bgcolor, padding, align}) {
    return (
      <section className={`flex flex-col w-full min-h-[50vh] ${padding} ${bgcolor}`}>
          <div className={`flex ${align} flex-col lg:gap-32 gap-8 container m-auto`}>
              {children}   
          </div>
      </section>
    )
  }
  