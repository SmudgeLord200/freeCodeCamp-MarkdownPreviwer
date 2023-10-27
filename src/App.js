import logo from './logo.svg';
import './App.css';
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaExpandAlt } from 'react-icons/fa';

const Editor = () => {
  return (
    <div className='editor'>
      <div class="toolbar">
        <FaFreeCodeCamp />
        <h3>Editor</h3>
        {/* TODO add event listener for expand */}
        <FaExpandArrowsAlt />
      </div>
      <textarea id="editor"/>
    </div>
  )
}

const Previewer = () => {
  return (
    <div className='preview'>
      <div class="toolbar">
        <FaFreeCodeCamp />
        <h3>Previewer</h3>
        {/* TODO add event listener for expand */}
        <FaExpandArrowsAlt />
      </div>
      <div id="preview">
        fdd
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="wrapper">
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
