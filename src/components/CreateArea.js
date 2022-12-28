import React, { useState } from "react";

function CreateArea(props){

    //track state
    //set input controle
    const [note, setNote] = useState({
        title:"",
        content:""
    })

    //handle note inputs
    function handleChange(event){
        //destructue event
        const {name, value} = event.target;

        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    //add note
    function submitNote(event){
        props.onAdd(note)
        event.preventDefault();
    }

    return (
        <div>
          <form>
            <input 
            name="title" 
            onChange={handleChange}
            value={note.title}
            placeholder="Title" />

            <textarea 
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..." rows="3" />
            <button onClick={submitNote} >Add</button>
          </form>
        </div>
      );
}

export default CreateArea;