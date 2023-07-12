import React from "react";
import Footer from "./Footer";
import Header from "./Heading";
import Note from "./Note";
import notes from "../Notes";

function App() {
    return (
    <div>
        <Header/>
        {notes.map((cont) => 
        (
        <Note
            title = {cont.title}
            content = {cont.content}
        />
        ))
        }
        <Footer/>
    </div>
    );
}

export default App;
