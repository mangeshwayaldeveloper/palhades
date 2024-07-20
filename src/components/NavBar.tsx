function NavBar() {
  return (
    <>
      <div className="container mx-auto flex px-6 py-4 lg:px-12">
        <div className="flex items-center justify-center md:justify-between w-full space-x-4 text-theme">
          <img
            src="/src/assets/icon.png"
            alt="logo"
            width={48}
            height={48}
            className="flex"
          />
          <a
            href="#"
            className="font-bold tracking-widest text-5xl md:pl-20 text-transparent bg-clip-text bg-gradient-to-r from-header to-theme"
          >
            PALHADES
          </a>

          <a
            href="#"
            className="hidden md:flex py-3 px-6 bg-theme text-white hover:bg-header rounded-full shadow hover:shadow-xl transition duration-400"
          >
            <span>Get an Appointment</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;
