import React from 'react'

import '../css/question.css'

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
                "qtitle": "1. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            },
            {
                "qtitle": "1. Who invented Java Programming?",
                "optA": "a) Guido van Rossum",
                "optB": "b) James Gosling",
                "optC": "c) Dennis Ritchie",
                "optD": "d) Bjarne Stroustrup"

            }
        ]








    return (
        <div className='questiomMargin'>


            {question[1].qtitle}
            <br></br>
            <br></br>

            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[1].optA}
            <br></br>
            <br></br>

            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[1].optB}
            <br></br>
            <br></br>
            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[1].optC}
            <br></br>
            <br></br>
            <input type="checkbox" />&nbsp;&nbsp;&nbsp;
            {question[1].optD}

        </div>
    )
}
