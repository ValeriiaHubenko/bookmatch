import { Link } from 'wouter';

const HeaderQuiz = () => {
  return (
    <>
    <div className="w-full h-24 bg-stone flex items-center justify-between px-20 relative">
      <div className="flex items-center">
      <Link href="/firstscreen" className="left-[80px] top-[12px] absolute">
          <img className="w-[108px] h-[52px]" src="src/images/logo-book.png" alt="BookMatch Logo" />
          <div className="text-center text-black text-lg font-semibold font-['Poppins']">BookMatch</div>
          </Link>
        </div>

      <div className="flex items-center gap-10">
        <div className="flex items-center gap-8">
        <Link href="/how-it-works" className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">How it works</Link>
        <Link href="/pricing" className="text-black text-xl font-semibold font-['Poppins'] hover:text-red active:text-blue">Pricing</Link>
        </div>

        <div className="flex flex-row items-center justify-center gap-3">
        <div>
        <svg width="48" height="48" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7936 16.4944C20.2733 15.5981 19.4999 13.0622 19.4999 9.75C19.4999 7.76088 18.7097 5.85322 17.3032 4.4467C15.8967 3.04018 13.989 2.25 11.9999 2.25C10.0108 2.25 8.10311 3.04018 6.69659 4.4467C5.29007 5.85322 4.49989 7.76088 4.49989 9.75C4.49989 13.0631 3.72551 15.5981 3.2052 16.4944C3.07233 16.7222 3.00189 16.9811 3.00099 17.2449C3.00008 17.5086 3.06874 17.768 3.20005 17.9967C3.33135 18.2255 3.52065 18.4156 3.74886 18.5478C3.97708 18.6801 4.23613 18.7498 4.49989 18.75H8.32583C8.49886 19.5967 8.95904 20.3577 9.62851 20.9042C10.298 21.4507 11.1357 21.7492 11.9999 21.7492C12.8641 21.7492 13.7018 21.4507 14.3713 20.9042C15.0407 20.3577 15.5009 19.5967 15.674 18.75H19.4999C19.7636 18.7496 20.0225 18.6798 20.2506 18.5475C20.4787 18.4151 20.6678 18.225 20.799 17.9963C20.9302 17.7676 20.9988 17.5083 20.9979 17.2446C20.9969 16.9809 20.9265 16.7222 20.7936 16.4944ZM11.9999 20.25C11.5347 20.2499 11.081 20.1055 10.7013 19.8369C10.3215 19.5683 10.0343 19.1886 9.87926 18.75H14.1205C13.9655 19.1886 13.6783 19.5683 13.2985 19.8369C12.9187 20.1055 12.4651 20.2499 11.9999 20.25ZM4.49989 17.25C5.22176 16.0087 5.99989 13.1325 5.99989 9.75C5.99989 8.1587 6.63203 6.63258 7.75725 5.50736C8.88247 4.38214 10.4086 3.75 11.9999 3.75C13.5912 3.75 15.1173 4.38214 16.2425 5.50736C17.3677 6.63258 17.9999 8.1587 17.9999 9.75C17.9999 13.1297 18.7761 16.0059 19.4999 17.25H4.49989Z" fill="#151515"/>
            
            <circle cx="17.7992" cy="4.8002" r="3.6" fill="#E13244"/>
        </svg>
        </div>
        <Link href="/profile">
        <img className="w-10 h-10 border-2 border-yellow hover:border-red active:border-blue rounded-full" src="src/images/Avatar.png" alt="Avatar" />
        </Link>
        </div>
        </div>
        </div>
    </>
  );
};

export default HeaderQuiz;
