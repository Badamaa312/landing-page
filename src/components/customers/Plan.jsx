export default function Plan() {
  return (
    <div className=" bg-slate-50">
      <div className="max-w-[1216px] w-full h-full m-auto">
        <div className="container " id="plan">
          <div className="flex flex-col items-center py-20">
            <div className="flex flex-col gap-8 items-center">
              <p className=" font-bold text-4xl">Choose Your Plan</p>
              <div className="text-slate-700 w-[555px] text-center">
                <p>
                  Let is choose the package that is best for you and explore it
                  happily and cheerfully.
                </p>
              </div>
            </div>

            <div className="flex gap-20 pt-8 ">
              <div
                className="border-2 hover:border-red-500 border-slate-200 w-[330px] h-[760px] rounded-[10px] flex flex-col items-center gap-8 pt-20 bg-white justify-around
          "
              >
                <img src="./Free.png" alt="" width={150} height={165} />
                <p className="font-bold text-lg">Free Plan</p>
                <div className="flex flex-col items-start gap-5">
                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Unlimited Bandwitch</p>
                  </div>
                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Encrypted Connection</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>No Traffic Logs</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Works on All Devices</p>
                  </div>
                </div>

                <div className="text-slate-800 flex flex-col items-center gap-4 ">
                  <p className="font-bold text-xl">Free</p>
                  <div className="btn border-2 btn-outline rounded-3xl w-[150px] font-extrabold hover:bg-red-500 hover:text-white hover:border-red-500 border-red-500 text-red-500 ">
                    Select
                  </div>
                </div>
              </div>

              {/* another box */}

              <div className="border-2  hover:border-red-500 border-slate-200 w-[330px] h-[760px] rounded-[10px] flex flex-col items-center gap-8 pt-20 bg-white justify-around">
                <img src="./Free.png" alt="" width={150} height={165} />
                <p className="font-bold text-lg">Standard Plan</p>
                <div className="flex flex-col items-start gap-5">
                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Unlimited Bandwitch</p>
                  </div>
                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Encrypted Connection</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Yes Traffic Logs</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Works on All Devices</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Connect Anywhere</p>
                  </div>
                </div>

                <div className="text-slate-800 flex flex-col items-center gap-4 pb-2">
                  <p className="text-xl">
                    <b>$9 </b>/ mo
                  </p>
                  <div className="btn border-2 btn-outline rounded-3xl w-[150px] font-extrabold hover:bg-red-500 hover:text-white hover:border-red-500 border-red-500 text-red-500 ">
                    Select
                  </div>
                </div>
              </div>

              {/* another box */}

              <div className="border-2  hover:border-red-500 border-slate-200 w-[330px] h-[760px] rounded-[10px] flex flex-col items-center gap-8 pt-20 bg-white justify-around">
                <img src="./Free.png" alt="" width={150} height={165} />
                <p className="font-bold text-lg">Premium Plan</p>
                <div className="flex flex-col items-start gap-5">
                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Unlimited Bandwitch</p>
                  </div>
                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Encrypted Connection</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>No Traffic Logs</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Works on All Devices</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Connect Anywhere</p>
                  </div>

                  <div className="flex gap-5">
                    <CheckedIcon />
                    <p>Get New Features</p>
                  </div>
                </div>

                <div className="text-slate-800 flex flex-col items-center gap-4 pb-3">
                  <p className="text-xl">
                    <b>$12 </b>/ mo
                  </p>
                  <div className="btn border-2 btn-outline rounded-3xl w-[150px] font-extrabold hover:bg-red-500 hover:text-white hover:border-red-500 border-red-500 text-red-500 ">
                    Select
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
