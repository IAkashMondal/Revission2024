import { useState } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import style from "./css/Modal.module.css";
function App() {
  const [modalStatus, setModalStatus] = useState(true);
  return (
    <div className={`${style.Modaldiv} ${modalStatus ? style.modalshow : ""}`}>
      {" "}
      <span></span>
      <LoginForm modalStatus={modalStatus} setModalStatus={setModalStatus} />
    </div>
  );
}

export default App;
