function DropDownMenu() {
  return (
    <div
      className={`z-[-1] rounded flex right-full md:absolute lg:absolute lg:w-max md:w-max bg-white lg:right-0 md:right-0 lg:flex md:flex flex-col text-[#5B5B5B] lg:text-[18px] md:text-[18px] text-[24px] text-nowrap md:px-3 md:pt-4 md:pb-4 gap-4 lg:px-3 lg-pt-4 lg:pb-4`}>
      <hr className="w-full h-[2px] bg-[#49BBBD] mt-[4px] hidden md:block lg:block" />
      <a
        className="hover:translate-x-1 hover:text-[#49BBBD] duration-300"
        href="#">
        Profile
      </a>
      <a
        className="hover:translate-x-1 hover:text-[#49BBBD] duration-300"
        href="#">
        Account Settings
      </a>
      <a
        className="hover:translate-x-1 hover:text-[#49BBBD] duration-300"
        href="#">
        Transaction
      </a>
      <a
        className="hover:translate-x-1 hover:text-[#49BBBD] duration-300"
        href="#">
        Support
      </a>
      <a
        className="hover:translate-x-1 hover:text-[#49BBBD] duration-300"
        href="#">
        Log Out
      </a>
      <hr className="w-full h-[2px] bg-[#49BBBD] mt-[4px] md:hidden lg:hidden block" />
    </div>
  );
}

export default DropDownMenu;
