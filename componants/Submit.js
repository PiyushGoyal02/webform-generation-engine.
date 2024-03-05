import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Submit({jsonfile}){

    const {formData, setFormData} = useContext(AppContext);
    return(
        <div>
            {jsonfile.questions.map((value)=> {
                return (
                    <h1>{value.q}</h1>
                )
            })}
        </div>
    )
}

export default Submit;