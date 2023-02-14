import { useEffect, useState } from "react";
import { LoadfromDb } from "../utilities/DataBase";

const useLoaddb = (products) => {
    const [matched, setMatched] = useState([])
  useEffect(() => {
    const loadDb = LoadfromDb();
    const addedProduct = [];
    for (const id in loadDb) {
      const match = products.find((product) => product.id === id);
      if (match) {
        match.quantity = loadDb[id];
        addedProduct.push(match);
      }
    }
    setMatched(addedProduct)
  }, [products]);
  return [matched, setMatched]
};

export default useLoaddb;
