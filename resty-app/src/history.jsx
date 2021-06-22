import React from 'react';

export default function History(props){
    let method = localStorage.getItem('method')?JSON.parse(localStorage.getItem('method')):[];
    let output = localStorage.getItem('output') ? JSON.parse(localStorage.getItem('output')):[];


    return(
        <>
       
             <li>
             <span>{method}</span>
         </li>
       
         <li>
             <span>{output}</span>
         </li>
            </>
        )
    
}