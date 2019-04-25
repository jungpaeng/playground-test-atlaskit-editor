import * as React from 'react';
import { ReactRenderer } from '@atlaskit/renderer';
import Editor from './editor/Editor';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorValue: ''
    }
  }

  render() {
    return (
      <>
        <Editor
          getValue={editorValue => this.setState({editorValue})}
        />
        <ReactRenderer
          document={this.state.editorValue}
        />
      </>
    );
  }
}

export default App;
