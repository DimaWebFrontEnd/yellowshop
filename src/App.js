import Header from "./Header";
import Product from "./Product";
import ListItems from "./ListItems";
import Footer from "./Footer";
import { useState } from "react";
import img from "./img/photoEdited.png";
import Check from "./img/chekIcon.png";


function App() {

  /* Те що вкладається через useState може потомім бити замінено даними з сервера */
  const [productName, setProductName] = useState("Мереживна накидка");
  const [imgProduct, setImgProduct] = useState(img);
  const [checkList, setCheckList] = useState(Check);

  return (
    <div className="App">
      <Header 
        productName={productName}
      />
      <main>
        <Product 
          imgProduct={imgProduct}
        />
        <ListItems 
          checkList={checkList}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
