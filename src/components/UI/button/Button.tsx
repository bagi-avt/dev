import React, {ButtonHTMLAttributes, FC} from 'react';

import classes from './Button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
}

const Button: FC<IProps> = ({children, ...props}) => {


    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
};

export default Button;