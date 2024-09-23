import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="flex h-10 w-full justify-between items-center p-10 gap-2">
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header;
