import React, { FC } from 'react';
import classes from './Pagination.module.css';
import classNames from "classnames";
import {usePagesArray} from "../../../hooks/usePosts";

interface IProps {
    totalPages: number,
    page: number,
    changePage:(p:number)=>void
}

const Pagination: FC<IProps> = ({totalPages, page, changePage}) => {
    const pagesArray = usePagesArray(totalPages);

    return (
        <div className={classes.pagination}>
            {pagesArray.map((p: number) =>
                    <span
                        key={p}
                        className={classNames(classes.page, p === page ? classes.active : '')}
                        onClick={() => changePage(p)}
                    >
                        {p}
            </span>
            )}
        </div>
    )
};

export default Pagination;
