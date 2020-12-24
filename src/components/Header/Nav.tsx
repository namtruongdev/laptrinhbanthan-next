import Link from 'next/link';
import React, { ReactElement } from 'react';
import { NavContainer, NavFlex, NavLi, NavLink } from './styles';

import Hidden from '@material-ui/core/Hidden';
import Search from '../Search';

const Nav = (): ReactElement => {
  return (
    <NavContainer maxWidth="lg">
      <NavFlex>
        <Hidden mdUp>
          <Link href="/" passHref>
            <NavLink className="hvr-underline-from-center">Trang chủ</NavLink>
          </Link>
        </Hidden>
        <Hidden smDown>
          <nav>
            <ul>
              <NavLi>
                <Link href="/" passHref>
                  <NavLink className="hvr-underline-from-center">
                    Trang chủ
                  </NavLink>
                </Link>
              </NavLi>

              <NavLi>
                <Link href={`/categories/test`} passHref>
                  <NavLink className="hvr-underline-from-center">
                    trang chu
                  </NavLink>
                </Link>
              </NavLi>
            </ul>
          </nav>
        </Hidden>
        <Search />
      </NavFlex>
    </NavContainer>
  );
};

export default Nav;
