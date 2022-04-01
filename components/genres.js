import Genre from './genre';

export const GENRES = ['Rap', 'Pop', 'Edm', 'R&B', 'Rock', 'Latin'];

export default function Genres() {
  return (
    <>
      {GENRES.map(genre => (
        <Genre key={genre} genre={genre.toLowerCase()} />
      ))}
    </>
  );
}
