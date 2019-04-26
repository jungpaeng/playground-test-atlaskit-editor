import * as React from 'react';
import { Editor as EditorCore } from '@atlaskit/editor-core';
import ToolsDrawer from './ToolsDrawer';
import mockInsertMenu from './helphers/mockInsertMenu';
import extensionHandlers from './helphers/extensionHandlers';

export interface EditorProps {
  getValue: (value: string) => void;
};

const Editor = (props: EditorProps) => (
  <ToolsDrawer
    renderEditor={({
      onChange
    }) => (
      <EditorCore
        appearance="comment"
        extensionHandlers={extensionHandlers}
        insertMenuItems={mockInsertMenu}
        onChange={onChange}
        allowExtension
      />
    )}
    {...props}
  />
);

export default Editor;