import Link from "next/link";
export default function Menu() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full p-4 text-white">
        <div className="text-white p-6 shadow-md rounded-lg text-center">
          <Link
            href="/users"
            className=" hover:text-gray-300 active:text-[30px] focus:text-5xl"
          >
            My Library
          </Link>
        </div>
        <div className="p-6 shadow-md rounded-lg text-center">
          <Link
            href="/users/rented"
            className="focus:text-2xl active:text-[24px] hover:text-gray-300"
          >
            Rented Movies
          </Link>
        </div>
        <div className="p-6 shadow-md rounded-lg text-center">
          <Link
            href="/users/account-settings"
            className="hover:text-gray-300 focus:text-2xl active:text-[24px] "
          >
            Account Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
