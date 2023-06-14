import { useRef } from "react"

const TaskForm=(props)=>{
    const name=useRef()
    const date=useRef()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name.current.value.trim()==='' || date.current.value.trim()===''){
            console.log('error')
        }
        else{
            let obj={
                id:Date.now(),
                name:name.current.value,
                date:date.current.value,
                status:'pending',
            }
            props.Submit(e,obj)
        }
    }

    return(
        <div className="container">
        <form onSubmit={handleSubmit}>
            <input className='form-control' type="text" ref={name} name="name" placeholder="Enter Task"></input><br/>
            <input className='form-control' type="date" ref={date} name="date"></input><br/>
            <button className="btn btn-primary">Add Task</button>
        </form>

        </div>
    )
}

export default TaskForm