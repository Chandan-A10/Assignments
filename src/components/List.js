import Items from "./items"
const List=(props)=>{
    return(
        <>
        <div>
        {(props.list===[])?<h3>No Active Task</h3>:props.list.map((x)=>{
            return <Items handleCheck={props.handleCheck}
                         handleDelete={props.handleDelete} 
                         key={x.id} name={x.name} id={x.id} 
                         date={x.date} status={x.status}>
                    </Items>
            })}

        </div>
        </>
    )
}
export default List