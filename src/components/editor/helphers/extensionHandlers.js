import * as React from 'react';

const extensionHandlers = {
  'com.haniplanet.macro.core': (ext, doc) => {
    const {
      extensionKey,
      parameters
    } = ext;

    switch (extensionKey) {
      case 'movie':
        return (
          <div>
            <iframe
              title={`movie-${parameters.input}`}
              width="854"
              height="480"
              src={parameters.input}
              frameborder="0"
            />
          </div>
        );
      default:
          return null;
    }
  }
}

export default extensionHandlers;