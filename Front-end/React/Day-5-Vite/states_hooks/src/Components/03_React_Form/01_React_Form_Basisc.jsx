import { useState } from 'react'

const React_Form_Basisc = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [checks, setChecks] = useState({ ram: false, shyam: false });
  const handelname = (e) => {
    setName(e.target.value)
  }
  const handelage = (e) => {

    setAge(e.target.value)
  }
  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setChecks((prevChecks) => ({ ...prevChecks, [name]: checked }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, checks)
  }
  return (
    <div><h1>React Basic from</h1>
      <h2>Multiple Input with Multi state</h2>
      <br />
      <br />
      <form onSubmit={handelSubmit}>
        <div>
          <label>name</label>
          <input type='text' value={name} onChange={handelname} />
        </div>
        <div>
          <label>number</label>
          <input type='number' value={age} onChange={handelage} />
        </div>
        <div>
          <label>Checkbox</label>
          <>
            <label>ram</label>
            <input type="checkbox"
              name="ram"
              checked={checks.ram}
              onChange={handleCheck} />
          </>
          <>
            <label>Shyam</label>
            <input type="checkbox"
              name="shyam"
              checked={checks.shyam}
              onChange={handleCheck} />
          </>
        </div>
        <button>Submit</button>
      </form>
    </div>

  )
}

export default React_Form_Basisc