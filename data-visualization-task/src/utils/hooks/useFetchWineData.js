import { useState, useEffect } from "react";

const useFetchWineData = () => {
  const [wineData, setWineData] = useState([]);

  const fetchWineData = async () => {
    //fetching URL from .env file. For demo we can replace this with /Wine-Data.json as json file is in public folder
    const response = await fetch(process.env.REACT_APP_DATA_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const json = await response.json();
    setWineData(json);
  };

  useEffect(() => {
    fetchWineData();
  }, []);

  return wineData;
};

export default useFetchWineData;
