import header from "../images/banner3.png";
import avatar from "../images/avatar2.png";
function NavBar() {
  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="w-[800px] relative border-l border-r border-gray-500">
        <img
          src={header}
          alt="twitter header"
          className="w-full h-full object-fit "
        />
        <img
          src={avatar}
          alt="User Avatar"
          className="lg:w-40 lg:h-40 h-30 w-30 rounded-full border-3 border-black shadow-lg absolute bottom-0 left-10 z-20 translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default NavBar;
