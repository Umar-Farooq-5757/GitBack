import Card from "@/components/Card";
import reactRepoData from "@/data/repos/react";
import {
  FaBalanceScale,
  FaBug,
  FaCheck,
  FaDatabase,
  FaGithub,
  FaRegCalendar,
  FaRegEye,
  FaStar,
  FaUserAlt,
} from "react-icons/fa";
import { FiExternalLink, FiUpload } from "react-icons/fi";
import { IoIosGitBranch, IoIosLink } from "react-icons/io";
import { IoClose, IoPeople, IoPieChartOutline } from "react-icons/io5";
import moment from "moment";
import { MdUpdate } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      {/* Overview of the repo */}
      <section className="flex justify-between items-start border-2 px-5 py-4 rounded-md">
        <div className="flex gap-5">
          <img
            src={reactRepoData.owner.avatar_url}
            alt=""
            className="rounded-full size-30"
          />
          <div>
            <h1 className="font-bold text-3xl my-2.5">
              {reactRepoData.full_name}
            </h1>
            <p className="my-2.5">{reactRepoData.description}</p>
            <div className="my-2.5 flex gap-5">
              <div className="flex items-center gap-2">
                <IoIosLink />
                <p
                  onClick={() =>
                    window.open(
                      reactRepoData.homepage,
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="font-bold hover:underline text-blue-600 cursor-pointer">
                  {reactRepoData.homepage}
                </p>
              </div>
              <p>{reactRepoData.language}</p>
              <div className="flex items-center gap-2">
                <FaBalanceScale />
                <p>{reactRepoData.license.name}</p>
              </div>
              <p className="bg-green-100 text-green-600 font-bold text-sm border border-green-600 rounded-full px-3">
                {reactRepoData.visibility}
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() =>
            window.open(reactRepoData.html_url, "_blank", "noopener,noreferrer")
          }
          className="flex items-center justify-center gap-2 bg-black/3 hover:bg-black/10 px-2 py-2 border-2 rounded-md cursor-pointer transition-all">
          <FaGithub />
          <p className="text-sm font-bold">View on GitHub</p>
          <FiExternalLink />
        </button>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-4 mt-6 gap-3">
        <Card
          Icon={FaStar}
          iconColor={"#efc53c"}
          iconBackground={"#fdf6df"}
          title={"Stars"}
          value={reactRepoData.stargazers_count}
          desc={"People who starred this repo"}
        />
        <Card
          Icon={IoIosGitBranch}
          iconColor={"#089139"}
          iconBackground={"#eaf8ee"}
          title={"Forks"}
          value={reactRepoData.forks_count}
          desc={"People who forked this repo"}
        />
        <Card
          Icon={FaRegEye}
          iconColor={"#4078f4"}
          iconBackground={"#eef4fd"}
          title={"Watchers"}
          value={reactRepoData.watchers_count}
          desc={"People watching this repo"}
        />
        <Card
          Icon={IoPeople}
          iconColor={"#7347dd"}
          iconBackground={"#f9f7fe"}
          title={"Subscribers"}
          value={reactRepoData.subscribers_count}
          desc={"People subscribed"}
        />
        <Card
          Icon={FaBug}
          iconColor={"#d12c2e"}
          iconBackground={"#feedee"}
          title={"Open Issues"}
          value={reactRepoData.open_issues_count}
          desc={"Issues that need help"}
        />
        <Card
          Icon={FaDatabase}
          iconColor={"#524ce6"}
          iconBackground={"#f1f0fd"}
          title={"Size"}
          value={Math.round(reactRepoData.size / 1024) + " MB"}
          desc={"Repository size"}
        />
        <div className="px-3 py-2 border-2 rounded-md h-34 col-span-2">
          <h3 className="font-extrabold text-black/60 text-[16px]">
            Activity Overview
          </h3>
          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-1 border-r-2 pr-2 w-fit">
              <div className={`p-2 rounded-full bg-[#eef4fd]`}>
                <FaRegCalendar className={`size-6 text-[#4078f4]`} />
              </div>
              <div>
                <h3 className="font-extrabold text-black/60 text-sm">
                  Created
                </h3>
                <p className="font-extrabold text-[15px]">
                  {moment(reactRepoData.created_at).format("MMM D, YYYY")}
                </p>
                <p className="text-black/60 text-sm font-bold">
                  {moment(reactRepoData.created_at).fromNow()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 border-r-2 pr-2 w-fit">
              <div className={`p-2 rounded-full bg-[#eaf8ee]`}>
                <FiUpload className={`size-6 text-[#089139]`} />
              </div>
              <div>
                <h3 className="font-extrabold text-black/60 text-sm">
                  Last Push
                </h3>
                <p className="font-extrabold text-[15px]">
                  {moment(reactRepoData.pushed_at).fromNow()}
                </p>
                <p className="text-black/60 text-sm font-bold">
                  {moment(reactRepoData.pushed_at).format("MMM D, YYYY")}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 pr-2 w-fit">
              <div className={`p-2 rounded-full bg-[#f9f7fe]`}>
                <MdUpdate className={`size-6 text-[#7347dd]`} />
              </div>
              <div>
                <h3 className="font-extrabold text-black/60 text-sm">
                  Last Updated
                </h3>
                <p className="font-extrabold text-[15px]">
                  {moment(reactRepoData.updated_at).fromNow()}
                </p>
                <p className="text-black/60 text-sm font-bold">
                  {moment(reactRepoData.updated_at).format("MMM D, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6 flex justify-between gap-2">
        {/* Repository information */}
        <div className="border-2 rounded-md grow py-2 px-3 w-1/3">
          <h3 className="font-bold mb-2">Repository Information</h3>
          <div>
            <div className="flex justify-between items-center border px-2 py-1.5 rounded-t-md">
              <div className="flex items-center gap-1.5">
                <IoIosGitBranch className="text-black/80" />
                <p>Default Branch</p>
              </div>
              <p>{reactRepoData.default_branch}</p>
            </div>
            <div className="flex justify-between items-center border px-2 py-1.5 rounded-none">
              <div className="flex items-center gap-1.5">
                <IoPieChartOutline className="text-black/80" />
                <p>Language</p>
              </div>
              <p>{reactRepoData.language}</p>
            </div>
            <div className="flex justify-between items-center border px-2 py-1.5 rounded-none">
              <div className="flex items-center gap-1.5">
                <FaBalanceScale className="text-black/80" />
                <p>License</p>
              </div>
              <p>{reactRepoData.license.name}</p>
            </div>
            <div className="flex justify-between items-center border px-2 py-1.5 rounded-none">
              <div className="flex items-center gap-1.5">
                <FaRegEye className="text-black/80" />
                <p>Visibility</p>
              </div>
              <p>{reactRepoData.visibility}</p>
            </div>
            <div className="flex justify-between items-center border px-2 py-1.5 rounded-none">
              <div className="flex items-center gap-1.5">
                <FaUserAlt className="text-black/80" />
                <p>Owner Type</p>
              </div>
              <p>{reactRepoData.owner.type}</p>
            </div>
            <div className="flex justify-between items-center border px-2 py-1.5 rounded-b-md">
              <div className="flex items-center gap-1.5">
                <CiFileOn className="text-black/80" />
                <p>Repository ID</p>
              </div>
              <p>{reactRepoData.id}</p>
            </div>
          </div>
        </div>
        {/* Topics */}
        <div className="border-2 rounded-md grow py-2 px-3 w-1/3">
          <h3 className="font-bold">Topics</h3>
          <div className="flex flex-wrap my-3 gap-2">
            {reactRepoData.topics.map((topic, idx) => {
              return (
                <div
                  key={idx}
                  className="bg-[#eef4fd] text-[#4078f4] border border-[#4078f4] font-bold px-3 rounded-xs">
                  {topic}
                </div>
              );
            })}
          </div>
        </div>
        {/* Repository features */}
        <div className="border-2 rounded-md grow py-2 px-3 w-1/3">
          <h3 className="font-bold mb-4">Repository Features</h3>
          <div className="flex justify-between">
            <div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.has_issues ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#f1f0fd] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Issues</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.has_projects ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Projects</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.has_wiki ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Wiki</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.has_projects ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Pages</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.has_downloads ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Downloads</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.has_discussions ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#f1f0fd] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Discussions</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.has_pull_requests ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Pull Requests</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.allow_forking ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Forking Allowed</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.archived ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Archived</p>
              </div>
              <div className="flex items-center gap-3 my-3">
                {reactRepoData.is_template ? (
                  <div className="bg-[#eaf8ee] rounded-full p-1">
                    <FaCheck className="text-[#089139] " />
                  </div>
                ) : (
                  <div className="bg-[#feedee] rounded-full p-1">
                    <IoClose className="text-[#d12c2e] " />
                  </div>
                )}
                <p>Templtate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
