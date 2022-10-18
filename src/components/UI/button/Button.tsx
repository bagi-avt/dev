import React, {ButtonHTMLAttributes, FC} from 'react';

import classNames from "classnames";
import classes from './Button.module.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    className?: string
}

const Button: FC<IProps> = ({children, className, ...props}) => {


    return (
        <button {...props} className={classNames(classes.button, className)}>
            {children}
        </button>
    );
};

export default Button;
