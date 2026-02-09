import React, { useState } from 'react'

import '../css/question.css'


var i=0;

export default function QuestionsPage() {

    const question =
        [
            {
                "qtitle": "1. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "2. Which statement is true about Java?",
                "optA": "a) Java is a sequence-dependent programming language",
                "optB": "b) Java is a code dependent programming language",
                "optC": "c) Java is a platform-dependent programming language",
                "optD": "d) Java is a platform-independent programming language"

            },
            {
                "qtitle": "3. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "4. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            }
        ]



const gotoNext = ()=>{
    i++;
    i=i>3?3:i;
    setIndex(i);
    console.log("i--->"+i);
    
}

const gotoPrev = ()=>{
    i--;
    i=i<0?0:i;
    setIndex(i);
    console.log("i--->"+i);
    
}


const [index,setIndex] = useState(0);

    return (
        <div className='questiomMargin'>


            {question[index].qtitle}
            <br></br>
            <br></br>

            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[index].optA}
            <br></br>
            <br></br>

            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[index].optB}
            <br></br>
            <br></br>
            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[index].optC}
            <br></br>
            <br></br>
            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[index].optD}
            <br></br>
            <br></br>
            <div className='npbutton'>

                  <button
                onClick={gotoPrev}
                type="button"
                 className="btn btn-primary npbutton">Prev</button>
            
                <button
                onClick={gotoNext}
                type="button" className="btn btn-primary">Next</button>

               </div>

        </div>
    )
}
