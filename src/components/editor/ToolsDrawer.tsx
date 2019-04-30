import * as React from "react";
import {
  EditorContext,
  WithEditorActions,
  EditorActions
} from "@atlaskit/editor-core";
import { JSONTransformer } from "@atlaskit/editor-json-transformer";
import { InsertMenuCustomItem } from "@atlaskit/editor-core/types";
import { ImageUploadHandler } from "@atlaskit/editor-core/plugins/image-upload/types";
import { EditorView } from "prosemirror-view";
import FileInput from "../FileInput";
import PreWrapDiv from "../common/PreWrapDiv";
import { jsonPretty } from "../../utils/string";
import { EditorProps } from "./Editor";
import { createEditorMenuItem } from "../../utils/editor";

interface RenderEditor {
  onChange: (editorView: EditorView<any>) => void;
  legacyImageUploadProvider: Promise<ImageUploadHandler>;
  fileUploadMenuItem: InsertMenuCustomItem;
  testButtom: InsertMenuCustomItem;
}

interface Props extends EditorProps {
  renderEditor: (params: RenderEditor) => React.ReactNode;
  isImageUpload?: boolean;
}

interface State {
  isShowEditorValue: boolean;
  jsonDocument: string;
  filesName: string[];

  isShowTempDataList: boolean;
  selectedTempDataList: string[];
}

const TEMP_DATA = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

class ToolsDrawer extends React.Component<Props, State> {
  fileInputRef: React.RefObject<FileInput> = React.createRef();
  imageUploadRef: React.RefObject<FileInput> = React.createRef();
  transformer: JSONTransformer;

  constructor(props: Props) {
    super(props);

    this.transformer = new JSONTransformer();
    this.state = {
      isShowEditorValue: false,
      jsonDocument: "{}",
      filesName: [],
      isShowTempDataList: false,
      selectedTempDataList: []
    };
  }

  recursiveFileUploadQueue = (fileList: File[]) => {
    const { filesName } = this.state;

    this.setState({
      filesName: [...filesName, ...fileList.map(file => file.name)]
    });
  };

  recursiveImageUploadQueue = (fileList: File[], actions: EditorActions) =>
    fileList.forEach(async file => {
      const url = await window.URL.createObjectURL(file);

      actions.replaceSelection({
        type: "mediaSingle",
        attrs: { layout: "center" },
        content: [
          {
            type: "media",
            attrs: {
              type: "external",
              url
            }
          }
        ]
      });
    });

  render() {
    const { renderEditor, isImageUpload } = this.props;
    const {
      isShowEditorValue,
      filesName,

      isShowTempDataList,
      selectedTempDataList
    } = this.state;

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
                {isImageUpload && (
                  <FileInput
                    ref={this.imageUploadRef}
                    onChange={file =>
                      this.recursiveImageUploadQueue(file, actions)
                    }
                    multiple
                    isHide
                  />
                )}
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
            legacyImageUploadProvider:
              isImageUpload &&
              Promise.resolve(() =>
                this.imageUploadRef.current.fileRef.current.click()
              ),
            fileUploadMenuItem: createEditorMenuItem({
              content: "File Upload",
              onClick: () => this.fileInputRef.current.fileRef.current.click()
            }),
            testButtom: createEditorMenuItem({
              content: "Test Button",
              onClick: () => {
                this.setState({ isShowTempDataList: true });
              }
            })
          })}
          {isShowTempDataList && (
            <ul>
              {TEMP_DATA.map(data => (
                <li
                  onClick={() => {
                    this.setState({
                      isShowTempDataList: false,
                      selectedTempDataList: [...selectedTempDataList, data]
                    });
                  }}
                >
                  <a href="#">{data}</a>
                </li>
              ))}
            </ul>
          )}
          {selectedTempDataList && (
            <ul>
              {selectedTempDataList.map(selectedTempData => (
                <li>{selectedTempData}</li>
              ))}
            </ul>
          )}
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
