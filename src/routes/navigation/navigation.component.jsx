import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.components';
import './navigation.styles.scss';
import UserContext from '../../contexts/user-context.component';
import { signOutUser } from '../../utils/firebase.utils';
import CartContext from '../../contexts/cart-context.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <CartIcon onClick={cartCtx.setShowing} />
        </div>
        {cartCtx.showing && <CartDropDown />}
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
