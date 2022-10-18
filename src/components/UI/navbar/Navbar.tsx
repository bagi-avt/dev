import React, { FC } from 'react';
import classes from './Navbar.module.css';
import {Link} from "react-router-dom";

interface IProps {}

const Navbar: FC<IProps> = () => (
  <div className={classes.navbar}>
      <Link to="/about" className={classes["navbar__item"]}>about</Link>
      <Link to="/posts" className={classes["navbar__item"]}>posts</Link>
  </div>
);

export default Navbar;
