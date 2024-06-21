import { Link } from "wouter";
import { useState } from "react";

const recommendations = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: "/images/BraveNewWorldCover.webp",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "/images/ToKillaMockingbirdCover.jpeg",
  },
  {
    title: "1984",
    author: "George Orwell",
    coverImage: "/images/1984Cover.webp",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: "/images/PrejudiceCover.png",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    coverImage: "/images/TheCatcherInTheRyeCover.jpeg",
  },
  // {
  //     title: "Moby-Dick",
  //     author: "Herman Melville",
  //     coverImage: "/images/MobyDickCover.jpeg"
  // },
  // {
  //     title: "Huckleberry Finn",
  //     author:  "Mark Twain",
  //     coverImage: "/images/HuckleberryFinnCover.jpeg"
  // },
  // {
  //     title: "The Picture of Dorian Gray",
  //     author: "Oscar Wilde",
  //     coverImage: "/images/ThePictureofDorian GrayCover.jpeg"
  // },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Link
        to="/bookswipe"
        className="pt-3 flex items-center gap-1 ml-20 text-black text-xl font-medium  font-['Lora'] hover:text-red active:text-blue"
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

      <div className="-mt-8 text-center text-black text-4xl font-semibold font-['Poppins'] mb-6">
        Search for books
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-1.5 w-[900px]">
          <input
            id="search"
            className="w-[900px] h-14 rounded-xl border border-black px-4 text-base font-normal font-['Lora'] placeholder-black/50 bg-stone focus:bg-white focus:outline-none focus:border-blue focus:ring-1
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red invalid:text-red
              focus:invalid:border-red focus:invalid:ring-red"
            placeholder="Search for something..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-[528px] top-[182px] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0002 21.0002L16.6572 16.6572M16.6572 16.6572C17.4001 15.9143 17.9894 15.0324 18.3914 14.0618C18.7935 13.0911 19.0004 12.0508 19.0004 11.0002C19.0004 9.9496 18.7935 8.90929 18.3914 7.93866C17.9894 6.96803 17.4001 6.08609 16.6572 5.34321C15.9143 4.60032 15.0324 4.01103 14.0618 3.60898C13.0911 3.20693 12.0508 3 11.0002 3C9.9496 3 8.90929 3.20693 7.93866 3.60898C6.96803 4.01103 6.08609 4.60032 5.34321 5.34321C3.84288 6.84354 3 8.87842 3 11.0002C3 13.122 3.84288 15.1569 5.34321 16.6572C6.84354 18.1575 8.87842 19.0004 11.0002 19.0004C13.122 19.0004 15.1569 18.1575 16.6572 16.6572Z"
                stroke="#151515"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center justify-around w-[900px]">
            <div className="w-full flex items-start justify-start gap-6">
              <button className="text-blue text-xl font-medium font-['Poppins'] capitalize hover:text-red active:text-yellow">
                Book
              </button>
              <button className="text-blue text-xl font-medium font-['Poppins'] capitalize hover:text-red active:text-yellow">
                Authors
              </button>
              <button className="text-blue text-xl font-medium font-['Poppins'] capitalize hover:text-red active:text-yellow">
                Genres
              </button>
              <button className="text-blue text-xl font-medium font-['Poppins'] capitalize hover:text-red active:text-yellow">
                Categories
              </button>
            </div>
            <div className="flex items-end">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 11.9999H8.895M4.534 11.9999H2.75M4.534 11.9999C4.534 11.4217 4.76368 10.8672 5.17251 10.4584C5.58134 10.0496 6.13583 9.81989 6.714 9.81989C7.29217 9.81989 7.84666 10.0496 8.25549 10.4584C8.66432 10.8672 8.894 11.4217 8.894 11.9999C8.894 12.5781 8.66432 13.1326 8.25549 13.5414C7.84666 13.9502 7.29217 14.1799 6.714 14.1799C6.13583 14.1799 5.58134 13.9502 5.17251 13.5414C4.76368 13.1326 4.534 12.5781 4.534 11.9999ZM21.25 18.6069H15.502M15.502 18.6069C15.502 19.1852 15.2718 19.7403 14.8628 20.1492C14.4539 20.5582 13.8993 20.7879 13.321 20.7879C12.7428 20.7879 12.1883 20.5572 11.7795 20.1484C11.3707 19.7396 11.141 19.1851 11.141 18.6069M15.502 18.6069C15.502 18.0286 15.2718 17.4745 14.8628 17.0655C14.4539 16.6566 13.8993 16.4269 13.321 16.4269C12.7428 16.4269 12.1883 16.6566 11.7795 17.0654C11.3707 17.4742 11.141 18.0287 11.141 18.6069M11.141 18.6069H2.75M21.25 5.39289H18.145M13.784 5.39289H2.75M13.784 5.39289C13.784 4.81472 14.0137 4.26023 14.4225 3.8514C14.8313 3.44257 15.3858 3.21289 15.964 3.21289C16.2503 3.21289 16.5338 3.26928 16.7983 3.37883C17.0627 3.48839 17.3031 3.64897 17.5055 3.8514C17.7079 4.05383 17.8685 4.29415 17.9781 4.55864C18.0876 4.82313 18.144 5.10661 18.144 5.39289C18.144 5.67917 18.0876 5.96265 17.9781 6.22714C17.8685 6.49163 17.7079 6.73195 17.5055 6.93438C17.3031 7.13681 17.0627 7.29739 16.7983 7.40695C16.5338 7.5165 16.2503 7.57289 15.964 7.57289C15.3858 7.57289 14.8313 7.34321 14.4225 6.93438C14.0137 6.52555 13.784 5.97106 13.784 5.39289Z"
                  stroke="#151515"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start justify-center w-[900px]">
          <div className="flex flex-col gap-1">
            <div className="text-black text-2xl font-semibold font-['Poppins'] text-left">
              Recent Searches
            </div>
            <div className="text-black text-xl font-medium font-['Lora'] text-left">
              Dystopian Novels
            </div>
            <div className="text-black text-xl font-medium font-['Lora'] text-left">
              Isaac Asimov
            </div>
            <div className="text-black text-xl font-medium font-['Lora'] text-left">
              Mystery
            </div>
          </div>

          <div className="flex flex-col gap-3 items-start justify-center w-[900px]">
            <div className="text-black text-2xl font-semibold font-['Poppins'] text-left mt-2">
              Popular Searches
            </div>
            <div className="grid grid-cols-4 gap-3">
              <button className="px-4 p-2 rounded-xl border border-beige justify-center items-center flex hover:bg-beige active:bg-yellow">
                <div className="text-black text-lg font-medium font-['Poppins']">
                  Best Sellers{" "}
                </div>
              </button>
              <button className="px-4 p-2 rounded-xl border border-beige justify-center items-center flex hover:bg-beige active:bg-yellow">
                <div className="text-black text-lg font-medium font-['Poppins']">
                  New Releases
                </div>
              </button>
              <button className="px-4 p-2 rounded-xl border border-beige justify-center items-center flex hover:bg-beige active:bg-yellow">
                <div className="text-black text-lg font-medium font-['Poppins']">
                  Award Winners
                </div>
              </button>
              <button className="px-4 p-2 rounded-xl border border-beige justify-center items-center flex hover:bg-beige active:bg-yellow">
                <div className="text-black text-lg font-medium font-['Poppins']">
                  Classic Fiction
                </div>
              </button>
              <button className="px-4 p-2 rounded-xl border border-beige justify-center items-center flex hover:bg-beige active:bg-yellow">
                <div className="text-black text-lg font-medium font-['Poppins']">
                  Adventure
                </div>
              </button>
              <button className="px-4 p-2 rounded-xl border border-beige justify-center items-center flex hover:bg-beige active:bg-yellow">
                <div className="text-black text-lg font-medium font-['Poppins']">
                  Romance
                </div>
              </button>

              <button className="text-blue text-xl font-medium font-['Poppins'] hover:text-red active:text-yellow">
                More
              </button>
            </div>
          </div>

          <div className="text-black text-left text-2xl font-semibold font-['Poppins'] capitalize mt-10 -mb-1">
            {" "}
            Recommendations for You
          </div>

          <div className="w-[900px]">
            <div className="flex gap-11">
              {recommendations.map((recommendation) => (
                <Link
                  key={recommendation.title}
                  to={`/bookinfo/${recommendation.title}`}
                >
                  <div className="flex flex-col items-right justify-start gap-2">
                    <img
                      src={recommendation.coverImage}
                      className="w-[145px] h-[166px] rounded"
                    ></img>
                    <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-tight mt-1 -mb-1 w-[145px]  hover:text-red active:text-yellow">
                      &quot;{recommendation.title}&quot;
                    </div>
                    <div className="text-center text-black text-sm font-normal font-['Lora'] w-[145px]">
                      by {recommendation.author}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-2 cursor-pointer flex justify-end w-[900px] mb-14">
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
        </div>
      </div>
    </>
  );
};

export default Search;
