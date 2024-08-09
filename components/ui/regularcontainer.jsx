export default function Regularcontainer({children, bgcolor}) {
  return (
    <section className={`flex flex-col gap-16 py-8 lg:py-32 w-full ${bgcolor}`}>
        <div className="container m-auto">
            {children}   
        </div>
    </section>
  )
}
