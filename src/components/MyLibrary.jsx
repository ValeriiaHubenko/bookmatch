import { Link } from "wouter";
import { useState } from "react";
 

const MyLibrary = () => {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      coverImage: "/images/GatsbyCover.webp",
      id: "the-title-gatsby",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      coverImage: "/images/ToKillaMockingbirdCover.jpeg",
      id: "the-title-mockingbird",
    },
    {
      title: "1984",
      author: "George Orwell",
      coverImage: "/images/1984Cover.webp",
      id: "the-title-1984",
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      coverImage: "/images/PrejudiceCover.png",
      id: "the-title-pride",
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      coverImage: "/images/WarandPeaceCover.png",
      id: "the-title-war",
    },
    {
      title: "The Huckleberry Finn",
      author: "Mark Twain",
      coverImage: "/images/HuckleberryFinnCover.jpeg",
      id: "the-title-huckleberry",
    },
    {
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      coverImage: "/images/TotheLighthouseCover.png",
      id: "the-title-lighthouse",
      
    },
    {
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      coverImage: "/images/ThePictureofDorian GrayCover.jpeg",
      id: "the-title-dorian",
    },
    {
      title: "The Odyssey",
      author: "Homer",
      coverImage: "/images/The OdysseyCover.jpeg",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      coverImage: "/images/TheLordOftheRingsCover.jpeg",
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      coverImage: "/images/CrimeandPunishmentCover.jpeg",
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      coverImage: "/images/MobyDickCover.jpeg",
    },
    {
      title: "Jane Eyre",
      author: "Charlotte Brontë",
      coverImage: "/images/JaneEyreCover.jpeg",
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      coverImage: "/images/TheBrothersKaramazovCover.webp",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      coverImage: "/images/TheHobbitCover.jpeg",
    },
    {
      title: "Don Quixote",
      author: "Miguel de Cervantes",
      coverImage: "/images/Don QuixoteCover.jpeg",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      coverImage: "/images/TheCatcherInTheRyeCover.jpeg",
    },
    {
      title: "Catch-22",
      author: "Joseph Heller",
      coverImage: "/images/Catch22Cover.jpeg",
    },
  ];

  const recommendations = [
    {
      coverImage: "/images/TheScarletLetterCover.jpeg",
      match: 98,
      title: "The Scarlet Letter",
      author: "Nathaniel Hawthorne",
      tags: ["Fiction", "Historical"],
      reviews: 1234,
      description:
        "A historical fiction novel set in 17th-century Puritan Boston. The story follows Hester Pryn as she navigates the consequences of her adultery and the judgment of her community. Themes of sin, guilt, and redemption are explored...",
    },
    {
      coverImage: "/images/HarryPotter.jpeg",
      match: 92,
      title: "Harry Potter",
      author: "J.K. Rowling",
      tags: ["Fantasy", "Fiction"],
      reviews: 2567,
      description:
        "A captivating fantasy series that follows the life of a young wizard, Harry Potter, as he attends Hogwarts School of Witchcraft and Wizardry. The series explores themes of friendship, courage, and the battle between good and evil...",
    },
    {
      coverImage: "/images/TheAlchemistCover.jpeg",
      match: 85,
      title: "The Alchemist",
      author: "Paulo Coelho",
      tags: ["Fiction", "Philosophy"],
      reviews: 890,
      description:
        "A philosophical fiction novel about a young shepherd's journey to find his personal legend. This enchanting tale explores themes of destiny, self-discovery, and the pursuit of one's dreams...",
    },
  ];

  const mores = [
    {
      title: "The Chronicles of Narnia",
      author: "C.S. Lewis",
      coverImage: "/images/TheChroniclesofNarniaCover.webp",
    },
    {
      title: "The Hunger Games",
      author: "Suzanne Collins",
      coverImage: "/images/TheHungerGamesCover.jpeg",
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      coverImage: "/images/DaVinciCodeCover.webp",
    },
    {
      title: "The Dragon Tattoo",
      author: "Stieg Larsson",
      coverImage: "/images/TheDragonTattooCover.jpeg",
    },
    {
      title: "The Fault in Our Stars",
      author: "John Green",
      coverImage: "/images/ TheFaultinOurStarsCover.jpeg",
    },
    {
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      coverImage: "/images/TheNameOftheWindCover.jpeg",
    },
    {
      title: "Mistborn",
      author: "Brandon Sanderson",
      coverImage: "/images/MistbornCover.jpeg",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      coverImage: "/images/TheLordOftheRingsCover.jpeg",
    },
  ];

  const [displayedBooks, setDisplayedBooks] = useState(14);
  const [showAllButtonLabel, setShowAllButtonLabel] = useState("Show All");

  const handleShowAllBooks = () => {
    if (displayedBooks === books.length) {
      setDisplayedBooks(14);
      setShowAllButtonLabel("Show All");
    } else {
      setDisplayedBooks(books.length);
      setShowAllButtonLabel("Hide All");
    }
  };

  return (
    <>
      <Link
        to="/bookswipe"
        className="pt-3 flex items-center gap-1 ml-20 text-black text-xl font-medium font-['Poppins'] hover:text-red active:text-blue"
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

      <div className="-mt-8 text-center text-black text-4xl font-semibold font-['Poppins'] mb-7">
        My Library
      </div>

      <div className="mx-[230px]">
        <div className="mb-4 justify-start items-center gap-4 inline-flex">
          <div className="text-black text-2xl font-semibold font-['Poppins']">
            To Read
          </div>
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4" cy="4" r="4" fill="#868484" />
          </svg>
          <div className="text-black opacity-50 text-2xl font-medium font-['Poppins']">
            {books.length} books
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4">
          {books.slice(0, displayedBooks).map((book, index) => (
            <Link key={index} to={`/bookinfo/${book.id}`}>
              <div className="w-[165px] flex-col justify-center items-center gap-3 flex mb-1">
                <img
                  src={book.coverImage}
                  className="w-[165px] h-[190px] rounded"
                />
                <div className="flex-col justify-center items-center flex">
                  <div className="text-center text-black text-base mb-o.5 font-semibold font-['Poppins'] leading-tight hover:text-red active:text-yellow">
                    {" "}
                    &quot;{book.title}&quot;
                  </div>
                  <div className="text-center text-black text-sm font-normal font-['Lora']">
                    by {book.author}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          className="w-full mt-4 flex justify-center items-center text-center text-blue hover:text-red active:text-red text-2xl font-medium font-['Poppins'] capitalize"
          onClick={handleShowAllBooks}
        >
          {showAllButtonLabel}
        </button>
      </div>

      <div className="mx-[230px] mb-20">
        <div className="text-black text-left text-3xl font-semibold font-['Poppins'] capitalize mt-9">
          Recommended for You
        </div>
        <div className="tex</Link>t-black text-opacity-50 text-xl mt-1 font-medium font-['Lora']">
          Based on your reading preferences
        </div>

        <div className="justify-center items-center grid grid-cols-3 mt-5 gap-20">
          {recommendations.map((recommendation, index) => (
            <Link key={index} to={`/bookinfo/:id ${recommendation.title}`}>
              <div className="flex-col justify-start items-start gap-2.5 flex relative">
                <div className="flex flex-row gap-6 items-center">
                  <div className="justify-center items-center flex">
                    <img
                      src={recommendation.coverImage}
                      className="w-[165px] h-[200px] rounded"
                    />
                    <div className="px-2 py-1 absolute top-[184px] text-center bg-stone rounded-lg border-2 border-yellow">
                      <div className="text-center text-black text-sm font-medium font-['Poppins']">
                        Match {recommendation.match}%
                      </div>
                    </div>
                  </div>

                  <div className="flex-col justify-center items-start flex">
                    <div className="w-[165px] text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-yellow">
                      &quot;{recommendation.title}&quot;
                    </div>
                    <div className="text-black text-base font-medium font-['Lora']">
                      by {recommendation.author}
                    </div>

                    <div className="w-[240px] justify-start items-center gap-2 flex mb-2">
                      {recommendation.tags.map((tag, i) => (
                        <div
                          key={i}
                          className="p-1 px-2 rounded-lg border border-beige justify-center items-center gap-2.5 flex mt-2"
                        >
                          <div className="text-center text-black text-xs font-medium font-['Poppins']">
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="justify-start items-center gap-2 flex mt-1">
                      <div className="justify-center items-center gap-0.5 flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.5461 2.9842C11.7248 2.59678 12.2754 2.59677 12.4541 2.98417L15.1041 8.728L21.3856 9.47328C21.8093 9.52355 21.9795 10.0473 21.6662 10.3369L17.0221 14.631L18.2549 20.8359C18.338 21.2543 17.8926 21.578 17.5202 21.3696L12.0001 18.28L6.48001 21.3704C6.1077 21.5789 5.66219 21.2552 5.74534 20.8367L6.97809 14.632L2.33365 10.3359C2.02047 10.0462 2.19062 9.52259 2.61427 9.47233L8.89709 8.727L11.5461 2.9842Z"
                              stroke="#FFC107"
                              fill="#FFC107"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ))}
                      </div>
                      <div className="text-black text-sm font-regular font-['Poppins']">
                        ({recommendation.reviews} reviews)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[425px] text-black text-base font-normal font-['Lora'] leading-snug mt-4">
                  {recommendation.description}
                </div>
              </div>

              <div className="justify-start items-center gap-8 flex mt-3">
                <button className="w-16 h-16 bg-blue rounded-full flex items-center justify-center hover:bg-yellow active:bg-yellow">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 30"
                    fill="none"
                    className="w-10 h-10 relative mt-2 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20L4 4M20 4L4 20"
                      stroke="#F7F4F3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                <button className="w-10 h-10 bg-beige rounded-full flex items-center justify-center hover:bg-yellow active:bg-yellow">
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 24 31"
                    fill="none"
                    className="w-8 h-8 relative cursor-pointer mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4284 5.67699C10.4284 6.48056 11.0712 7.12342 11.8748 7.12342C12.6882 7.12342 13.3212 6.48056 13.3114 5.67699C13.3114 4.86356 12.6882 4.2207 11.8748 4.2207C11.0712 4.2207 10.4284 4.86356 10.4284 5.67699ZM7.9375 18.9563C7.9375 19.4483 8.28893 19.7796 8.82121 19.7796H15.1795C15.7118 19.7796 16.0636 19.4483 16.0636 18.9558C16.0636 18.4741 15.7122 18.1424 15.1795 18.1424H13.1605V10.4783C13.1605 9.93613 12.8091 9.57399 12.2866 9.57399H9.10236C8.58036 9.57399 8.2285 9.89542 8.2285 10.378C8.2285 10.8803 8.57993 11.2116 9.10279 11.2116H11.3022V18.1424H8.82121C8.28893 18.1424 7.9375 18.4741 7.9375 18.9563Z"
                      fill="#151515"
                    />
                  </svg>
                </button>

                <button className="w-16 h-16 bg-red rounded-full flex items-center justify-center hover:bg-yellow active:bg-yellow">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 21 27"
                    fill="none"
                    className="w-12 h-10 mt-3 relative cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_42_3060)">
                      <path
                        d="M16 0C13.9 0 12.074 0.999765 11 2.67519C9.926 0.999765 8.1 0 6 0C4.40927 0.00195584 2.88422 0.669947 1.75941 1.85744C0.634589 3.04493 0.00185261 4.65495 0 6.33431C0 9.41701 1.82 12.6253 5.41 15.8685C7.05506 17.3484 8.83202 18.6565 10.716 19.7747C10.8033 19.8242 10.9009 19.8501 11 19.8501C11.0991 19.8501 11.1967 19.8242 11.284 19.7747C13.168 18.6565 14.9449 17.3484 16.59 15.8685C20.18 12.6253 22 9.41701 22 6.33431C21.9981 4.65495 21.3654 3.04493 20.2406 1.85744C19.1158 0.669947 17.5907 0.00195584 16 0ZM11 18.4867C9.359 17.4869 1.2 12.2168 1.2 6.33431C1.20132 4.99077 1.70746 3.70266 2.60735 2.75263C3.50724 1.8026 4.72737 1.26826 6 1.26686C8.028 1.26686 9.731 2.4102 10.445 4.25138C10.4902 4.36756 10.5671 4.46692 10.6659 4.53686C10.7647 4.60679 10.881 4.64413 11 4.64413C11.119 4.64413 11.2353 4.60679 11.3341 4.53686C11.4329 4.46692 11.5098 4.36756 11.555 4.25138C12.269 2.4102 13.972 1.26686 16 1.26686C17.2726 1.26826 18.4928 1.8026 19.3927 2.75263C20.2925 3.70266 20.7987 4.99077 20.8 6.33431C20.8 12.2168 12.641 17.4869 11 18.4867Z"
                        fill="#F7F4F3"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_3060">
                        <rect width="74" height="72" fill="#DED2CE" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-black text-left text-2xl font-semibold font-['Poppins'] capitalize mt-12">
          More Recommendations for You
        </div>

        <div className="grid grid-cols-8 gap-10 mt-4">
          {mores.map((more) => (
            <Link key={more.title} to={`/bookinfo/${more.title}`}>
              <div className={`flex flex-col items-right justify-start gap-2`}>
                <img
                  src={more.coverImage}
                  className="w-[145px] h-[170px] rounded"
                ></img>
                <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-tight mt-1 -mb-1 w-[145px]  hover:text-red active:text-yellow">
                  &quot;{more.title}&quot;
                </div>
                <div className="text-center text-black text-sm font-normal font-['Lora'] w-[145px]">
                  by {more.author}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-2 cursor-pointer flex justify-end">
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
    </>
  );
};

export default MyLibrary;
