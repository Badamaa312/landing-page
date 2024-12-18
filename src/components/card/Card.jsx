import { MapIcon } from "../icons/Map";
import { ServerIcon } from "../icons/Server";
import { UserIcon } from "../icons/User";

export const Card = () => {
  return (
    <div className="max-w-[1216px] w-full h-full m-auto">
      <div className="flex justify-center ">
        <div className="container max-w-[1140px]">
          <div className="max-w-6xl h-[200px] shadow-xl rounded-md flex gap-[113px] justify-center  ">
            <div className="flex gap-3 text-2xl items-center justify-center">
              <UserIcon />
              <div className="flex flex-col items-start justify-start">
                <p className="font-bold">90+</p>
                <p className="text-slate-500">Users</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="border border-1 h-[125px] "></div>
            </div>

            <div className="flex gap-3 text-2xl items-center justify-center">
              <MapIcon />
              <div className="flex flex-col  items-start justify-start">
                <p className="font-bold">30+</p>
                <p className="text-slate-500">Locations</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="border border-1 h-[125px] "></div>
            </div>

            <div className="flex gap-3 text-2xl items-center justify-center">
              <ServerIcon />
              <div className="flex flex-col  items-start justify-start">
                <p className="font-bold">50+</p>
                <p className="text-slate-500">Servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
