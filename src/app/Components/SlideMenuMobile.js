import Image from "next/image";
import Link from "next/link";
import PersonLoggedIn from "./PersonLoggedIn";
import DropDownMenu from "./DropDownMenu";

function SlideMenuMobile() {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <Link href="#" className="w-[82px] h-[10px]">
          <Image
            src="/logo.png"
            style={{ width: "82px" }}
            alt="logo"
            height="83"
            width="114"
          />
        </Link>
        <hr className="w-full h-[2px] my-[6px] bg-[#49BBBD]" />
      </div>

      <div className="flex justify-start items-start text-[#5B5B5B] lg:gap-12 md:gap-5">
        <nav className="flex flex-col items-start justify-start text-[24px] gap-4 w-full">
          <Link className="hover:text-[#49BBBD]" href="#">
            Home
          </Link>
          <Link className="hover:text-[#49BBBD]" href="#">
            Courses
          </Link>
          <Link className="hover:text-[#49BBBD]" href="#">
            Career
          </Link>
          <Link className="hover:text-[#49BBBD]" href="#">
            Blog
          </Link>
          <Link className="hover:text-[#49BBBD]" href="#">
            About Us
          </Link>
          <hr className="w-full h-[2px] my-[6px] bg-[#49BBBD]" />
        </nav>
      </div>

      <div>
        <DropDownMenu />
      </div>

      <div>
        <PersonLoggedIn/>
      </div>
    </div>
  );
}

export default SlideMenuMobile;
