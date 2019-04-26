import * as React from 'react';
import { youtubeReg } from '../../../constants/urls';

const extensionHandlers = {
  'com.haniplanet.macro.core': (ext, doc) => {
    const {
      extensionKey,
      parameters
    } = ext;

    switch (extensionKey) {
      case 'movie':
        const {url} = parameters;
        const youtubeMatch = url.match(youtubeReg);

        if (youtubeMatch && youtubeMatch[2].length === 11) {
          const youtubeId = youtubeMatch[2];
          return (
            <div>
              <iframe
                title={`movie-${youtubeId}`}
                width="854"
                height="480"
                src={`//www.youtube.com/embed/${youtubeId}`}
                frameborder="0"
              />
            </div>
          );
        } else {
          return null;
        }
      default:
          return null;
    }
  }
}

export default extensionHandlers;