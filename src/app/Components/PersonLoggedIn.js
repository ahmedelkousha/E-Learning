import Image from "next/image";

function PersonLoggedIn({ handleRotateClick, rotate }) {
  return (
    <nav className="flex lg:flex-row flex-row lg:justify-end justify-start text-[#5B5B5B] md:w-auto lg:w-auto w-full lg:items-center md:items-center items-center gap-[4px] md:gap-[4px] lg:gap-[4px]">
      <Image
        style={{ width: "63px", height: "63px" }}
        src="/user-image-placeholder.png"
        alt="logo"
        height="63"
        width="63"
      />
      <p className="lg:text-[18px]">Lina</p>
      <Image
        style={{
          width: "14px",
          height: "9px",
          cursor: "pointer",
          transform: rotate ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.35s",
        }}
        className="md:block lg:block hidden"
        src="/arrow-down.png"
        alt="logo"
        height="9"
        width="14"
        onClick={handleRotateClick}
      />
    </nav>
  );
}

export default PersonLoggedIn;
