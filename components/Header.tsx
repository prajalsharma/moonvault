const Header = () => {
  return (
    <header className="bg-[#1a0c6d] py-5 px-8 lg:px-24 fixed w-full z-10">
      <nav className="text-white text-3xl font-bold flex gap-3 items-center mx-auto">
        <div className="bg-white p-2">
          <img src="https://cdn.prod.website-files.com/64053c5d931f167ecf5997be/6405771ffb64702144b3da4a_el-logo.png" alt="" className="size-5" />
        </div>
        <p className="font-roboto">EigenJobs</p>
      </nav>
    </header>
  );
};
export default Header;
