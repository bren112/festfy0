import { useEffect, useState } from 'react';
import { firebase, auth } from "./firebase";
import './btn.css'
export default function Sobre() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName ,photoURL } = user;
        if (!displayName)
          throw new Error('O usuário não tem DisplayName ou photoUrl');

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      } else {
        setUser(null); // Define o estado do usuário como null se não houver usuário logado
      }
    });
  }, []);

  const handleClickButtonLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    console.log(result);
  

    if (result.user) {
      const { uid, displayName , photoURL } = result.user;
      if (!displayName)
        throw new Error('O usuário não tem DisplayName ou photoUrl');

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      });
    }
  }

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null); // Define o estado do usuário como null após o logout
  };

  let content;
  if (user) {
    content = (
      <>
        <div className='header'>
        <p id='tagp'>{"Olá " + user.name + "!"}</p>
        <img src={user.avatar} alt="Foto de perfil do usuário" id='avatar'/>
        </div>


        <button onClick={handleLogout}
        className='login-with-google-btn'>
        Logout</button>
   
      </>
    );
  } else {
    content = <button onClick={handleClickButtonLogin} 
    className='login-with-google-btn'>Login Google</button>;
  }

  return <>{content}</>;
}
