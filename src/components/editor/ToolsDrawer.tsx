import * as React from "react";
import { EditorContext, WithEditorActions } from "@atlaskit/editor-core";
import { JSONTransformer } from "@atlaskit/editor-json-transformer";
import { InsertMenuCustomItem } from "@atlaskit/editor-core/types";
import { EditorView } from "prosemirror-view";
import FileInput from "../FileInput";
import PreWrapDiv from "../common/PreWrapDiv";
import { jsonPretty } from "../../utils/string";
import { EditorProps } from "./Editor";
import { createEditorMenuItem } from "../../utils/editor";
import { IFileResult } from "../../types/file";

interface RenderEditor {
  onChange: (editorView: EditorView<any>) => void;
  fileUploadMenuItem: InsertMenuCustomItem;
}

interface Props extends EditorProps {
  renderEditor: (params: RenderEditor) => React.ReactNode;
}

interface State {
  isShowEditorValue: boolean;
  jsonDocument: string;
  filesName: string[];
}

class ToolsDrawer extends React.Component<Props, State> {
  fileInputRef: React.RefObject<FileInput> = React.createRef();
  transformer: JSONTransformer;

  constructor(props: Props) {
    super(props);

    this.transformer = new JSONTransformer();
    this.state = {
      isShowEditorValue: false,
      jsonDocument: "{}",
      filesName: []
    };
  }

  recursiveFileUploadQueue = (fileList: File[]) => {
    const { filesName } = this.state;

    this.setState({
      filesName: [...filesName, ...fileList.map(file => file.name)]
    });
  };

  render() {
    const { renderEditor } = this.props;
    const { isShowEditorValue, filesName } = this.state;

    return (
      <EditorContext>
        <>
          <button
            onClick={() => {
              this.setState({
                isShowEditorValue: !isShowEditorValue
              });
            }}
          >
            Show/Hide JSON Data
          </button>
          <FileInput
            ref={this.fileInputRef}
            onChange={this.recursiveFileUploadQueue}
            multiple
            isHide
          />
          <WithEditorActions
            render={actions => (
              <>
                <button
                  onClick={async () => {
                    const { getValue } = this.props;
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
            onChange: editorView => {
              const jsonDocument = jsonPretty(
                this.transformer.encode(editorView.state.doc)
              );

              this.setState({ jsonDocument });
            },
            fileUploadMenuItem: createEditorMenuItem({
              content: "File Upload",
              onClick: () => this.fileInputRef.current.fileRef.current.click()
            })
          })}
          {isShowEditorValue && (
            <PreWrapDiv>{this.state.jsonDocument}</PreWrapDiv>
          )}
          {!!filesName.length && (
            <ul>
              {filesName.map(fileName => (
                <li>{fileName}</li>
              ))}
            </ul>
          )}
        </>
      </EditorContext>
    );
  }
}

export default ToolsDrawer;
