
import awardIcon from "./img/award-icon.png";
import percentageIcon from "./img/percentage-icon.png";
import deliveryIcon from "./img/delivery-icon.png";



const Header = ({productName}) => {

  return (
    <header>
      
      <section className="header__icons">

         <div className="header__icons--award">
            <div className="award__icon">
               <img src={awardIcon} alt="Award Icon" />
               <p><span style={{fontWeight: "bold"}}>Новинка</span><br /> <span>2025 року</span></p>
            </div>
         </div>

         <div className="header__icons--percentage">
            <div className="percentage__icon">
               <img src={percentageIcon} alt="Percentage Icon" />
               <p><span style={{fontWeight: "bold"}}>Оплата</span><br /> <span>після перевірки</span></p>
            </div>
         </div>

         <div className="header__icons--delivery">
            <div className="delivery__icon">
               <img src={deliveryIcon} alt="Delivery Icon" />
               <p><span style={{fontWeight: "bold"}}>Швидка</span><br /> доставка</p>
            </div>
         </div>
      </section>

      <section className="header__prodName"><h1>{productName}</h1></section>
    </header>
  )
}

export default Header
