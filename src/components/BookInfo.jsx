import { Link, useRoute } from "wouter";
import {books} from "../data/books.js";


const reviews = [
  {
    name: "John Doe",
    rating: 3,
    review:
      "An absolute masterpiece that captures the essence of the American dream gone away.",
  },
  {
    name: "John Smith",
    rating: 4,
    review:
      "Beautifully written, though the ending left me wanting more closure.",
  },
  {
    name: "Anonymous",
    rating: 3,
    review: "It was okay. I didn't love it, but I didn't hate it either.",
  },
];

const related = [
  {
    coverImage: "/images/1984Cover.webp",
    title: "1984",
    author: "George Orwell",
  },
  {
    coverImage: "/images/ToKillaMockingbirdCover.jpeg",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    coverImage: "/images/HarryPotter.jpeg",
    title: "Harry Potter",
    author: "J.K. Rowling",
  },
];


const BookInfo = () => {

  const [match, params] = useRoute("/bookinfo/:id");

if (!match) return (<div>Loading...</div> ) 

  const {id: bookId} = params;
  const bookData = books[bookId]; 

  return (
    <>
      <Link
        to="/library"
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

      <div className="-mt-8 text-center text-black text-4xl font-semibold font-['Poppins'] mb-7">
        Book
      </div>

      <div className="mb-16">
          <div>
            <div className="flex flex-row gap-24 mt-10">
              <div className="justify-start items-start flex flex-col ml-96">
                <img
                  src={bookData.coverImage}
                  className="w-[540px] h-[580px] rounded-2xl"
                />
                <div className="top-[742px] absolute left-[594px] px-4 py-2 bg-white rounded-xl border-2 border-yellow">
                  <div className="text-center text-black text-lg font-medium font-['Poppins']">
                    Match {bookData.match}%
                  </div>
                </div>

                <div className="text-black text-2xl font-semibold font-['Poppins'] capitalize mt-28 mb-3">
                  Related Books
                </div>

                <div className="grid grid-cols-3 gap-8 justify-center items-start">
                  {related.map((related, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 justify-center items-center"
                    >
                      <img
                        src={related.coverImage}
                        className="w-[145px] h-[175px] rounded"
                      ></img>
                      <div className="text-center text-black text-base font-semibold font-['Poppins'] leading-tight mt-1 -mb-2 w-[145px] hover:text-red active:text-yellow">
                        &quot;{related.title}&quot;
                      </div>
                      <div className="text-center text-black text-sm font-normal font-['Lora'] w-[145px]">
                        by {related.author}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start justify-start gap-5 mt-10">
                <div className="flex flex-col gap-2 items-start justify-start">
                  <div className="text-center text-red text-4xl font-semibold font-['Poppins']">
                    {bookData.title}
                  </div>
                  <div className="text-center text-black text-3xl font-medium font-['Lora']">
                    by {bookData.author}
                  </div>
                </div>

                <div className="justify-start items-start flex">
                  <div className="grid grid-cols-3 gap-2.5 justify-center items-center mt-1 mb-1">
                    {bookData.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="py-1.5 px-2.5 rounded-xl border border-beige"
                      >
                        <div className="text-center text-black text-base font-regular font-['Poppins']">
                          {tag}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-start items-start">
                  <div className="text-center text-black text-xl font-semibold font-['Poppins']">
                    Where to Buy:{" "}
                  </div>
                  <div className="flex flex-row gap-9">
                    {bookData.purchase.map((purchase, i) => (
                      <div key={i}>
                        <button className="text-center text-blue text-xl font-semibold font-['Poppins'] underline hover:text-red active:text-yellow">
                          {" "}
                          {purchase}{" "}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-start items-start w-[545px]">
                  <div className="text-center text-black text-xl font-semibold font-['Poppins']">
                    Synopsis:{" "}
                  </div>
                  <div className="text-left text-black text-lg font-medium font-['Lora']">
                    {" "}
                    {bookData.synopsis}{" "}
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-start items-start">
                  <div className="text-center text-black text-xl font-semibold font-['Poppins']">
                    Published:{" "}
                  </div>
                  <div className="text-center text-black text-lg font-medium font-['Lora']">
                    {" "}
                    {bookData.published}{" "}
                  </div>
                </div>

                <div className="flex flex-row gap-12">
                  <div className="text-xl font-semibold text-black font-['Poppins'] text-left mt-1">
                    Page Count:
                    <span className=" text-black text-lg font-normal font-['Lora'] leading-snug text-left mb-2 pl-1">
                      {" "}
                      {bookData.pages}
                    </span>
                  </div>
                  <div className="text-xl font-semibold text-black font-['Poppins'] text-left mt-1">
                    Language:
                    <span className=" text-black text-lg font-normal font-['Lora'] leading-snug text-left mb-2 pl-1">
                      {" "}
                      {bookData.language}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-start items-start w-[545px]">
                  <div className="text-left text-black text-xl font-semibold font-['Poppins']">
                    Author:{" "}
                  </div>
                  <div className="text-left text-black text-lg font-medium font-['Lora']">
                    {" "}
                    {bookData.authorDescription}{" "}
                  </div>
                </div>

                <div className="flex flex-col gap-2 justify-start items-start">
                  <div className="text-center text-black text-xl font-semibold font-['Poppins']">
                    User Reviews:{" "}
                  </div>
                  <div className="justify-start items-center gap-4 inline-flex">
                    <div className="justify-center items-center gap-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5461 2.9842C11.7248 2.59678 12.2754 2.59677 12.4541 2.98417L15.1041 8.728L21.3856 9.47328C21.8093 9.52355 21.9795 10.0473 21.6662 10.3369L17.0221 14.631L18.2549 20.8359C18.338 21.2543 17.8926 21.578 17.5202 21.3696L12.0001 18.28L6.48001 21.3704C6.1077 21.5789 5.66219 21.2552 5.74534 20.8367L6.97809 14.632L2.33365 10.3359C2.02047 10.0462 2.19062 9.52259 2.61427 9.47233L8.89709 8.727L11.5461 2.9842Z"
                            stroke={i < bookData.rating ? "#FFC107" : "#DED2CE"}
                            fill={i < bookData.rating ? "#FFC107" : "#FFFFFF"}
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ))}
                    </div>

                    <div className="text-black text-base font-medium font-['Poppins']">
                      ({bookData.reviews} reviews)
                    </div>
                  </div>

                  <div className="flex flex-row justify-start gap-6 items-start mt-2">
                    {reviews.map((review, index) => (
                      <div key={index}>
                        <div className="text-black text-base font-medium font-['Poppins'] mb-1">
                          {review.name}
                        </div>
                        <div className="flex flex-row gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5461 2.9842C11.7248 2.59678 12.2754 2.59677 12.4541 2.98417L15.1041 8.728L21.3856 9.47328C21.8093 9.52355 21.9795 10.0473 21.6662 10.3369L17.0221 14.631L18.2549 20.8359C18.338 21.2543 17.8926 21.578 17.5202 21.3696L12.0001 18.28L6.48001 21.3704C6.1077 21.5789 5.66219 21.2552 5.74534 20.8367L6.97809 14.632L2.33365 10.3359C2.02047 10.0462 2.19062 9.52259 2.61427 9.47233L8.89709 8.727L11.5461 2.9842Z"
                                stroke={
                                  i < review.rating ? "#FFC107" : "#DED2CE"
                                }
                                fill={i < review.rating ? "#FFC107" : "#FFFFFF"}
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ))}
                        </div>
                        <div className="text-black text-sm font-normal font-['Lora'] w-[196px] mt-2">
                          {review.review}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="cursor-pointer flex items-end justify-end w-full -mt-1">
                    <button className="text-blue flex items-center gap-1 text-lg font-medium font-['Poppins'] hover:text-red">
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

                <button className="flex justify-start items-center gap-2 mt-1">
                  <div className="text-xl text-blue font-semibold font-['Poppins'] hover:text-red">
                    {" "}
                    Share this book{" "}
                  </div>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 23 23"
                    fill="none"
                    className="-mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 9.75032V20.2503C5.5 20.3883 5.612 20.5003 5.75 20.5003H18.25C18.3163 20.5003 18.3799 20.474 18.4268 20.4271C18.4737 20.3802 18.5 20.3166 18.5 20.2503V9.75032C18.5 9.68401 18.4737 9.62042 18.4268 9.57354C18.3799 9.52666 18.3163 9.50032 18.25 9.50032H15.75C15.5511 9.50032 15.3603 9.4213 15.2197 9.28065C15.079 9.13999 15 8.94923 15 8.75032C15 8.5514 15.079 8.36064 15.2197 8.21999C15.3603 8.07933 15.5511 8.00032 15.75 8.00032H18.25C19.216 8.00032 20 8.78432 20 9.75032V20.2503C20 20.7144 19.8156 21.1596 19.4874 21.4878C19.1592 21.8159 18.7141 22.0003 18.25 22.0003H5.75C5.28587 22.0003 4.84075 21.8159 4.51256 21.4878C4.18437 21.1596 4 20.7144 4 20.2503V9.75032C4 8.78432 4.784 8.00032 5.75 8.00032H8.25C8.44891 8.00032 8.63968 8.07933 8.78033 8.21999C8.92098 8.36064 9 8.5514 9 8.75032C9 8.94923 8.92098 9.13999 8.78033 9.28065C8.63968 9.4213 8.44891 9.50032 8.25 9.50032H5.75C5.6837 9.50032 5.62011 9.52666 5.57322 9.57354C5.52634 9.62042 5.5 9.68401 5.5 9.75032ZM12.53 1.22032L15.78 4.47032C15.8787 4.56199 15.9509 4.67859 15.9889 4.80784C16.0269 4.93709 16.0294 5.0742 15.996 5.20472C15.9626 5.33525 15.8947 5.45435 15.7993 5.54949C15.7039 5.64463 15.5846 5.71228 15.454 5.74532C15.3236 5.77862 15.1867 5.77624 15.0575 5.73841C14.9284 5.70058 14.8118 5.62871 14.72 5.53032L12.75 3.56032V14.2503C12.75 14.4492 12.671 14.64 12.5303 14.7806C12.3897 14.9213 12.1989 15.0003 12 15.0003C11.8011 15.0003 11.6103 14.9213 11.4697 14.7806C11.329 14.64 11.25 14.4492 11.25 14.2503V3.56032L9.28 5.53032C9.13785 5.66296 8.94975 5.73522 8.75536 5.73186C8.56097 5.7285 8.37548 5.64979 8.238 5.51232C8.10053 5.37484 8.02181 5.18935 8.01846 4.99495C8.0151 4.80056 8.08736 4.61246 8.22 4.47032L11.47 1.22032C11.6106 1.07987 11.8012 1.00098 12 1.00098C12.1988 1.00098 12.3894 1.07987 12.53 1.22032Z"
                      fill="#0081A7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default BookInfo;
