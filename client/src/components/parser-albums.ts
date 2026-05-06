type LastFmAlbum = {
    name: string;
    playcount: string;
    image: { size: string;['#text']: string }[];
};

type AlbumParsed = {
    name: string;
    playcount: number;
    image: string | null;
    weight: number;
};

export function parseAlbums(albums: LastFmAlbum[]): AlbumParsed[] {
    const parsed = albums.map((a) => {
        const img =
            a.image.find((i) => i.size === 'extralarge')?.['#text'] || null;

        return {
            name: a.name,
            playcount: Number(a.playcount),
            image: img && !img.includes('2a96cbd8b46e442fc41c2b86b821562f')
                ? img
                : null,
            weight: 0
        };
    });

    const total = parsed.reduce((acc, a) => acc + a.playcount, 0);

    return parsed.map((a) => ({
        ...a,
        weight: a.playcount / total
    }));
}