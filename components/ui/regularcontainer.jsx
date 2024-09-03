export default function Regularcontainer({children, bgcolor, padding}) {
  return (
    <section className={`flex flex-col gap-16 ${padding} w-full ${bgcolor}`}>
        <div className="container m-auto">
            {children}   
        </div>
    </section>
  )
}
