import * as React from 'react';
import { EditorContext, WithEditorActions } from '@atlaskit/editor-core';
import { JSONTransformer } from '@atlaskit/editor-json-transformer';
import PreWrapDiv from '../styledComponents/PreWrapDiv';
import { jsonPretty } from '../../utils/string';

interface Props {
  renderEditor: (params: any) => React.ReactNode;
  getValue: any;
}

class ToolsDrawer extends React.Component<Props, any> {
  transformer: any;

  constructor(props: Props) {
    super(props);

    this.transformer = new JSONTransformer();
    this.state = {
      isShowEditorValue: false,
      jsonDocument: '{}'
    }
  }

  onChange = (editorView: any) => {
    const jsonDocument = jsonPretty(
      this.transformer.encode(editorView.state.doc)
    );

    this.setState({
      jsonDocument
    });
  }

  render() {
    const { renderEditor } = this.props;
    const { isShowEditorValue } = this.state;

    return (
      <EditorContext>
        <>
          <button
            onClick={() => {
              this.setState({isShowEditorValue: !isShowEditorValue});
            }}
          >
            Show/Hide JSON Data
          </button>
          <WithEditorActions
            render={actions => (
              <>
                <button
                  onClick={async () => {
                    const {getValue} = this.props;
                    const value = await actions.getValue();

                    getValue(value);
                  }}
                >
                  Save
                </button>
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