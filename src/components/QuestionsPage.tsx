import React, { useState } from 'react'

import '../css/question.css'



var i = 0;

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

    const showButton = (k: number) => {
        console.log("k--->" + k);
        setIndex(k - 1);
    }

    const gotoNext = () => {
        i++;
        i = i > 3 ? 3 : i;
        setIndex(i);
        console.log("i--->" + i);

    }

    const gotoPrev = () => {
        i--;
        i = i < 0 ? 0 : i;
        setIndex(i);
        console.log("i--->" + i);

    }

    const qno = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


    const [index, setIndex] = useState(0);

    return (
        <div>

            <div className='qp'>

                <div>
                    {qno.map(
                        (i) => (
                            i % 5 == 0 ? <>
                                <button
                                    onClick={() => { showButton(i) }}
                                    type="button"
                                    className="btn btn-warning qpbutton">{i}</button>

                                <br></br><br></br></> :
                                <button
                                    onClick={() => { showButton(i) }}
                                    type="button"
                                    className="btn btn-warning qpbutton">{i}</button>
                        )
                    )}
                </div>


            </div>

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
