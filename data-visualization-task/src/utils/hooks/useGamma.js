import { useEffect, useState } from "react";
import { helpers } from "../../utils";

const useGamma = (data) => {
  const [gammaData, setGammaData] = useState({});
  const [mean, setMean] = useState();
  const [median, setMedian] = useState();
  const [mode, setMode] = useState();

  useEffect(() => {
    //fetching all the Alcohol classes in keys (as class is a reserve name) from data set
    const keys = new Set(data.map((item) => item.Alcohol));

    for (const key of keys) {
      // getting key data as array from main data
      const keyGammaData = data
        .filter((item) => item.Alcohol === key)
        .map((item) => (item.Ash * item.Hue) / item.Magnesium);

      // setting gamma data in {key:[...values]} format
      setGammaData((prev) => ({
        ...prev,
        [key]: keyGammaData,
      }));
    }
  }, [data]);

  useEffect(() => {
    for (let key in gammaData) {
      // setting mean in {key:mean} format
      setMean((prev) => ({
        ...prev,
        [key]: helpers.mean(gammaData[key]),
      }));

      // setting median in {key:mean} format
      setMedian((prev) => ({
        ...prev,
        [key]: helpers.median(gammaData[key]),
      }));

      // setting mode in {key:mean} format
      setMode((prev) => ({
        ...prev,
        [key]: helpers.mode(gammaData[key]),
      }));
    }
  }, [gammaData]);

  return {
    Mean: mean,
    Median: median,
    Mode: mode,
  };
};

export default useGamma;
