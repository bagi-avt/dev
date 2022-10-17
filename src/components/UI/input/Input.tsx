import React, {FC, InputHTMLAttributes} from 'react';


import classes from './Input.module.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input: FC<IProps> = ({...props}) => {
    return (
        <input className={classes.input} {...props} type="text"/>
    );
};

export default Input;