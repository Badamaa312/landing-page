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
          <p>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonials</p>
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

// import Link from "next/link";

// export default function Header() {
//   return (
//     <div className="bg-white ">
//       <div className="max-w-[1216px] w-full h-full m-auto">
//         <div className="flex justify-between items-center container max-w-[1216px] py-[50px] fixed z-[1] bg-white">
//           <div className="">
//             <Link href="/">
//               <img width={150} height={36} src="/Logo.png" alt="" />
//             </Link>
//           </div>
//           <div className="text-base text-slate flex gap-10  ">
//             <a href="#header">
//               <p>About</p>
//             </a>
//             <a href="#feature">
//               <p>Features</p>
//             </a>
//             <a href="#plan">
//               <p>Pricing</p>
//             </a>
//             <a href="#location">
//               <p>Testimonials</p>
//             </a>
//             <p>Help</p>
//           </div>
//           <div className="flex items-center gap-7 ">
//             <button className="text-black font-bold">Sign in</button>
//             <div className="btn btn-outline rounded-3xl w-[150px] font-extrabold hover:bg-red-500 hover:text-white hover:border-red-500 border-red-500 text-red-500 ">
//               Sign up
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
