import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentBox from './CommentBox.js';
import Comments from './Comments.js';
import CommentTitle from './CommentTitle.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function CommentsData() {

  const data = [
    {name: 'Comment 1', title: 'Comment Title 1', description: 'Comment Description 1'},
    {name: 'Comment 2', title: 'Comment Title 2', description: 'Comment Description 2'},
    {name: 'Comment 3', title: 'Comment Title 3', description: 'Comment Description 3'},
    {name: 'Comment 4', title: 'Comment Title 4', description: 'Comment Description 4'},
    {name: 'Comment 5', title: 'Comment Title 5', description: 'Comment Description 5'}
  ];

  return (
    <table style = {{ borderStyle: "solid",
    borderColor: "black",
    width: '400px',
    height: '300px'}}>
      <CommentBox/>
      <Comments data={data} />
      <CommentTitle data={data} />
    </table>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CommentsData />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
