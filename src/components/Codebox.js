import React from "react"
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const Codebox = () => {
  return (
    <div className="codebox">
      <Typist>
        <span>{"const Developer = () => {"}</span>
        <br />
        &emsp;<span>{"const info = {"}</span>
        <br />
        &emsp;&emsp;<span>{"firstName: 'John',"}</span>
        <br />
        &emsp;&emsp;<span>{"lastName: 'Rock',"}</span>
      </Typist>
    </div>
  )
}

export default Codebox
