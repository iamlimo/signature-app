import Link from "next/link";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";

export default function DashboardLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      {/* User Menu */}
      <Menu />

      {/* Main Content */}
      <div className="">{children}</div>
    </div>
  );
}
