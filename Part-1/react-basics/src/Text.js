import React from "react";
import { useState, useEffect } from "react";


export const Text = () => {

    const [text, setText] = useState("");

    useEffect(()=> {
        console.log("COMPONENT MOUNTED");

        return ()=> {

            console.log("COMPONENT UNMOUNTED");
        }
    }, [text]);



    return (
        <div>
            <input
            onChange={(event) => {
                setText(event.target.value);
            }}></input>
            <h1> {text}</h1>
        </div>

    )

}