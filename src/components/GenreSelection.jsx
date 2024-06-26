import { Link } from 'wouter';
import { useState } from 'react';
import { useEffect } from 'react';

const genres = [
  "Romance", "Thriller", "Mystery", "Classics", "Non-fiction",
  "Science Fiction", "Fantasy", "Biography", "Historical Fiction"
];

const GenreSelection = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [canProceed, setCanProceed] = useState(false);

  const handleGenreClick = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  useEffect(() => {
    setCanProceed(selectedGenres.length > 2);
  }, [selectedGenres]);

  return (
   <>
          <div className=" mt-2 text-center text-red text-7xl font-semibold font-poppins">
            Let&apos;s get to know you!
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 justify-center">
            <div className="text-black text-center text-4xl font-semibold font-poppins">
              Choose your favorite genres:
            <div className="text-black text-2xl font-normal font-lora mt-4 mb-1">
              Pick at least 3 genres
          </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {genres.map((genre) => (
              <div
                key={genre}
                className={`w-32 h-32 flex justify-center items-center ${
                  selectedGenres.includes(genre) ? 'ring-4 ring-yellow rounded-lg' : ''
                }`}
                onClick={() => handleGenreClick(genre)}
              >
                <div className="w-32 h-32 bg-gradient-to-b from-blue via-slate-500 to-red rounded-lg flex flex-col justify-center items-center">
                  <div className="w-24 text-center text-stone text-lg font-medium font-poppins leading-snug">
                    {genre}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            {canProceed ? (
              <Link href="/books-authors-selection" className="px-40 py-4 bg-blue rounded-full flex justify-center items-center gap-2.5 hover:bg-red active:bg-red active:ring active:ring-yellow">
                <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
                  next
                </div>
              </Link>
            ) : (
              <div className="px-40 py-4 bg-blue rounded-full flex justify-center items-center \cursor-not-allowed">
                <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
                  next
                </div>
              </div>
            )}

            <div className="flex mt-9 justify-center w-full px-32">
              <div className="flex items-center justify-around gap-3">
                <div className="w-5 h-5 relative">
                  <div className="w-4 h-4 bg-black rounded-full absolute left-[4px] top-[4px]" />
                  <div className="w-6 h-6 rounded-full border-2 border-black absolute" />
                </div>
                <div className="w-4 h-4 bg-beige rounded-full" />
                <div className="w-4 h-4 bg-beige rounded-full" />
              </div>
            </div>
          </div>
        </div>
        </>
  );
};

export default GenreSelection;
