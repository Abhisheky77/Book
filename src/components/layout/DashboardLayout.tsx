import { Home, Package, ShoppingCart, Users, BarChart, BookOpenText } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Input } from "../ui/input";
import DropdownMenuUserMenuDemo from "../ui/DropDown";

export default function DashboardLayout() {
  const items = [
    { name: "Home", icon: Home, link: "/home" },
    { name: "Orders", icon: ShoppingCart, link: "/dashboard/orders" },
    { name: "Books", icon: BookOpenText, link: "/books" },
    { name: "Customers", icon: Users, link: "/dashboard/customers" },
    { name: "Analytics", icon: BarChart, link: "/dashboard/analytics" },
  ];

  return (
    <div className="h-screen flex flex-col">
      {/* HEADER */}
      <header className="w-full h-14 flex items-center bg-black text-white px-6 gap-6">
        <h2 className="text-xl font-bold">Coder's Book</h2>

        <Input
          type="text"
          placeholder="Search Books..."
          className="bg-white text-black border border-gray-300 w-150 ml-25"
        />
         {/* RIGHT SIDE ACTIONS */}
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenuUserMenuDemo/>{/* 👈 Avatar dropdown */}
        </div>

        {/* <div className="ml-auto flex items-center gap-4">
          <Link to="/login" className="text-white">Login</Link>
          <button className="text-white">Logout</button>
        </div> */}
      </header>

      <div className="flex flex-1">
        {/* SIDEBAR */}
        <aside className="w-64 h-full bg-black text-white p-6 border-r">
          <nav className="space-y-3">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="flex gap-3 items-center text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-md"
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6 rounded-lg">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
