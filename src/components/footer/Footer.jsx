import Link from "next/link";
import { FacebookIcon } from "../icons/FaceIcon";
import { InstaIcon } from "../icons/Insta";
import { TwitterIcon } from "../icons/Twitter";

export default function Footer() {
  return (
    <div className="bg-[image:linear-gradient(to_bottom,white_0%,white_50%,#f3f4f6_50%,#f3f4f6_100%)]">
      <div className="max-w-[1216px] w-full h-full m-auto">
        <div className="container py-[100px]  bg-[image:linear-gradient(to_bottom,white_0%,white_50%,#f3f4f6_50%,#f3f4f6_100%)]">
          <div className="w-full bg-white h-[233px] rounded-[10px] flex items-center justify-around ">
            <div className="flex flex-col w-[420px] ">
              <p className="font-bold text-4xl ">
                Subscribe Now for Get Special Features!
              </p>
              <p className="text-slate-600">
                Let's subscribe with us and find the fun.
              </p>
            </div>
            <div className="btn btn-error w-[250px] h-[60px] shadow-2xl shadow-red-500 bg-red-500 text-white font-bold text-base">
              Subscribe Now
            </div>
          </div>

          <div className="flex pt-16 gap-[230px]">
            <div className="flex flex-col gap-6">
              <Link href="/">
                <img src="./Logo.jpg" width={150} height={36} alt="" />
              </Link>

              <p className="w-[340px] text-slate-600 ">
                <b>LaslesVPN</b> is a private virtual network that has unique
                features and has high security.
              </p>
              <div>
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/">
                    <FacebookIcon />
                  </a>
                  <a href="https://www.instagram.com/">
                    <InstaIcon />
                  </a>
                  <a href="https://x.com/?mx=2">
                    <TwitterIcon />
                  </a>
                </div>
                <p className=" text-slate-400">
                  ©2020Laslesb<b>VPN</b>
                </p>
              </div>
            </div>

            <div className="flex gap-[126px]  ">
              <div className=" flex flex-col gap-[20px] ">
                <p className="font-bold">Product</p>
                <div className="text-slate-600 flex flex-col gap-[10px]">
                  <p>Download </p>
                  <p>Pricing</p>
                  <p>Locations</p>
                  <p>Server</p>
                  <p>Countries</p>
                  <p>Blog</p>
                </div>
              </div>

              {/* end */}
              <div className="flex flex-col gap-[20px]">
                <p className="font-bold ">Engage</p>
                <div className="text-slate-600 flex flex-col gap-[10px]">
                  <p>LaslesVPN ? </p>
                  <p>FAQ</p>
                  <p>Tutorials</p>
                  <p>About Us</p>
                  <p>Privacy Policy</p>
                  <p>Terms of Service</p>
                </div>
              </div>

              <div className=" flex flex-col gap-[20px]">
                <p className="font-bold">Earn Money</p>
                <div className="text-slate-600 flex flex-col gap-[10px]">
                  <p>Affiliate</p>
                  <p>Become Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
