import { useLocation } from "react-router-dom"

const Completed=()=>{
    const location=useLocation()
    const data=location.state
    return(
        <>
        {(data)?data.map((x)=>{
            return <div lassName="card" style={{paddingTop:'10px',paddingLeft:'10px',backgroundColor:'lightgrey'}} key={x.id}><p>Task Name: {x.name}</p><p>Deadline was:{x.date}</p><p style={style.color}>Status : Completed</p></div>
        }):<h1>No Task in List</h1>}
        </>
    )
}
const style={
    color:{
        color:'green'
    }
}
export default Completed