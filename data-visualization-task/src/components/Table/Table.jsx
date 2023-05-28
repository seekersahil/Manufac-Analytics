import {useState} from "react";
import "./Table.css"

const Table = ({title,data}) => {
  const [modeType, setModeType] = useState("firstMode")
  //while the data is fetched return loading
  if(!data.Mean){
    return "Loading..."
  }
  const selectModeType = (e) => {
    setModeType(e.target.value)
  }
  return (
    <div className="table-container"> 
      <div className="select-options">
        <label>Select Mode type for {title}:</label>
        <div>
          <input type="radio" checked={modeType==="firstMode"&&"checked"} id={`${title}-modeType-firstMode`} key={`${title}-modeType-firstMode`} name={`${title}-modeType`} value="firstMode" onChange={selectModeType}></input>
          <label htmlFor={`${title}-modeType-firstMode`}>First Mode: first value with highest frequency</label>
        </div>
        <div>
          <input type="radio" checked={modeType==="mode"&&"checked"} id={`${title}-modeType-mode`} key={`${title}-modeType-mode`} name={`${title}-modeType`} value="mode" onChange={selectModeType}></input>
          <label htmlFor={`${title}-modeType-mode`}>All values with highest frequency</label>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Measure</th>
            {
              Object.keys(data.Mean)?.map((className)=>(
                <th key={`${title}-className-${className}`}>Class {className}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          { Object.keys(data)?.map((operation,index)=>(
            <tr key={`${title}-operation-row-${index}`}>
              <th>{title} {operation}</th>
                { Object.values(data[operation])?.map((value,index)=>(
                  <td key={`${title}-${operation}-${index}`}>
                    {
                      operation === "Mode"? 
                        modeType=== "firstMode"?
                          value[modeType]
                          :value[modeType].join(", ")
                        :value
                    }
                  </td>
                ))}
            </tr>           
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
