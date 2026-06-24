import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {BiUser} from "react-icons/bi"
import { useDispatch, useSelector } from 'react-redux';
import { FaShoppingCart,FaUserShield } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import BackDrop from './BackDrop';
import { LogOutUser } from '../store/actions/logOutUser';

function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user?.roles.includes("ROLE_ADMIN");
  const isSeller = user && user?.roles.includes("ROLE_SELLER");
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logOutHandler =() =>{
    dispatch(LogOutUser(navigate));
  }

  return (
    <div className='relative z-30'>
      <div
        className='sm:border-[1px] sm:border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700'
        onClick={handleClick}
      >
        <Avatar alt='Menu' src=""/>
      </div>
      <Menu
        sx={{width:"400px"}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
          
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
            'aria-labelledby': 'basic-button',
            sx:{width:160},
        }}
      >
        <Link to="/">
            <MenuItem
                className='flex gap-2' 
                onClick={handleClose}>
                    <BiUser className='text-xl'/>
                    <span className='font-bold text-[16px] mt-1'>
                        {user.username}
                    </span>
            </MenuItem>
        </Link>
        <Link to="/cart">
            <MenuItem
                className='flex gap-2' 
                onClick={handleClose}>
                    <FaShoppingCart className='text-xl'/>
                    <span className='font-semibold'>
                        Order
                    </span>
            </MenuItem>
        </Link>
        { (isAdmin || isSeller) && (
          <Link to={isAdmin ? "/admin" : "/admin/orders"}>
              <MenuItem
                  className='flex gap-2' 
                  onClick={handleClose}>
                      <FaUserShield className='text-xl'/>
                      <span className='font-semibold'>
                          {isAdmin ? "Admin Panal" : "Seller Panal"}
                      </span>
              </MenuItem>
          </Link>
          )}
        
            <MenuItem
                className='flex gap-2' 
                onClick={logOutHandler}>
                    <div className='font-semibold w-full flex gap-2 items-center bg-button-gradient px-4 py-1 text-white rounded-sm'>
                      <IoExitOutline className='text-xl'/>
                        <span className='font-bold text-[16px] mt-1'>
                            LogOut
                        </span>
                    </div>
            </MenuItem>
      </Menu>
      {open && <BackDrop />}
    </div>
  );
}

export default UserMenu