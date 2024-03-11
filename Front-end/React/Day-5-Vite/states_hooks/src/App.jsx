
import Counter from "./Components/01_StateHook/Counter"
import Curd from "./Components/02_State-Curd/Curd"
import React_Form_Basisc from "./Components/03_React_Form/01_React_Form_Basisc"
import React_Form_Advance from "./Components/03_React_Form/02_React_Form_Advance"
import { FromsDowPdf } from "./Components/04_React-Pdf-Download/FromsDowPdf";
import { ApiFetch } from "./Components/05_useEffect_Hooks/01_ApiFetch";
import { Search_Query_Reducer } from "./Components/07.01_Reducer_search/components/Search_Query_Reducer";
import { ReducerCounter } from "./Components/07_Reducer/components/ReducerCounter";
import { ReducerFetch } from "./Components/07_Reducer/components/ReducerFetch";

function App() {
  const Wid = {
    width: "100%",
  };
  const Bod = {
    width: "50%",
    border: "2px solid black"
  }



  return (

    <>
      <table style={Wid}>

        <tbody>
          <tr>
            <td style={Bod}><Counter /></td>
            <td style={Bod}><Curd /></td>
          </tr>
          <tr>
            <td style={Bod}><React_Form_Basisc /></td>
            <td style={Bod}><React_Form_Advance /></td>
          </tr>
          <tr>
            <td style={Bod}><FromsDowPdf /></td>
            <td style={Bod}><ApiFetch /></td>
          </tr>
          <tr>
            <td style={Bod}><ReducerCounter /></td>
            <td style={Bod}><ReducerFetch /></td>
          </tr>
          <tr>
            <td style={Bod}><Search_Query_Reducer /></td>
            <td style={Bod}></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
