import { useState } from "react"
import { useParams } from "react-router-dom";
import MessageList from "../constants/MessageList";
import ChatList from "../constants/ChatList";
import { Paper, TextField } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Layout from '../constants/Layout';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from "react-redux";
import { addMessageWithThunk} from "../store/messages/actions.js"


const Chats = () => {
    
    const {name} = useSelector(state => state.profile);
    const [value, setValue] = useState('test');
    
    const { chatId } = useParams();
    const dispatch = useDispatch();



    const handleSubmit = () => {
        if( value !== ''){
            const message = {
                text: value,
                author: name
            }
            dispatch(addMessageWithThunk(chatId, message));
            setValue('');
        }
       
    }


    const handleChange = (event) => {
       setValue(event.target.value);
    }




    const handleInput = (event) => {
      
    }



    const handleClear = (e) => {
       
    }




    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
            <div className="messageList " >

                <div className="css-144ebsl">
                    <ChatList />
                </div>
                <Paper >
                    <MessageList />
                </Paper>

                <div className='inputEl'>
                    <TextField
                        className='inputText'
                        id="outlined-multiline-static"
                        label="type text"
                        multiline
                        rows={4}
                        value={value}
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
                        value={name}
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

        </div>


    );
};

export default Chats