import "./App.css";
import { useEffect, useState } from "react";
import axiosInstance from "./utils/api";

function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(
        `product/665b8872a8b7fa179ea8b723`
      );
      setProducts(response.data.data);
    } catch (error) {
      console.log(error, ">>>>>>> error");
    }
  };

  const handleSubscription = async () => {
    console.log("Subscription button clicked")
  }

  return (
    <>
      {products && (
        <>
          <h1>Name : {products.name}</h1>
          <p>Description : {products.description}</p>
          <p>Price : {products.price}</p>
          <p>Pricing cycle: {products.recurring}</p>
          <button onClick={handleSubscription}>Buy Subscription</button>
        </>
      )}
    </>
  );
}

export default App;
