import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

const PlayerFiltersBar = (props) => {

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const amountOnAPage = props.amountOnAPage;
        const filterRole = searchParams.get('role')

        props.fetchCardsTC(amountOnAPage, 1, filterRole)

    }, [searchParams.get('role')])



    const mySetQuery = (e) => {
        const filterValue = e.target.value;
        const targetName = e.target.name;
        return setSearchParams({ [targetName]: filterValue })

    }

    return (
        <div>
            <RoleRadio value='' handleChange={mySetQuery}> Все </RoleRadio>
            <RoleRadio value='Top' handleChange={mySetQuery}> Топ </RoleRadio>
            <RoleRadio value='Jungle' handleChange={mySetQuery}> Лес </RoleRadio>
            <RoleRadio value='Mid' handleChange={mySetQuery}> Мид </RoleRadio>
            <RoleRadio value='Bottom' handleChange={mySetQuery}> Поро </RoleRadio>
            <RoleRadio value='Support' handleChange={mySetQuery}> Саппорт </RoleRadio>
        </div>

    )
}

const RoleRadio = (props) => {

    let [searchParams] = useSearchParams();

    return (
        <div>
            <label>
                {props.children}
                <input onChange={props.handleChange} type='radio' name='role' value={props.value} checked={searchParams.get('role') === props.value} />
            </label>
        </div>
    )
}

export default PlayerFiltersBar;