import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState([
    'Blog Post One',
    'Example Post Two',
    'Awesome Post Three',
  ]);
  let [titleIndex, setTitleIndex] = useState(0);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(['hide', 'hide', 'hide']);
  let [input, setInput] = useState('');

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>SimpleBlog</h4>
      </div>
      <button
        className='sort-button'
        onClick={() => {
          let newTitle = [...title];
          newTitle.sort();
          setTitle(newTitle);
        }}
      >
        Sort by Namef
      </button>
      {title.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4>
              <span
                className='blog-title'
                onClick={() => {
                  let modalCopy = [...modal];
                  modalCopy[i] === 'hide'
                    ? (modalCopy[i] = 'show')
                    : (modalCopy[i] = 'hide');
                  setModal(modalCopy);
                  setTitleIndex(i);
                }}
              >
                {title[i]}
              </span>
              <span
                className='like-button'
                onClick={(e) => {
                  e.stopPropagation();
                  let likeCopy = [...like];
                  likeCopy[i] = likeCopy[i] + 1;
                  setLike(likeCopy);
                }}
              >
                👍
              </span>
              {like[i]}
            </h4>
            <p>Posted February 17th</p>
            <button
              className='delete-button'
              onClick={() => {
                let newTitle = [...title];
                newTitle.splice(i, 1);
                setTitle(newTitle);
              }}
            >
              Delete
            </button>
            {modal[i] === 'show' ? (
              <Modal
                title={title}
                setTitle={setTitle}
                titleIndex={titleIndex}
              ></Modal>
            ) : null}
          </div>
        );
      })}
      <input
        className='enter-field'
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type='text'
      ></input>
      <button
        onClick={() => {
          let newTitle = [...title];
          newTitle.unshift(input);
          setTitle(newTitle);
          console.log('i');
        }}
      >
        Add Post
      </button>
    </div>
  );
}

function Modal(props) {
  return (
    <div className='modal'>
      <h4>{props.title[props.titleIndex]}</h4>
      <p>Date</p>
      <p>Additional Information</p>
      <button>Edit Post</button>
    </div>
  );
}

export default App;
