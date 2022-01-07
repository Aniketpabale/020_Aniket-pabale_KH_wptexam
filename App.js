
import './App.css';
import {useState} from "react";

export default function App() {
  return (
    
    <div>
      <Mycomponent/>
    </div>
  );
}

function Mycomponent()
{
  const [message,setMessage]=useState("Lets Chat here....");
  const[list,setList]=useState([]);

  const changemessage=(e)=>{
    const newmessage=e.target.value;
    setMessage(newmessage);
  };

  const addmessage=()=>{
    if(message=="")
    {
      alert("please enter message");
    }
    const newList=[message,...list];
    setList(newList);
    setMessage("");
  };


  return(
  <div>
    <h1 className="bg-black text-light p-2">MyChatApp</h1>
    <container>
      <row>
    <input type="text" value={message} onChange={changemessage} className="form-control-lg w-75" />
    <input type="button" value="Send" onClick={addmessage} className="btn btn-dark text-white w-25 btn-lg"/>
    </row>
    </container>
    <div>
      {list.map((item,index)=>(
        <div key={index}className='fs-3 text-dark'>{item}</div>
      ))}
    </div>
  </div>

  
  )
};



