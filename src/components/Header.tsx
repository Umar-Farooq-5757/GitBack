import { FaGithub } from "react-icons/fa";
import { SidebarTrigger } from "./ui/sidebar";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full p-4">
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <SidebarTrigger className="p-2 border rounded-md hover:bg-zinc-100" />
        <div className="flex-1 flex">
          <input
            className="border rounded-md px-3 py-2 w-full text-sm rounded-l-md rounded-r-none"
            type="text"
            placeholder="Enter a GitHub repository (owner/repo)"
          />
          <button
            onClick={() =>
              window.open(
                "https://github.com/umar-farooq-5757/gitback",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="bg-blue-600 text-white px-3 py-0.5 rounded-l-none rounded-r-md">
            Search
          </button>
        </div>
      </div>
      <button className="p-2 text-xl hover:text-zinc-600">
        <FaGithub />
      </button>
    </header>
  );
};

export default Header;
