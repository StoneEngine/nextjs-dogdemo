import { Darkmode } from "./Darkmode";
import Dropdownlistmenu from "./Dropdownlistmenu";


import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex flex-col justify-between py-8 sm:flex-row sm:items-center gap-4">
        {/* logo */}
        <Logo  />
        {/* Search */}
        <Search />
        {/* DarkMode & Profile */}
        <div className="flex gap-4">
          <Darkmode/>
          <Dropdownlistmenu/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
