import './App.css';
import Header from './components/Headerss';
import MainBar from './components/MainBar';
import Proptutorial from './components/Proptutorial';
import  SampleEvent  from './components/SampleEvent';
import StudentResult from './components/StudentResult';
function App() {
  return (
    <>
    <Header/>
    <p className='appP'>This is for App.js Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non aliquam minima nihil at fugit fugiat qui perspiciatis reprehenderit deleniti ipsa soluta eveniet, aliquid, quas cumque illo repellat! Minima, natus magnam?</p>
    <MainBar/>
    <Proptutorial welcomemessage="welcome have a nice day" name="john" age={55} />
    {/* <SampleEvent/> */}
    <StudentResult/>
    </>
  );
}

export default App;
