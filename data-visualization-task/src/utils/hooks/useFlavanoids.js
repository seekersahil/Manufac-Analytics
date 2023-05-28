import { useEffect, useState } from "react";
import { helpers } from "../../utils";

const useFlavanoids = (data) => {
  const [flavanoidData, setFlavanoidData] = useState({});
  const [mean, setMean] = useState();
  const [median, setMedian] = useState();
  const [mode, setMode] = useState();

  useEffect(() => {
    //fetching all the Alcohol classes in keys (as class is a reserve name) from data set
    const keys = new Set(data.map((item) => item.Alcohol));

    for (const key of keys) {
      // getting key data as array from main data
      const keyFlavanoidData = data
        .filter((item) => item.Alcohol === key)
        .map((item) => item.Flavanoids);

      // setting flavanoid data in {key:[...values]} format
      setFlavanoidData((prev) => ({
        ...prev,
        [key]: keyFlavanoidData,
      }));
    }
  }, [data]);

  useEffect(() => {
    // setting mean, mode and median data for each class
    for (let key in flavanoidData) {
      // setting mean in {key:mean} format
      setMean((prev) => ({
        ...prev,
        [key]: helpers.mean(flavanoidData[key]),
      }));

      // setting median in {key:mean} format
      setMedian((prev) => ({
        ...prev,
        [key]: helpers.median(flavanoidData[key]),
      }));

      // setting mode in {key:mean} format
      setMode((prev) => ({
        ...prev,
        [key]: helpers.mode(flavanoidData[key]),
      }));
    }
  }, [flavanoidData]);

  return {
    Mean: mean,
    Median: median,
    Mode: mode,
  };
};

export default useFlavanoids;
