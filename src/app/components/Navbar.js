import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-white">
          <a href="/" className=" hover:font-bold">
            Home
          </a>
          <a href="#" className=" hover:font-bold">
            Browse
          </a>
          <a href="#" className=" hover:font-bold">
            Coming Soon
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full text-white hover:bg-[#ED4B00]">
            <Search className="w-6 h-6" />
          </button>
          <a href="/signup">
            <button className="p-2 rounded-full text-white hover:bg-[#ED4B00]">
              <User className="w-6 h-6" />
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
