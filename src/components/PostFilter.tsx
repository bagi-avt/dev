import React, {ChangeEvent, Dispatch, FC, SetStateAction} from 'react';
import Input from "./UI/input/Input";
import Select, {IOption} from "./UI/select/Select";

type TFilter = {
    sort: string;
    query: string
}

interface IProps {
    filter: TFilter;
    setFilter: Dispatch<SetStateAction<TFilter>>
}

const PostFilter:FC<IProps> = ({filter, setFilter}) => {
    const options: IOption[] = [{value: "title", name: "По названию"}, {value: "body", name: "По описанию"}]

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter({...filter, query: event.target.value})
    }

    function onSelectChange(sort: string) {
        setFilter({...filter, sort: sort})
    }

    return (
        <div>
            <Input placeholder="Search" value={filter.query}  onChange={onInputChange}/>
            <Select value={filter.sort} onChange={onSelectChange} options={options} defaultValue="Сортировка"/>
        </div>
    );
};

export default PostFilter;