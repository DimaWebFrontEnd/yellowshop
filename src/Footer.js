
const Footer = () => {
  return (
    <footer>
      <section className="timer">
        <div className="timer__time"><p><span>15</span><br /> годин</p></div>
        <div className="timer__time"><p><span>23</span><br /> хвилин</p></div>
        <div className="timer__time"><p><span>15</span><br /> сукунд</p></div>
      </section>
      <section className="discount">
        <div className="discount__oldPrice">
          <p>ЗВИЧВЙНА ЦІНА:</p>
          <p><span>275</span>грн</p>
        </div>
        <div className="discount__newPrice">
          <p>ЦІНА ЗА АКЦІЄЮ:</p>
          <p>249грн</p>
        </div>
        <button>ЗАМОВИТИ ЗАРАЗ</button>
      </section>
    </footer>
  )
}

export default Footer
