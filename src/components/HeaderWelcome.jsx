import { Link } from "wouter";

const HeaderWelcome = () => {
  return (
    <>
      <div className="w-full h-24 bg-stone flex items-center justify-between px-20 relative">
        <div className="flex items-center">
          <Link href="/firstscreen" className="left-[80px] top-[12px] absolute">
            <img
              className="w-[108px] h-[52px]"
              src="/images/logo-book.png"
              alt="BookMatch Logo"
            />
            <div className="text-center text-black text-lg font-semibold font-['Poppins']">
              BookMatch
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-12 mt-1">
          <div className="flex items-center gap-8">
            <button className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">
              How it works
            </button>
            <button className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">
              Pricing
            </button>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="text-blue text-xl font-semibold font-['Poppins'] hover:text-red active:text-red"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-blue text-stone text-lg font-medium tracking-wide font-['Poppins'] px-7 py-2.5 rounded-3xl hover:bg-red active:bg-red active:ring active:ring-yellow "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWelcome;
