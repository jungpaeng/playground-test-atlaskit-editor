import * as React from 'react';

const mockInsertMenu = [
  {
    content: 'Movie extension',
    value: { name: 'movie' },
    tooltipDescription: 'Movie extension',
    tooltipPosition: 'right',
    elemBefore: (null),
    onClick: function(editorActions: EditorActions) {
      const input = prompt('Input Url');

      editorActions.replaceSelection({
        type: 'extension',
        attrs: {
          extensionType: 'com.haniplanet.macro.core',
          extensionKey: 'movie',
          text: 'Movie extension',
          parameters: { input }
        }
      });
    },
  },
]

export default mockInsertMenu;