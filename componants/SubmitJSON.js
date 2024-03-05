import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useLinkClickHandler, useNavigate } from "react-router-dom";

function SubmitJSON(props){

    // var value;
    const navigator = useNavigate();

    // const [JSONvalue,setJSONvalue] = useState(value)

    // function ChangeHandler(event){
    //     setJSONvalue(event.target.value)
    // }
    
    function SubmitHandler(e){
        navigator('/que1')
        // e.preventDefault();

        // props.getdata(JSONvalue)
    }

    return (
        <div className="JSONFile">
            <form onSubmit={SubmitHandler}>
                <h1 className="question-hading"> Enter Your JSON. </h1>
                <inpu className="number-input" type="text" placeholder="Enter Your JSON"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SubmitJSON;