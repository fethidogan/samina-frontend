import React from 'react';
import { RefreshCw } from 'react-feather';
import { Col, Row } from 'reactstrap';
import { useHeaderScroll } from '../../../Utils/HeaderScroll';
import AllCategories from '../../Element/AllCategories';
import HeadingLogo from '../../Element/HeadingLogo';
import ItemCart from '../../Element/ItemCart';
import NavBar from '../../Element/NavBar';
import SearchBarToggle from '../../Element/SearchBarToggle';
import SearchBarWithBgColor from '../../Element/SearchBarWithBgColor';
import SearchForVegitable from '../../Element/SearchForVegitable';
import ThreeBarToggle from '../../Element/ThreeBarToggle';
import TopHeaderBar2 from '../../Element/TopHeaderBar2';
import WishList from '../../Element/WishList';

const Header5 = ({ noStyle, isCategories }) => {
  const UpScroll = useHeaderScroll(false);
  return (
    <header id='home' className={`${!noStyle ? `${UpScroll ? 'nav-down nav-up' : ''}` : ''}`}>
      <TopHeaderBar2 />
      <div className='main-header search-header navbar-searchbar'>
        <div className='container-fluid-lg'>
          <Row>
            <Col lg='12'>
              <div className='main-menu'>
                <div className='menu-left'>
                  <HeadingLogo />
                  <AllCategories isCategories={isCategories} />
                </div>
                <SearchForVegitable />
                <div className='menu-right'>
                  <ul>
                    <li>
                      <ThreeBarToggle />
                    </li>
                    <SearchBarWithBgColor customeClass={'d-lg-none d-block'} />
                    <li className='onhover-dropdown wislist-dropdown'>
                      <div className='cart-media'>
                        <div className='cart-icon'>
                          <RefreshCw />
                          <span className='label label-theme rounded-pill'>0</span>
                        </div>
                        <div className='cart-content'>
                          <h6>Empty</h6>
                          <span>Compare</span>
                        </div>
                      </div>
                    </li>
                    <WishList />
                    <ItemCart />
                  </ul>
                </div>
                <SearchBarToggle />
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className='main-header'>
        <div className='container-fluid-lg'>
          <Row>
            <Col lg='12'>
              <div className='main-menu'>
                <nav>
                  <NavBar />
                </nav>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </header>
  );
};
export default Header5;
