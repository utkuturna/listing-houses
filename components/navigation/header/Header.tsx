import { FunctionComponent } from 'react';
import Logo from '../../ui/logo/Logo';
import Link from 'next/link';

const Header: FunctionComponent = () => {
  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-14">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
