import { useState } from "react"

const Items=(props)=>{
    let [ischeck,setcheck]=useState(false)
    const handleCheck=(e)=>{
        if(!ischeck){
            props.handleCheck(e,props.id,1)
            setcheck(!ischeck)
            console.log("done")
        }
        else{
            props.handleCheck(e,props.id,0)
            setcheck(!ischeck)
            console.log("undone")
        }
    }
    return(
        <div className="todo">
            <p  className='todo-text-container'id={props.id}>Task Name: {props.name}</p>
            <p className="todo-text-container">Date : {props.date}</p>
            <p className="todo-text-container">Status : {props.status}</p>
            <input className="check-todo-button" type="checkbox" checked={ischeck} onChange={handleCheck} ></input>
            <button className="btn btn-danger ml-auto" onClick={e=>props.handleDelete(e,props.id)}>X</button>
        </div>
    )
}
export default Items