import * as React from 'react';
import { ExtensionHandlers } from '@atlaskit/editor-common';

interface Movie {
  id: string;
  src: string;
}

const extensionHandlers: ExtensionHandlers = {
  'com.haniplanet.macro.core': (ext, doc) => {
    const {
      extensionKey,
      parameters
    } = ext;

    switch (extensionKey) {
      case 'movie':
        const {type, url} = parameters;
        const movie: Movie = {} as Movie;

        if (type === 'youtube') {
          movie.id = url[2];
          movie.src = '//www.youtube.com/embed/';
        } else if (type === 'vimeo') {
          movie.id = url[1];
          movie.src = '//player.vimeo.com/video/';
        } else {
          return null;
        }

        return (
          <div>
            <iframe
              title={`movie-${movie.id}`}
              width="560"
              height="315"
              src={movie.src + movie.id}
            />
          </div>
        );
      default:
          return null;
    }
  }
}

export default extensionHandlers;