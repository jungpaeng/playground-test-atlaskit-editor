import * as React from "react";
import { Editor } from "@atlaskit/editor-core";
import ToolsDrawer from "./ToolsDrawer";
import selectMockMenu from "./helphers/selectMockMenu";
import extensionHandlers from "./helphers/extensionHandlers";

export interface EditorProps {
  getValue: (value: string) => void;
}

const CUSTOM_BUTTON_DATA = [
  {
    name: "Custom Button 1",
    onClick: () => console.log("OK")
  },
  {
    name: "Custom Button 2",
    onClick: () => console.log("OK2")
  }
];

const EditorPage = (props: EditorProps) => (
  <ToolsDrawer
    isImageUpload
    customButton={CUSTOM_BUTTON_DATA}
    renderEditor={({
      onChange,
      legacyImageUploadProvider,
      fileUploadMenuItem,
      customButton
    }) => (
      <Editor
        appearance="comment"
        extensionHandlers={extensionHandlers}
        insertMenuItems={[
          ...selectMockMenu(["movie"]),
          fileUploadMenuItem,
          ...customButton
        ]}
        onChange={onChange}
        legacyImageUploadProvider={legacyImageUploadProvider}
        allowExtension
      />
    )}
    {...props}
  />
);

export default EditorPage;
