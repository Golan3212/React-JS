import '../App.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';




const MessageList = (props) => {

  const {messages} = props;  
  const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [id, setId] = useState(0);
    
   
   

    function handleSubmit() {
    setId(id + 1);
    if (messages !== '') {
      setMessageList([...messageList, {
        text: text,
        author: author,
        id: id,
        icon: <AccountBoxIcon />
      }]);
    }

    // messageList.unshift();
    // console.log(messageList);

    setText('');

  }
    
    const handleInput = (event) => {
      setAuthor(event.target.value);
    }
    
    const handleChange = (event) => {
      setText(event.target.value)
    }
    
    const handleClear = (e) => {
      e.preventDefault()
      setText('');
      setAuthor('')
    }
    
    useEffect(() => {
      let timer
      if (messageList.length > 0 && messageList[messageList.length - 1]?.author === author) {
        timer = setTimeout(() => setMessageList([...messageList, {
          text: 'Зачем ты это пишешь, никто не видит все равно',
          author: 'bot',
          id: `bot ${id}`,
          icon: <PrecisionManufacturingIcon />
        }]), 1500); 
      }
      
      return () => {
        clearTimeout(timer);
        
       
      }
    }, [messageList, author, id]);

    return(
        <div className='messageList'>
             <ul className='listMsg'>
          {messages?.map((item) => (  
            <li className='messageLink' key={item.id}>
              <div className='messageBlock'>{item.text}
                <span className='author'> {item.icon}{item.author} </span>
              </div>

            </li>
          ))}
        </ul>

        <div className='inputEl'>
          <TextField
            className='inputText'
            id="outlined-multiline-static"
            label="type text"
            multiline
            rows={4}
            value={text}
            onChange={handleChange}
          />

          <TextField className='authorInput'
            variant='outlined'
            type={'text'}
            style={{ margin: '20px 0' }}
            label='Type name'
            padding={'10px'}
            color={'secondary'}
            autoFocus={true}
            value={author}
            onChange={handleInput} />

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={handleClear} startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </div>

        </div>
    )
}

export default MessageList

