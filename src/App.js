import './App.css'
import {useState} from 'react'

function App() {
  const [toDos,setToDos]=useState([]) 
  const [toDo,setToDo]=useState('')
  const deleteToDo=(index)=>{
    var oldlist=toDos;
    oldlist.splice(index,1);
    toDos=oldlist;
  }
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=> setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    <div className="todos">
    {
      toDos.map((mobj,index)=>{

     return(
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(mobj)
            setToDos(toDos.filter(obj=>{
             if (obj.id===mobj.id){
              obj.status=e.target.checked
             }
             return obj
            }))
          }} value={mobj.status} type="checkbox" name="" id="" />
          <h4 className="world">{mobj.text}</h4>
        </div>
        <div className="right">
          <i  onClick={()=>{deleteToDo(index)}} className="fas fa-times"></i>
        </div>
      </div>)
       })
 }
 {
  toDos.map((obj)=>{
    <h1 className='check
    '>checked items</h1>
if (obj.status){
  return <h1>{obj.text}</h1>
} return null;
  })
 }
    </div>
  </div>
  );
}

export default App;
