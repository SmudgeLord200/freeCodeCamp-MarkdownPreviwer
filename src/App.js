import './App.css';
import { FaFreeCodeCamp, FaExpandArrowsAlt, FaExpandAlt } from 'react-icons/fa';
import { useState } from 'react';
import { marked } from 'marked';

// configure marked options
marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}" title="${title || ''}">${text}</a>`;
};

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

const Editor = ({ content, handleContentChange, openEditor, onHandleEditorButtonClick, openPreviwer }) => {
  const expandIcon = openEditor ? <FaExpandAlt /> : <FaExpandArrowsAlt />;
  const editorClassName = openEditor ? 'expandedEditor' : '';
  const hidePreviewer = openPreviwer ? 'hidePreviewer' : '';

  return (
    <div className={`editorWrap ${editorClassName} ${hidePreviewer}`}>
      <div className="toolbar">
        <FaFreeCodeCamp />
        <h3>Editor</h3>
        <button className="iconButton" onClick={onHandleEditorButtonClick}>{expandIcon}</button>
      </div>
      <textarea
        id="editor"
        name="editor"
        value={content}
        onChange={handleContentChange}
      />
    </div>
  )
}

const Previewer = ({ content, openPreviwer, onHandlePreviewerButtonClick, openEditor }) => {
  const expandIcon = openPreviwer ? <FaExpandAlt /> : <FaExpandArrowsAlt />;
  const hidePreviewer = openEditor ? 'hidePreviewer' : '';

  return (
    <div className={`previewWrap ${hidePreviewer}`}>
      <div className="toolbar">
        <FaFreeCodeCamp />
        <h3>Previewer</h3>
        <button className="iconButton" onClick={onHandlePreviewerButtonClick}>{expandIcon}</button>
      </div>
      <div id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(content, { renderer: renderer })
        }}
      />
    </div>
  )
}

function App() {
  const [content, setContent] = useState(defaultMarkDown);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  }

  const [openEditor, setEditorOpen] = useState(false);

  const onHandleEditorButtonClick = () => {
    setEditorOpen((prev) => !prev);
  }

  const [openPreviwer, setPreviwerOpen] = useState(false);

  const onHandlePreviewerButtonClick = () => {
    setPreviwerOpen((prev) => !prev);
  }

  return (
    <div className="wrapper">
      <Editor
        content={content}
        handleContentChange={handleContentChange}
        openEditor={openEditor}
        onHandleEditorButtonClick={onHandleEditorButtonClick}
        openPreviwer={openPreviwer}
      />
      <Previewer
        content={content}
        openPreviwer={openPreviwer}
        onHandlePreviewerButtonClick={onHandlePreviewerButtonClick}
        openEditor={openEditor}
      />
    </div>
  );
}

export default App;
