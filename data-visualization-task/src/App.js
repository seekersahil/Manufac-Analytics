import { hooks } from "./utils";
import { Table } from "./components";
import "./App.css";
function App() {
  const wineData = hooks.useFetchWineData();
  const flavanoidData = hooks.useFlavanoids(wineData);
  const gammaData = hooks.useGamma(wineData);
  return (
    <div className="body">
      <Table key="flavanoidTable" data={flavanoidData} title="Flavanoids" />
      <Table key="gammaTable" data={gammaData} title="Gamma" />
    </div>
  );
}

export default App;
