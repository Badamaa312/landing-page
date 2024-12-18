import Link from "next/link";

export const Header = () => {
  return (
    <main className="w-full flex justify-center pt-5">
      <div className="container flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            <img width={150} height={36} src="/Logo.jpg" alt="" />
          </Link>
        </div>
        <div className="flex gap-[50px] items-center">
          <a href="#header">
            <p>About</p>
          </a>
          <a href="#feature">
            <p>Features</p>
          </a>
          <a href="#plan">
            <p>Pricing</p>
          </a>
          <a href="#location">
            <p>Testimonials</p>
          </a>
          <p>Help</p>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="btn btn-ghost rounded-[30px]">Sign in</div>
          <div className="w-[120px] btn btn-outline rounded-[30px] btn-error">
            Sign up
          </div>
        </div>
      </div>
    </main>
  );
};
