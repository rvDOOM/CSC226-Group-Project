import React from 'react';
import Game from "./Game";


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;