import { Link } from "react-router-dom"

const Button=(props)=>{
    return(
        <div className="card">
            <Link to={props.path} state={props.data} className={(props.value==='Deleted Tasks')?'btn btn-danger':'btn btn-success'}>{props.value}</Link>
        </div>
    )
}
export default Button