import React from 'react'

import '../css/question.css'

export default function QPallete() {

    const qno = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


  return (
    <div className='qp'>

 <div>
                {qno.map(
                    (i)=>(
                        i % 5 == 0?<div></div>:
                        <button
                         type="button" 
                         className="btn btn-warning qpbutton">{i}</button>
                    )
                )}
            </div>


    </div>
  )
}
