import React, { useState } from 'react'

import '../css/question.css'
import QPallete from './QPallete';


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

            },
            {
                "qtitle": "5. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "6. Which statement is true about Java?",
                "optA": "a) Java is a sequence-dependent programming language",
                "optB": "b) Java is a code dependent programming language",
                "optC": "c) Java is a platform-dependent programming language",
                "optD": "d) Java is a platform-independent programming language"

            },
            {
                "qtitle": "7. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "8. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "9. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "10. Which statement is true about Java?",
                "optA": "a) Java is a sequence-dependent programming language",
                "optB": "b) Java is a code dependent programming language",
                "optC": "c) Java is a platform-dependent programming language",
                "optD": "d) Java is a platform-independent programming language"

            },
            {
                "qtitle": "11. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "12. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "13. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "14. Which statement is true about Java?",
                "optA": "a) Java is a sequence-dependent programming language",
                "optB": "b) Java is a code dependent programming language",
                "optC": "c) Java is a platform-dependent programming language",
                "optD": "d) Java is a platform-independent programming language"

            },
            {
                "qtitle": "15. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "16. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "17. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "18. Which statement is true about Java?",
                "optA": "a) Java is a sequence-dependent programming language",
                "optB": "b) Java is a code dependent programming language",
                "optC": "c) Java is a platform-dependent programming language",
                "optD": "d) Java is a platform-independent programming language"

            },
            {
                "qtitle": "19. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "20. Who invented Java Programming?",
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
        <div>

         <QPallete />
           
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

        </div>
        
    )
}
