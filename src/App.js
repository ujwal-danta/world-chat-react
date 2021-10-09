import { FormControl,InputLabel,Input} from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {React,useState,useEffect} from 'react'
import CardMessage from './components/CardMessage'
import {db} from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import { IconButton } from '@mui/material';
function App() {
 const [message,setMessage] = useState('');
 const [convo,setConvo] = useState([]);
 const [userData,setUserData] = useState('');



  const updateChat = async (event)=>{
  event.preventDefault();
  setConvo([...convo,{message,username: userData}]);
  console.log(convo);
  setMessage('');
  db.collection('messages').add({
    message ,
    username : userData ,
    timestamp : firebase.firestore.FieldValue.serverTimestamp()
  })
}


useEffect(()=>{
  const username = prompt("Enter your username");
  setUserData(username);
 db.collection('messages')
 .orderBy('timestamp','desc')
 .onSnapshot(snapshot => {
 setConvo(snapshot.docs.map(doc=>{
   return {
    message : doc.data(),
    id : doc.id
   }
  }))
 })
},[])
  return (
    <>
    <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
   </div>
    <form className="form-submit">
  <FormControl className="form-control">
  <Input className="input" value={message} placeholder="say something to the world...." onChange={(event)=>setMessage(event.target.value)}/>
  <IconButton  type="submit"  onClick={updateChat} disabled = {!message}>
  <SendIcon className="send" />
</IconButton>

 {/* <Button type="submit" variant="contained" endIcon={<SendIcon />}  onClick={updateChat} disabled = {!message}>
  Send
 </Button>   */}
</FormControl>
  </form>
 <FlipMove>
{
  convo.map(myMessage=>{
    return(
      <CardMessage key={myMessage.id} myMessage={myMessage.message} username={userData}/>
    )
  })
}
</FlipMove>
    </>
  );
}

export default App;
