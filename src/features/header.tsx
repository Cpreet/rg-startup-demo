import Logo from "./logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <div className="sticky flex h-24 w-full justify-between items-center p-10 gap-2 ">
      <Logo />
      <Navigation />
    </div>
  )
}

export default Header;
