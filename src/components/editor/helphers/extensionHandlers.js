import * as React from 'react';

const extensionHandlers = {
  'com.haniplanet.macro.core': (ext, doc) => {
    const {
      extensionKey,
      parameters
    } = ext;

    switch (extensionKey) {
      case 'movie':
        const {type, url} = parameters;
        const movie = {};

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
              width="854"
              height="480"
              src={movie.src + movie.id}
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