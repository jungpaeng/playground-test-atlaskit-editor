import * as React from 'react';
import { Editor as EditorCore } from '@atlaskit/editor-core';
import ToolsDrawer from './ToolsDrawer';

const Editor = (props) => (
    <ToolsDrawer
        renderEditor={({
            onChange
        }) => (
            <EditorCore
                appearance="comment"
                onChange={onChange}
            />
        )}
        {...props}
    />
);

export default Editor;