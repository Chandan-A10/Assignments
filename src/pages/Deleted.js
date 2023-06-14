import { useLocation } from "react-router-dom"

const Deleted=()=>{
    const location=useLocation()
    const data=location.state
    console.log(data)
    return(
        <>
        {(data)?data.map((x)=>{
            return <div className="card" style={{paddingTop:'10px',paddingLeft:'10px',backgroundColor:'lightgrey'}} key={x.id}><p>Task Name: {x.name}</p><p>Deadline :{x.date}</p><p style={style.color}>Status : Deleted</p></div>
        }):<h1>No Task in List</h1>}
        </>
    )
}
const style={
    color:{
        color:'red'
    }
}
export default Deleted