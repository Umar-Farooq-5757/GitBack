import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { BsFillRewindFill, BsPeople } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { GrOverview } from "react-icons/gr";
import { IoIosStats } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TbTimeline } from "react-icons/tb";
import { VscGitCommit } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Select Repository",
    url: "/",
    icon: <GoStack className="size-4.5" />,
  },
  {
    title: "Overview",
    url: "/overview",
    icon: <GrOverview className="size-4.5" />,
  },
  {
    title: "Timeline",
    url: "/timeline",
    icon: <TbTimeline className="size-4.5" />,
  },
  {
    title: "Commits",
    url: "/commits",
    icon: <VscGitCommit className="size-4.5" />,
  },
  {
    title: "Contributors",
    url: "/contributors",
    icon: <BsPeople className="size-4.5" />,
  },
  { title: "Stats", url: "/stats", icon: <IoIosStats className="size-4.5" /> },
  {
    title: "Settings",
    url: "/settings",
    icon: <IoSettingsOutline className="size-4.5" />,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="p-3 px-5">
        <div className="flex items-center gap-3">
          <BsFillRewindFill className="size-9 text-purple-600" />
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
                  `flex items-center gap-3 transition-all py-1 pl-3 rounded-md ${
                    isActive
                      ? "bg-purple-500/10 text-purple-600 font-bold border-l-purple-600 border-l-3 rounded-bl-none rounded-tl-none"
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
