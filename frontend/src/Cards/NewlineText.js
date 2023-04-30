import * as React from 'react';
import * as ReactDOM from 'react-dom';

function NewlineText(props) {
  const text = props.text;
  return text.split('\n').map(str => <p>{str}</p>);
}

ReactDOM.render(
  <div className="App">
    <NewlineText text={'Line one\nLine two\nLine three'} />
  </div>,
  document.getElementById('root')
);

export default NewlineText;