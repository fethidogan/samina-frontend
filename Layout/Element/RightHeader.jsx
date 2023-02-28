import Link from 'next/link';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Btn } from '../../Components/AbstractElements';
import AdminUser from './AdminUser';
import Currency from './Currency';
import ItemCart from './ItemCart';
import SelectLanguages from './Languages';
import SearchBar from './SearchBar';
import WishList from './WishList';
import { User } from 'react-feather';
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const RightHeader = ({ icon }) => {
  // router
  const router = useRouter()

  // states
  const [cookie, setCookie] = useState("")
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // logout
  const handleLogout = async () => {
    try {
      await axios.post(`/api/delete-cookie`)
      Cookies.remove("email")
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setCookie(Cookies.get('email'))
  }, [])

  return (
    <div className='menu-right'>
      <ul>
        {/* <Currency /> */}
        {/* <SelectLanguages /> */}
        <SearchBar />
        {/* <AdminUser /> */}
        <WishList icon={icon} />
        <ItemCart />

        {!cookie &&
          <Link href={'/page/login'} className='btn btn-success-default btn-sm fw-bold'>
            <User />
            <span style={{ fontWeight: "400", fontSize: "16px", marginLeft: "5px" }}>Login</span>
          </Link>
        }

        {cookie &&
          <Dropdown
            onClick={() => setDropdownOpen(true)}
            isOpen={dropdownOpen}
            toggle={toggle}
            onMouseEnter={() => setDropdownOpen(true)}
            style={{ marginLeft: "10px", cursor: "pointer" }}
          >
            <div
              className='d-flex justify-content-center align-items-center'
              style={{ minHeight: "50px", minWidth: "50px", borderRadius: "10px" }}>
              <User />
              {cookie}
            </div>
            <DropdownMenu className='mt-5'>
              <DropdownItem href='/page/user-dashboard'>Dashboard</DropdownItem>
              <DropdownItem href='/page/user-wishlist'>Wishlist</DropdownItem>
              <DropdownItem href='/page/user-orders'>Orders</DropdownItem>
              <DropdownItem href='/page/user-reviews'>Reviews</DropdownItem>
              <DropdownItem href='/page/user-notifications'>Notification Settings</DropdownItem>
              <DropdownItem href='/page/account-settings'>Account Settings</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={() => handleLogout()}><span className='text-danger'>Logout</span></DropdownItem>
            </DropdownMenu>
          </Dropdown>
        }

      </ul>
    </div>
  );
};
export default RightHeader;
