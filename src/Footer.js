import CountdownTimer from "./CountdownTimer"


const Footer = () => {

  


  return (
    <footer>

      {<CountdownTimer />}

      <section className="discount">
        <div className="discount__oldPrice">
          <p>ЗВИЧАЙНА ЦІНА:</p>
          <p><span>275</span>грн</p>
        </div>
        <div className="discount__newPrice">
          <p>ЦІНА ЗА АКЦІЄЮ:</p>
          <p>249 грн</p>
        </div>
      </section>

      <section className="button">
        <button>ЗАМОВИТИ ЗАРАЗ</button>
      </section>
    </footer>
  )
}

export default Footer
