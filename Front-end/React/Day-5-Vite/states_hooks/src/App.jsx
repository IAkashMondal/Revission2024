
import Counter from "./Components/01_StateHook/Counter"
import Curd from "./Components/02_State-Curd/Curd"
import React_Form_Basisc from "./Components/03_React_Form/01_React_Form_Basisc"
import React_Form_Advance from "./Components/03_React_Form/02_React_Form_Advance"
import { FromsDowPdf } from "./Components/04_React-Pdf-Download/FromsDowPdf";
import { ApiFetch } from "./Components/05_useEffect_Hooks/01_ApiFetch";
import ReducerCounter from "./Components/07_Reducer/components/ReducerCounter";

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
            <td style={Bod}><FromsDowPdf/></td>
            <td style={Bod}><ApiFetch/></td>
          </tr>
          <tr>
            <td style={Bod}><ReducerCounter/></td>
            <td style={Bod}>fetc using reducer</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
