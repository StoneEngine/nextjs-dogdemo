import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Button size='sm' >
      <Link className="text-sm" href="/">
        Logo
      </Link>
    </Button>
  );
};
export default Logo;
