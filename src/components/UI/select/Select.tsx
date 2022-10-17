import React, {ChangeEvent, FC} from 'react';
import classes from './Select.module.css';

export interface IOption {
    value: string,
    name: string
}

interface IProps {
    options: IOption[],
    defaultValue: string,
    value: string,
    onChange: (sort: string)=> void
}

const Select: FC<IProps> = ({options, defaultValue, value, onChange}) => {
    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        onChange(event.target.value)
    }

    return(
        <select value={value} className={classes.select} onChange={onSelectChange}>
            <option disabled value="">{defaultValue}</option>
            {options.map((option: IOption) => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    )
};

export default Select;
