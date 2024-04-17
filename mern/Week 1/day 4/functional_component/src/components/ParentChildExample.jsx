

const ParentComponent = (props) => {
    return (
        <div>              // this is obj
            <ChildComponent firstName={"Shafkat"} lastName={"Ali"} />  // this is component
        </div>
    )
}

const ChildComponent = (props) => {
    return (
        <p>
            Hello! My name is {props.firstName} {props.lastName}
        </p>
    )
}

// in react props only go one direction, from parents to child, props created by react
// props can not be changed, it's only for display
// props = {

// }