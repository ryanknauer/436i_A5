import  React  from "react";
import Messages from "./Messages";
import Input from "./Input";
import { getMessagesAsync } from "../actions";
import {store} from "../index.js"



const App = () => {   //this is how you make a functional component
  store.dispatch(
    getMessagesAsync()
  );
  return (
    <div>
      <Messages/>
      <Input/>
    </div>
  );
}

export default App;