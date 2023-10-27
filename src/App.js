import logo from './logo.svg';
import './App.css';
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaExpandAlt } from 'react-icons/fa';
import { useState } from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Markdown from 'https://esm.sh/react-markdown@9'

const defaultMarkDown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Editor = ({ content, setContent }) => {

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  return (
    <div className='editorWrap'>
      <div className="toolbar">
        <FaFreeCodeCamp />
        <h3>Editor</h3>
        {/* TODO add event listener for expand */}
        <FaExpandArrowsAlt />
      </div>
      <textarea
        id="editor"
        name="editor"
        value={DOMPurify.sanitize(content)}
        onChange={handleContentChange}
      />
    </div>
  )
}

const Previewer = ({ content }) => {
  return (
    <div className='previewWrap'>
      <div className="toolbar">
        <FaFreeCodeCamp />
        <h3>Previewer</h3>
        {/* TODO add event listener for expand */}
        <FaExpandArrowsAlt />
      </div>
      <div id="preview">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}

function App() {
  const [content, setContent] = useState(defaultMarkDown);

  return (
    <div className="wrapper">
      <Editor content={content} setContent={setContent} />
      <Previewer content={content} />
    </div>
  );
}

export default App;
