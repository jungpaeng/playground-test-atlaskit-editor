import * as React from 'react';
import { ReactRenderer } from '@atlaskit/renderer';
import Editor from './editor/Editor';

type Props = { };

interface State {
  editorValue: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
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
          extensionHandlers={extensionHandlers}
        />
      </>
    );
  }
}

export default App;
