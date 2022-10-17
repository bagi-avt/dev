import React, {Dispatch, FC, MouseEvent, SetStateAction} from 'react';
import classes from './Modal.module.css';

interface IProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode
}

const Modal: FC<IProps> = ({children, visible, setVisible}) => {
    const rootClasses = [classes.modal]
    visible && rootClasses.push(classes.active)

    function onBackgroundClick(event: MouseEvent<HTMLDivElement>) {
        setVisible(false)

    }

    function onContentClick(event: MouseEvent<HTMLDivElement>) {
        event.stopPropagation()
    }

    return <div className={rootClasses.join(' ')} onClick={onBackgroundClick}>
                <div className={classes.modalContent} onClick={onContentClick}>
                    {children}
                </div>
            </div>
};

export default Modal;
