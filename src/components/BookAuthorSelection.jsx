import { Link } from "wouter";
import { useState, useEffect } from "react";

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/images/GatsbyCover.webp",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "/images/ToKillaMockingbirdCover.jpeg",
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    coverImage: "/images/HarryPotter.jpeg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage: "/images/TheCatcherInTheRyeCover.jpeg",
  },
  {
    title: "1984",
    author: "George Orwell",
    coverImage: "/images/1984Cover.webp",
  },
];

const authors = [
  {
    name: "F. Scott Fitzgerald",
    authorImage: "/images/F.ScottFitzgerald.jpeg",
  },
  {
    name: "Harper Lee",
    authorImage: "/images/HarperLee.webp",
  },
  {
    name: "George Orwell",
    authorImage: "/images/GeorgeOrwell.jpeg",
  },
  {
    name: "Jane Austen",
    authorImage: "/images/JaneAusten.webp",
  },
  {
    name: "J.D. Salinger",
    authorImage: "/images/J.D. Salinger.webp",
  },
  {
    name: "Agatha Christie",
    authorImage: "/images/AgathaChristie.jpeg",
  },
];

const BookAuthorSelection = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [canProceed, setCanProceed] = useState(false);

  const handleBookClick = (book) => {
    if (selectedBooks.includes(book)) {
      setSelectedBooks(
        selectedBooks.filter((selectedBook) => selectedBook !== book)
      );
    } else {
      setSelectedBooks([...selectedBooks, book]);
    }
  };

  const handleAuthorClick = (author) => {
    if (selectedAuthors.includes(author)) {
      setSelectedAuthors(
        selectedAuthors.filter((selectedAuthor) => selectedAuthor !== author)
      );
    } else {
      setSelectedAuthors([...selectedAuthors, author]);
    }
  };

  useEffect(() => {
    setCanProceed(selectedBooks.length > 0 && selectedAuthors.length > 0);
  }, [selectedBooks, selectedAuthors]);

  return (
    <>
      <Link
        to="/genres"
        className="pt-3 flex items-center gap-1 ml-20 text-black text-xl font-medium  font-['Poppins'] hover:text-red active:text-blue"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1875 9H3.375M7.3125 4.5L2.8125 9L7.3125 13.5"
            stroke="#151515"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
        Back
      </Link>

      <div className="-mt-6 flex flex-col items-center justify-center">
        <div className="text-center text-red text-4xl font-semibold">
          Your Favorites:
        </div>
        <div className="text-center">
          <div className="text-black text-2xl font-normal font-['Lora'] mt-3">
            Pick some books and authors you love:
          </div>

          <div className="text-black text-2xl font-semibold font-['Poppins'] mt-3 mb-2 text-left">
            Books
          </div>
          <div className="grid grid-cols-5 gap-7">
            {books.map((book) => (
              <div
                key={book.title}
                className={`flex flex-col items-center gap-2`}
                onClick={() => handleBookClick(book)}
              >
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className={`w-[140px] h-[166px] rounded ${
                    selectedBooks.includes(book)
                      ? "ring-4 ring-yellow rounded-lg"
                      : ""
                  }`}
                  onClick={() => handleBookClick(book)}
                />
                <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-tight mt-1 -mb-1 w-36">
                  {book.title}
                </div>
                <div className="text-center text-black text-sm font-normal font-['Lora']">
                  by {book.author}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2.5 cursor-pointer flex justify-end">
            <button className="text-blue flex items-center gap-1 text-lg font-medium font-['Poppins'] hover:text-red active:text-yellow">
              Show more
              <svg
                width="22"
                height="22"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_42_3302)">
                  <path
                    d="M2.8125 9H14.625M10.6875 13.5L15.1875 9L10.6875 4.5"
                    stroke="#0081A7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_42_3302">
                    <rect
                      width="18"
                      height="18"
                      fill="white"
                      transform="matrix(0 1 -1 0 18 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="text-black text-2xl flex flex-col items-start font-semibold font-['Poppins'] mt-1.5 mb-3 text-left">
            Authors
          </div>
          <div className="grid grid-cols-6 gap-8">
            {authors.map((author) => (
              <div
                key={author.name}
                className={`flex flex-col items-center gap-3`}
                onClick={() => handleAuthorClick(author)}
              >
                <img
                  src={author.authorImage}
                  alt={author.name}
                  className={`w-28 h-28 ${author.authorImage} rounded-full ${
                    selectedAuthors.includes(author)
                      ? "ring-4 ring-yellow rounded-full"
                      : ""
                  }`}
                  onClick={() => handleAuthorClick(author)}
                />
                <div className="w-28 text-center text-black text-base font-semibold font-['Poppins'] leading-tight">
                  {author.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full mt-2.5 cursor-pointer">
        <b className="text-blue flex items-center justify-end gap-1 text-lg font-medium font-['Poppins'] hover:text-red active:text-yellow mr-[540px]">
          Show more
          <svg
            width="22"
            height="22"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_42_3302)">
              <path
                d="M2.8125 9H14.625M10.6875 13.5L15.1875 9L10.6875 4.5"
                stroke="#0081A7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_42_3302">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="matrix(0 1 -1 0 18 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </b>
      </div>

      <div className="mt-6 flex flex-col justify-center items-center">
        {canProceed ? (
          <Link
            href="/interests"
            className="px-40 py-4 bg-blue rounded-full flex justify-center items-center hover:bg-red active:bg-red active:ring active:ring-yellow"
          >
            <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
              next
            </div>
          </Link>
        ) : (
          <div className="px-40 py-4 bg-blue rounded-full flex justify-center items-center cursor-not-allowed">
            <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
              next
            </div>
          </div>
        )}

        <div className="flex mt-9 justify-center w-full px-32">
          <div className="flex items-center justify-around gap-3">
            <div className="w-4 h-4 bg-beige rounded-full" />
            <div className="w-6 h-6 relative">
              <div className="w-4 h-4 bg-black rounded-full absolute left-[4px] top-[4px]" />
              <div className="w-6 h-6 rounded-full border-2 border-black absolute" />
            </div>
            <div className="w-4 h-4 bg-beige rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAuthorSelection;
