// App TodoList 

import { useState } from "react";

function App() {

  const [job, setJob] = useState( () => {
    const getStorage = JSON.parse(localStorage.getItem('TodoList'))
    return getStorage ?? []
  })

  const [input, setInput] = useState('')    //Dữ liệu khi đang nhập vào ô input
  


  function handleAdd () {
    setJob(prev => {
      const newJob = [...prev, input]
          //Lưu vào storage
      localStorage.setItem('TodoList', JSON.stringify(newJob))
      return newJob
    })
    setInput('')
  }

  function handleDelete (id) {
    setJob(prev => {
      const delJob  = prev.filter( (value,index) => index !== id)
      localStorage.setItem('TodoList', JSON.stringify(delJob))
      return delJob
    })
  }


  return (
    <div style={{ padding: 52 }}>
      <input 
        value={input}
        onChange={e => setInput(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {job.map((value, index)=>(
          <li key={index}>{value}<button onClick={() => handleDelete(index)}>Xoá</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;