import '../App.scss';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { List, ListItem} from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {useParams} from 'react-router-dom'
import { getMessagesByChatIdWithFB } from '../store/middleware';





const MessageList = () => {
  const {chatId} = useParams();
 const allMessages = useSelector(state => state.messages.messageList);
 const messages = allMessages[chatId];
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getMessagesByChatIdWithFB(chatId));

 }, [chatId]);
 

    return (
      <div>
        <List className='listMsg' >
          {messages?.map((item) => (
            <ListItem className='messageLink' key={item.id}>
              <div className='messageBlock'>{item.text}
                <span className='author'><AccountBoxIcon/>{item.author}</span>
              </div>
              
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    // return(
    //     <div className='messageList'>
    //          <ul className='listMsg'>
    //       {messages?.map((item) => (  
    //         <li className='messageLink' key={item.id}>
    //           <div className='messageBlock'>{item.text}
    //             <span className='author'> {item.icon}{item.author} </span>
    //           </div>

    //         </li>
    //       ))}
    //     </ul>

    //     <div className='inputEl'>
    //       <TextField
    //         className='inputText'
    //         id="outlined-multiline-static"
    //         label="type text"
    //         multiline
    //         rows={4}
    //         value={text}
    //         onChange={handleChange}
    //       />

    //       <TextField className='authorInput'
    //         variant='outlined'
    //         type={'text'}
    //         style={{ margin: '20px 0' }}
    //         label='Type name'
    //         padding={'10px'}
    //         color={'secondary'}
    //         autoFocus={true}
    //         value={author}
    //         onChange={handleInput} />

    //       <Stack direction="row" spacing={2}>
    //         <Button variant="outlined" onClick={handleClear} startIcon={<DeleteIcon />}>
    //           Delete
    //         </Button>
    //         <Button variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}>
    //           Send
    //         </Button>
    //       </Stack>
    //     </div>

    //     </div>
    // )
}

export default MessageList;

