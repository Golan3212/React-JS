
import './App.scss';
import React from 'react';
import { useEffect, useState } from 'react';



function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [id, setId] = useState(0);



  const handleSubmit = () => {
    setId(id + 1);
    if (text !== '') {
      setMessageList([...messageList, {
        text: text,
        author: author,
        id: id
      }]);
    }


  }

  const handleInput = (event) => {
    setAuthor(event.target.value);
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }
  useEffect(() => {

  }, []);



  return (
    <div className='mainDiv'>
      <div className='inputEl'>
        <input className='message' type={'textarea'} placeholder='type text' value={text} onChange={handleChange} />
        <input className='authorInput' type={'text'} placeholder='type name' value={author} onChange={handleInput} />
        <button type='submit' onClick={handleSubmit}> SUBMIT! </button>
      </div>


      <ul className='listMsg'>
        {messageList.map((item, index) => (
          <li className='messageLink' key={item.id}>
            <div className='messageBlock'>{item.text}
              <span className='author'> {item.author} </span>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;