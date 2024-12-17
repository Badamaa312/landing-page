import { CheckIcon } from "../icons/Check";

export default function Benefit() {
  return (
    <div className="max-w-[1216px] w-full h-full m-auto">
      <div className="container py-28 " id="feature">
        <div className="grid grid-cols-2 gap-28 items-end">
          <img src="./Benefit.png" alt="" />
          <div className="flex flex-col gap-6">
            <p className=" font-bold text-4xl w-[380px]">
              We Provide Many Features You Can Use
            </p>
            <p className="text-slate-700 w-[420px]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>

            <div className="flex gap-3">
              <CheckIcon />
              <p className="text-slate-700">Powerfull online protection.</p>
            </div>

            <div className="flex gap-3">
              <CheckIcon />
              <p className="text-slate-700">Internet without borders.</p>
            </div>

            <div className="flex gap-3">
              <CheckIcon />
              <p className="text-slate-700">Supercharged VPN</p>
            </div>

            <div className="flex gap-3">
              <CheckIcon />
              <p className="text-slate-700">No specific time limits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
