import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { BsFillRewindFill, BsPeople } from "react-icons/bs";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosGitBranch } from "react-icons/io";
import { IoHomeOutline, IoPieChartOutline } from "react-icons/io5";
import { VscGitCommit } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Home",
    url: "/",
    icon: <IoHomeOutline className="size-4.5" />,
  },
  {
    title: "Languages",
    url: "/languages",
    icon: <IoPieChartOutline className="size-4.5" />,
  },
  {
    title: "Contributors",
    url: "/contributors",
    icon: <BsPeople className="size-4.5" />,
  },
  {
    title: "Commits",
    url: "/commits",
    icon: <VscGitCommit className="size-4.5" />,
  },
  {
    title: "Releases",
    url: "/releases",
    icon: <CiShoppingTag className="size-4.5" />,
  },
  {
    title: "Branches",
    url: "/branches",
    icon: <IoIosGitBranch className="size-4.5" />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-3 px-5">
        <div className="flex items-center gap-3">
          <BsFillRewindFill className="size-9 text-blue-600" />
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-2xl">GitBack</h1>
            <p className="text-sm">GitHub Time Machine</p>
          </div>
        </div>
        <div className="mt-10">
          {items.map((item, index) => {
            return (
              <NavLink
                to={item.url}
                key={index}
                className={({ isActive }) =>
                  `flex items-center gap-3 transition-all py-2 pl-3 rounded-md ${
                    isActive
                      ? "bg-blue-500/5 text-blue-600 font-bold border-l-blue-600 border-l-3 rounded-bl-none rounded-tl-none"
                      : "hover:bg-black/5"
                  }`
                }>
                <div>{item.icon}</div>
                <p>{item.title}</p>
              </NavLink>
            );
          })}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
