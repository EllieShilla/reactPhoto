import React from 'react';
import './App.css';

function Valid(log,pass,email) {
  let isValid=true;

  // if (!/^[A-Z]+[a-z]{3,7}[-]+[a-z0-9]+@+[a-z]+\.+[a-z]{2,4}$/.test(email)) {
    if (!/[A-Za-z0-9]{3,7}[@]+[a-z]+\.+[a-z]{2,4}$/.test(email)) {
    document.getElementById('mail').innerHTML = "incorrect";
    document.getElementById('mail').style.display = "block";
    isValid= false;
} else {
    document.getElementById('mail').style.display = "none";
}

if (pass.length < 6) {
    document.getElementById('pass').innerHTML = "need more than 6 characters";
    document.getElementById('pass').style.display = "block";
    isValid= false;
} else {
    if (!/\d/.test(pass)) {
        document.getElementById('pass').innerHTML = "Password has no digit";
        document.getElementById('pass').style.display = "block";
        isValid= false;
      } else if (!/[A-Z]/.test(pass)) {
        document.getElementById('pass').innerHTML = "Password has no big letters";
        document.getElementById('pass').style.display = "block";
        isValid= false;
      } else if (!/[a-z]/.test(pass)) {
        document.getElementById('pass').innerHTML = "Password has no small letters";
        document.getElementById('pass').style.display = "block";
        isValid= false;
      } else {
        document.getElementById('pass').style.display = "none";
    }
}

if (log===null || log==="" ||log.length<6){  
  document.getElementById('log').innerHTML = " log need more than 6 characters";
  document.getElementById('log').style.display = "block";
          isValid= false;  
}
else
document.getElementById('log').style.display="none";

  return isValid;
}

function Form(){
  let uLoging=React.createRef();
  let uEmail=React.createRef();
  let uPassword=React.createRef();
  let uAbout=React.createRef();
  let uTags=React.createRef();
  let uimage=React.createRef();
  
  const Registration=event=>{
    event.preventDefault();
    if(Valid(uLoging.current.value,uPassword.current.value,uEmail.current.value)===true)
    {
      document.getElementById("ImgId").style.display="block";
      document.getElementById("ImgId").src="/image/"+uimage.current.value.substr(12);
          alert(uLoging.current.value+'\n'+uEmail.current.value+'\n'+uPassword.current.value+'\n'+uAbout.current.value+'\n'+uTags.current.value+'\n'+uimage.current.value);
    }
  }

  return (
    <div>
    <form onSubmit={Registration}>
      <input placeholder="Login" ref={uLoging}/><p id="log" style={{display:'none'}}></p><br></br>
      <input placeholder="Password" ref={uPassword}/><p id="pass" style={{display:'none'}}></p><br></br>
      <input placeholder="Email" ref={uEmail}/><p id="mail" style={{display:'none'}}></p><br></br>
      <input placeholder="About" ref={uAbout}/><br></br>
      <input placeholder="Tegs" ref={uTags}/><br></br>
      <p>Загрузка изображения из файла public</p>
      <input type="file" ref={uimage}/><br></br>
      <input type="submit" value="Send"/>
    </form>
    <img  id="ImgId" alt={"df"} style={{display:"none"}}/>

    </div>
  );
}

function App() {
  return(
  <div>
 <Form/>
 </div>
   );
}

export default App;
