import * as React from 'react';
import styled from 'styled-components';
import { Editor } from '@atlaskit/editor-core';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';

const jsonPretty = (obj: any) => JSON.stringify(obj, null, 2);

const PreWrapDiv = styled.div`
  white-space: pre-wrap;

  &:empty:not(:focus)::before {
    content: attr(data-placeholder);
    font-size: 14px;
  }
`;

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
