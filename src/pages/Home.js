import { useState } from "react"
import Button from "../components/Button"
import List from "../components/List"
import Form  from "../components/Form"

const Home=()=>{
    const [task,setTask]=useState([])
    const [deleted,setdeleted]=useState([])
    const [completed,setcompleted]=useState([])

    const handleClick=(e,obj)=>{
        setTask((task)=>[...task,obj])
    }

    const handleCheck=(e,id,flag)=>{
        let p=document.getElementById(id)
        const filteredList=task.filter((x)=>{
            if(x.id===id){
                if(flag){
                    x.status='Completed'
                    setcompleted(completed=>[...completed,x])
                    p.setAttribute('style','text-decoration:line-through')
                }
                else{
                    x.status='pending'
                    const completedList=completed.filter((item)=>{
                        if(item.id===x.id){
                            p.setAttribute('style','text-decoration:none')
                        }
                        return item.id!==x.id;
                    })
                    setcompleted(completedList)
                }
                return x;
            }
            return x;
        })
        setTask(filteredList)
    }
    const handleDelete=(event,id)=>{
        const filteredList=task.filter((x)=>{
            if(x.id===id){
                setdeleted((deleted)=>[...deleted,x])
            }
            return x.id!==id;
        })
        setTask(filteredList)
        console.log(filteredList)
    }
    return(
        <>
        <div className="split left">
        <div className="centered">
        <Form Submit={handleClick}></Form>
        <div className="button">
        <Button value='Deleted Tasks' path='/deleted' data={deleted}></Button>
        <Button value='Completed Tasks' path='/completed' data={completed}></Button>
        </div>
        </div>
        </div>
        <div className="split right">
        <div className="centered"> 
        <List list={task} handleCheck={handleCheck} handleDelete={handleDelete}></List>
        </div>

        </div>
        </>
    )
}
export default Home