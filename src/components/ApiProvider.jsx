import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [items, setItems] = useState([]);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    axios.get("https://f0c39e7608e741b4.mokky.dev/things?page=1&limit=9")
      .then((response) => {
        setItems(response.data.items);
        setDataLength(response.data.meta.total_items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ApiContext.Provider value={{ items, dataLength }}>
      {children}
    </ApiContext.Provider>
  );
}