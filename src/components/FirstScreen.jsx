import { Link } from "wouter";

const FirstScreen = () => {
  return (
    <>
      <div className="bg-stone">
        <div className="flex justify-center">
          <img
            className="absolute top-[50px] w-56 h-64"
            src="/images/Books-Illustration.png"
            alt="Placeholder"
          />
        </div>

        <div className="flex flex-col items-center gap-10 absolute top-[315px] left-0 right-0">
          <div className="text-center text-black text-4xl font-medium font-['Lora']">
            Discover your next favorite book
          </div>
          <div className="text-center text-red text-9xl font-semibold font-['Poppins']">
            Swipe. Read. Enjoy.
          </div>
          <div className="relative w-[560px] h-20">
            <div className="absolute top-0 left-0 text-center text-black text-3xl font-medium font-['Lora'] leading-10">
              <span className="font-semibold font-['Poppins'] ">
                BookMatch{" "}
              </span>
              helps you find the best books based on your interests
            </div>
          </div>
          <div className="mt-5">
            <Link
              href="/signup"
              className="px-24 py-4 bg-blue rounded-full flex justify-center items-center gap-2.5  hover:bg-red active:bg-red active:ring active:ring-yellow"
            >
              <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
                Get started
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstScreen;
