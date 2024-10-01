import { Location, LocationIcon } from "../icons/Location";
import { ServerIcon } from "../icons/Server";
import { UserIcon } from "../icons/User";

export const Card = () => {
  return (
    <main className="w-full flex justify-center">
      <div className="container py-6 h-[200px] drop-shadow-lg card card-compact bg-base-100 px-[100px]">
        <div className="card-body">
          <div className="flex justify-between items-center h-full">
            {/* small section */}
            <div className="flex gap-3 items-center">
              <UserIcon />
              <div className="flex flex-col  gap-1">
                <p className="text-xl font-extrabold">90+</p>
                <p>User</p>
              </div>
            </div>
            {/* zuraas */}
            <div className="h-full border border-1"></div>
            {/* small section */}
            <div className="flex gap-3 items-center">
              <LocationIcon />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-extrabold">30+</p>
                <p>Locations</p>
              </div>
            </div>
            {/* zuraas */}
            <div className="h-full border border-1"></div>
            {/* small section */}
            <div className="flex gap-3 items-center">
              <ServerIcon />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-extrabold">50+</p>
                <p>Servers</p>
              </div>
            </div>
            {/* zuraas */}
            <div className="h-full border border-1"></div>
          </div>
        </div>
      </div>
    </main>
  );
};
