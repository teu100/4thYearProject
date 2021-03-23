import React from 'react'

// function Greet() {
//     return <h1>Hello Mateus</h1>
// }


const Greet = (props) => {
console.log(props)
return (<>
    
<h1>Simple function taking in an arg: {props.name} {props.surname}</h1>
{props.children}

</>)
}

export default Greet;