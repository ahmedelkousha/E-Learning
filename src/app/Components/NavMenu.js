import Link from "next/link";

function NavMenu() {
  return (
    <nav className="flex md:flex-row lg:flex-row flex-col items-start lg:justify-end md:text-[21px] lg:text-[22px] lg:gap-14 md:gap-7">
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
    </nav>
  );
}

export default NavMenu