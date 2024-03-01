import { useState } from 'react'

const React_Form_Advance = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    check: { ram: false, shyam: false }
  });

  const handelInput = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [type === 'checkbox' ? 'check' : name]: type === 'checkbox' ? { ...prevData.check, [name]: checked } : value,
    }));
  };


  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data)
  }
  return (
    <div><h1>React Basic from</h1>
      <h2>Multiple Input with Multi state</h2>
      <br />
      <br />
      <form onSubmit={handelSubmit}>
        <div>
          <label>name</label>
          <input type='text' name="name" value={data.name} onChange={handelInput} />
        </div>
        <div>
          <label>number</label>
          <input type='number' name="age" value={data.age} onChange={handelInput} />
        </div>
        <div>
          <label>Checkbox</label>
          <>
            <label>ram</label>
            <input type="checkbox"
              name="ram"
              checked={data.check.ram}
              onChange={handelInput} />
          </>
          <>
            <label>Shyam</label>
            <input type="checkbox"
              name="shyam"
              checked={data.check.shyam}
              onChange={handelInput} />
          </>
        </div>
        <button>Submit</button>
      </form>
    </div>

  )
}

export default React_Form_Advance
