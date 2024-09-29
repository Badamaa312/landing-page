export const Intro = () => {
  return (
    <main className="w-full flex justify-center pt-5">
      <div className="container flex h-[650px] items-center">
        <div className="w-1/2 flex flex-col gap-10">
          <p className="text-6xl leading-[100px] font-semibold">
            Want anything to be easy with <b>LaslesVPN.</b>{" "}
          </p>
          <p className="text-lg leading-8">
            Provide a network for all your needs with ease and fun using -
            <b>LaslesVPN</b> discover interesting features from us.
          </p>
          <div className="w-[250px] btn btn-error text-white font-bold shadow-2xl shadow-red-500  ">
            Get Started
          </div>
        </div>
        <div className="w-1/2">
          <img src="/Illustration.png" alt="" />
        </div>
      </div>
    </main>
  );
};
