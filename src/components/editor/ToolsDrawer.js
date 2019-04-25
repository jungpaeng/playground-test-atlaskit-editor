import * as React from 'react';
import { EditorContext, WithEditorActions } from '@atlaskit/editor-core';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';
import PreWrapDiv from '../styledComponents/PreWrapDiv';
import { jsonPretty } from '../../utils/string';

class ToolsDrawer extends React.Component {
  constructor(props) {
    super(props);

    this.transformer = new JSONTransformer();
    this.state = {
      jsonDocument: '{}'
    }
  }

  onChange = (editorView) => {
    const jsonDocument = jsonPretty(
      this.transformer.encode(editorView.state.doc)
    );

    this.setState({
      jsonDocument
    });
  }

  render() {
    const { renderEditor, isShowEditorValue } = this.props;

    return (
      <EditorContext>
        <>
          <WithEditorActions
            render={actions => (
              <>
              </>
            )}
          />
          {renderEditor({
            onChange: this.onChange
          })}
          {isShowEditorValue && (
            <PreWrapDiv>
              {this.state.jsonDocument}
            </PreWrapDiv>
          )}
        </>
      </EditorContext>
    );
  }
}

export default ToolsDrawer;