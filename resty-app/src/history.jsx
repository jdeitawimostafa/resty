import React from 'react';
// import '../components-styles/history.scss';
export default function History(props) {
  let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
  return (
    <>
      {history.map((query) => {
        return (
          <li className='method' key={query.method + query.output}>
            <span>{query.method}</span>
            <span>{query.output}</span>
          </li>
        );
      })}
    </>
  );
}
