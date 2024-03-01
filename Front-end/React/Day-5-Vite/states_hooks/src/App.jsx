import Counter from "./Components/01_StateHook/Counter"
import Curd from "./Components/02_State-Curd/Curd"
import React_Form_Basisc from "./Components/03_React_Form/01_React_Form_Basisc"
import React_Form_Advance from "./Components/03_React_Form/02_React_Form_Advance"

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
        </tbody>
      </table>
    </>
  )
}

export default App
