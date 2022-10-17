import React, { FC } from 'react';
import classes from './Loader.module.css';

interface IProps {}

const Loader: FC<IProps> = () => (
  <div className={classes.loader}/>
);

export default Loader;
