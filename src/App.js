import "./App.css";
import {GithubAuthProvider, GoogleAuthProvider, getAuth, getRedirectResult, signInWithCredential, signInWithPopup, signInWithRedirect, signOut} from "firebase/auth"
import app from "./firebase/firebase.init";
import { useState } from "react";
const auth = getAuth(app);


function App() {
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();
  const [user,newUser] = useState({});
  const handleSignInGoogle = () =>{
    signInWithPopup (auth,googleProvider)
    .then(result =>{
      const user = result.user;
      newUser(user);
      console.log(user);
    }).catch(error =>{
      const mssg = error.message;
      console.log(mssg);
    });
  }
  
  const handleSignOut = () =>{
    signOut (auth)
    .then(() =>{
      newUser({});
      console.log("sign out");
    }).catch(error =>{
      const mesg = error.message;
      console.log(mesg);
    })
  }

  const hadnleSignInGithub = () =>{
    signInWithPopup(auth,gitProvider)
    .then(result =>{
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      newUser(user);
      console.log(user);
    })
    }
  

  return (
    <div className="App">
      {
        user.uid?
        <>
            <h2>Name : {user.displayName}</h2>
            <h3>Email: {user.email}</h3>
            <img src={user.photoURL} alt="" />
            <h3>Email Verified: {user.emailVerified}</h3>
            <h3>Last SignInTime: {user.lastSignInTime}</h3>
            <button onClick={handleSignOut}>Sign Out</button>
        </>
        :
        <>
        <button onClick={handleSignInGoogle} >Google Sign In</button>
        <button onClick={hadnleSignInGithub} className="margin-between">Github Sign In</button>
        </>
       }
    </div>
  );
}

export default App;
