import { Link } from "wouter";

const avatars = [
  {
    img: "/images/Avatar.png",
    name: "John Doe",
  },
];

const Profile = () => {
  return (
    <>
      <Link
        to="/bookswipe"
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

      <div className="-mt-8 text-center text-black text-4xl font-semibold font-['Poppins'] mb-6">
        My Profile
      </div>

      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="flex flex-col gap-1.5 items-center justify-center"
        >
          <img
            className="w-24 h-24 border-2 border-yellow rounded-full"
            src={avatar.img}
            alt="Avatar"
          />
          <div className="text-black text-xl font-medium font-['Poppins']">
            {avatar.name}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-2 items-center justify-center mt-3 mb-12">
        <button className="flex items-center justify-center gap-2 mb-2">
          <div className="text-blue text-xl font-medium capitalize font-['Poppins'] text-center hover:text-red active:text-yellow">
            Edit Profile
          </div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.475 5.40783L18.592 7.52483M17.836 3.54283L12.109 9.26983C11.8131 9.56533 11.6113 9.94181 11.529 10.3518L11 12.9998L13.648 12.4698C14.058 12.3878 14.434 12.1868 14.73 11.8908L20.457 6.16383C20.6291 5.99173 20.7656 5.78742 20.8588 5.56256C20.9519 5.33771 20.9998 5.09671 20.9998 4.85333C20.9998 4.60994 20.9519 4.36895 20.8588 4.14409C20.7656 3.91923 20.6291 3.71492 20.457 3.54283C20.2849 3.37073 20.0806 3.23421 19.8557 3.14108C19.6309 3.04794 19.3899 3 19.1465 3C18.9031 3 18.6621 3.04794 18.4373 3.14108C18.2124 3.23421 18.0081 3.37073 17.836 3.54283Z"
              stroke="#0081A7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H9"
              stroke="#0081A7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex flex-row items-center justify-start gap-3">
          <div className="text-black text-lg font-semibold font-['Poppins']">
            Email:
          </div>
          <div className="text-black text-lg font-medium font-['Lora']">
            johndoe@example.com
          </div>
        </div>

        <div className="flex flex-row items-center justify-start gap-2">
          <div className="text-black text-lg font-semibold font-['Poppins']">
            Membership:
          </div>
          <div className="text-black text-lg font-medium font-['Lora']">
            Premium Member
          </div>
        </div>
      </div>

      <div className="flex flex-cols-3 justify-center items-start gap-44">
        <div className="flex flex-col justify-start gap-14">
          <div className="flex flex-row justify-start gap-20">
            <div className="flex flex-col gap-1 items-start justify-start">
              <div className="text-black text-xl font-semibold font-['Poppins'] capitalize">
                Favorite Genres
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#E13244" />
                </svg>
                <div className="text-black text-lg font-medium font-['Lora']">
                  Science Fiction
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#E13244" />
                </svg>
                <div className="text-black text-lg font-medium font-['Lora']">
                  Mystery
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#E13244" />
                </svg>
                <div className="text-black text-lg font-medium font-['Lora']">
                  Historical Fiction
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 items-start justify-start">
              <div className="text-black text-xl font-semibold font-['Poppins'] capitalize">
                Preferred Authors
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#E13244" />
                </svg>
                <div className="text-black text-lg font-medium font-['Lora']">
                  Isaac Asimov
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#E13244" />
                </svg>
                <div className="text-black text-lg font-medium font-['Lora']">
                  Agatha Christie
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#E13244" />
                </svg>
                <div className="text-black text-lg font-medium font-['Lora']">
                  Ken Follett
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <div className="text-black text-xl font-semibold font-['Poppins'] capitalize">
              Activity
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="text-black text-lg font-medium font-['Poppins']">
                Books Read:
              </div>
              <div className="text-black text-lg font-medium font-['Lora']">
                50
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="text-black text-lg font-medium font-['Poppins']">
                Books in Library:
              </div>
              <div className="text-black text-lg font-medium font-['Lora']">
                60
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="text-black text-lg font-medium font-['Poppins']">
                Reviews Written:{" "}
              </div>
              <div className="text-black text-lg font-medium font-['Lora']">
                10
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center">
              <div className="text-black text-lg font-medium font-['Poppins']">
                Reading Streak:
              </div>
              <div className="text-black text-lg font-medium font-['Lora']">
                15
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start gap-14">
          <div className="flex flex-cols-2 justify-start">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-col gap-2 items-start justify-start">
                <div className="text-black text-xl font-semibold font-['Poppins']">
                  Currently Reading
                </div>

                <div className="flex flex-row gap-10 justify-center items-start">
                  <div className="flex flex-col gap-1 items-start justify-start">
                    <div className="text-black text-base font-semibold font-['Poppins'] -mb-1">
                      &quot;1984&quot;
                    </div>
                    <div className="text-black text-sm font-medium font-['Lora']">
                      by George Orwell
                    </div>
                    <div className="flex">
                      <div className="w-44 h-3 bg-beige rounded-md relative"></div>
                      <div className="w-32 h-3 bg-yellow rounded-md absolute"></div>
                    </div>
                    <div className="text-black text-sm font-medium font-['Lora']">
                      60% Completed{" "}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 items-start justify-start">
                    <div className="text-black text-base font-semibold font-['Poppins'] -mb-1">
                      &quot;Brave New World&quot;
                    </div>
                    <div className="text-black text-sm font-medium font-['Lora']">
                      by Aldous Huxley
                    </div>
                    <div className="flex">
                      <div className="w-44 h-3 bg-beige rounded-md relative"></div>
                      <div className="w-28 h-3 bg-yellow rounded-md absolute"></div>
                    </div>
                    <div className="text-black text-sm font-medium font-['Lora']">
                      45% Completed{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1 justify-center items-start w-[435px]">
            <div className="text-black text-xl font-semibold font-['Poppins']">
              Recent Reads
            </div>
            <div className="flex flex-row gap-2 items-center justify-start">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#FFC107" />
              </svg>
              <div className="text-black text-lg font-medium font-['Lora']">
                <span className="font-bold">&quot;Dune&quot;</span> by Frank
                Herbert
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#FFC107" />
              </svg>
              <div className="text-black text-lg font-medium font-['Lora']">
                <span className="font-bold">
                  &quot;The Murder of Roger Ackroyd&quot;{" "}
                </span>
                by Agatha Christie
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#FFC107" />
              </svg>
              <div className="text-black text-lg font-medium font-['Lora']">
                <span className="font-bold">
                  &quot;The Pillars of the Earth&quot;{" "}
                </span>{" "}
                by Ken Follett
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-2 mb-5">
            <div className="text-black text-xl font-semibold font-['Poppins'] capitalize">
              Account Settings
            </div>
            <button className="text-black text-lg font-semibold font-['Poppins'] capitalize hover:text-red active:text-yellow">
              Change Password
            </button>
            <button className="text-black text-lg font-semibold font-['Poppins'] capitalie hover:text-red active:text-yellow">
              Update Email
            </button>
            <button className="text-black text-lg font-semibold font-['Poppins'] capitalize hover:text-red active:text-yellow">
              Push Notifications
            </button>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <div className="text-black text-xl font-semibold font-['Poppins'] capitalize">
              Support
            </div>
            <button className="text-black text-lg font-semibold font-['Poppins'] capitalize hover:text-red active:text-yellow">
              Contact Support
            </button>
            <button className="text-black text-lg font-semibold font-['Poppins'] capitalie hover:text-red active:text-yellow">
              Terms of Service
            </button>
            <button className="text-black text-lg font-semibold font-['Poppins'] capitalize hover:text-red active:text-yellow">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center mt-14">
        <button className="flex items-center justify-center gap-2 -mt-1">
          <div className="text-blue text-xl font-medium capitalize font-['Poppins'] text-center hover:text-red active:text-yellow">
            Log Out
          </div>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.666 15.5832L19.2493 10.9998L14.666 6.4165"
              stroke="#0081A7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.25 11H8.25"
              stroke="#0081A7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.25 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H8.25"
              stroke="#0081A7"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Profile;
