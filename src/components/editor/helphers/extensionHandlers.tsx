import * as React from 'react';

const extensionHandlers = {
  'com.haniplanet.macro.core': (ext: any, doc: any) => {
    const {
      extensionKey,
      parameters
    } = ext;

    switch (extensionKey) {
      case 'movie':
        const {type, url} = parameters;
        const movie: any = {};

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