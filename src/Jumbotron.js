
import React from "react";
import Button from 'react-bootstrap/Button';
import "./Jumbotron.css";

const Jumbotron = (props) => {

    return (
        <div className="Jumbotron">
            <div className="Image">
                <h1>{props.name}</h1>
                {/* Profile Picture placeholder
                Biodata Placeholder */}
                <h4>My age is {props.age}</h4>
                <Button primary>First button</Button>
            </div>
        </div>
    );
};

export default Jumbotron;