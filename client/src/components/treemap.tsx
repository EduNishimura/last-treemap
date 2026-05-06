import React from 'react';
import './treemap.css';

type AlbumParsed = {
  name: string;
  playcount: number;
  image: string | null;
  weight: number;
};

type Props = {
  albums: AlbumParsed[];
};

const getSpan = (weight: number) => {
  // controla "importância visual"
  return Math.max(1, Math.round(weight * 12));
};

export const AlbumTreemap: React.FC<Props> = ({ albums }) => {
  const sorted = [...albums].sort((a, b) => b.playcount - a.playcount);

  return (
    <div id="chart" className="treemap">
      {sorted.map((album) => {
        const span = getSpan(album.weight);

        return (
          <div
            key={album.name}
            className="tile"
            style={{
              gridColumn: `span ${span}`,
              gridRow: `span ${span > 4 ? 2 : 1}`
            }}
          >
            {album.image ? (
              <img
                src={album.image}
                alt={album.name}
                crossOrigin="anonymous"
                onError={(e) => {
                  e.currentTarget.src = '/fallback.png';
                }}
              />
            ) : (
              <div className="fallback">
                {album.name}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};