import React from "react"
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Codebox = () => {
  return (
    <div className="codebox">
      <Typist stdTypingDelay={20} startDelay={1000}>
        <span>{"const Developer = () => {"}</span>
        <br />
        &emsp;<span>{"const info = {"}</span>
        <br />
        &emsp;&emsp;<span>{"firstName: '"}<span class="bold-code">{"John"}</span>{"',"}</span>
        <br />
        &emsp;&emsp;<span>{"lastName: '"}<span class="bold-code">{"Rock"}</span>{"',"}</span>
        <br />
        &emsp;&emsp;<span>{"title: 'Front End Developer'"}</span>
        <br />
        &emsp;<span>{"}"}</span>
        <br />
        <br />
        &emsp;<span>{"return ("}</span>
        <br />
        &emsp;&emsp;<span>{"<div>"}</span>
        <br />
        &emsp;&emsp;&emsp;<span>{"<h1>{info.name} {info.lastname}</h1>"}</span>
        <br />
        &emsp;&emsp;&emsp;<span>{"<p>{info.title}</p>"}</span>
        <br />
        &emsp;&emsp;<span>{"</div>"}</span>
        <br />
        &emsp;<span>{")"}</span>
        <br />
        <span>{"}"}</span>
        <br />
        <br />
        <span>{"export default Developer"}</span>
      </Typist>
    </div>
  )
}

export default Codebox


// const Developer = () => {

//     const info = {
//         firstName: 'John',
//         lastName: 'Rock',
//         title: 'Front End Developer'
//     }

//     return (
//         <div>
//             <h1>{info.firstName} {info.lastName}</h1>
//             <p>{info.title}</p>
//         </div>
//     )
// }

// export default Developer
