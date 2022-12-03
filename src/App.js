import { React } from "react";
import Navbar from "./components/Navbar";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
// import logo from './logo.svg';

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-slate-100 mt-10 shadow-xl border relative`,
};

function App() {
  const [user]=useAuthState(auth)
  console.log(user);
  return (
    <div className={style.appContainer}>

      <section className={style.sectionContainer}>
        <Navbar/>
        <Chat/>
      </section>

    </div>
  );
}

export default App;
