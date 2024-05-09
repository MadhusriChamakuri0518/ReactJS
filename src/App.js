import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/hello';
import Wish from './components/props/Wish';
import Features from './components/props/Features';
import Message from './components/state';
import Counter from './components/state/Counter';
import FunctionClick from './components/EventHandling/FuntionClick';
import ClassClick from './components/EventHandling/ClassClick';
import EventBind from './components/EventHandling/EventBind';
import UserGreeting from './components/ConditionalRendering/UserGreeting';
import StyleSheet from './components/StylingAndCSS/StyleSheet';

function App() {
  return (
    <div className="App">
      <StyleSheet/>
      {/* <UserGreeting/> */}
      {/* <Wish name="Samaira" age="24" />
      <Wish name="Yashni" age="21" />
      <Features height="162cm" id="145678" /> */}
      {/* <Message></Message> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}
      {/* <EventBind/> */}
    </div>
  );
}

export default App;
