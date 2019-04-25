import * as React from 'react';
import { Editor } from '@atlaskit/editor-core';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';
import PreWrapDiv from './styledComponents/PreWrapDiv';
import { jsonPretty } from '../utils/string';

class App extends React.Component {
  state = {
    output: ''
  };
  transformer = new JSONTransformer();

  handleChangeInEditor = (editorView) => {
    const output = jsonPretty(this.transformer.encode(editorView.state.doc));

    this.setState({output});
  };

  render() {
    return (
      <>
        <Editor
          appearance="comment"
          onChange={this.handleChangeInEditor}
        />
        <PreWrapDiv data-placeholder="Empty Document">
          {this.state.output}
        </PreWrapDiv>
      </>
    );
  }
}

export default App;
