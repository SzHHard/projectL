import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

const PlayerFiltersBar = (props) => {

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const amountOnAPage = props.amountOnAPage;
        const currentPage = parseInt(searchParams.get('page'));
        const filterRole = searchParams.get('role')

        //console.log('filterRole: ' + filterRole)

        props.fetchCardsTC(amountOnAPage, (currentPage || 1), filterRole)

    }, [searchParams.get('role')])



    const mySetQuery = (e) => {
        let page = searchParams.get('page')
        if (e.target.checked) {
            const filterValue = e.target.value;
            const targetName = e.target.name;
            return setSearchParams({ page, [targetName]: filterValue })
        } else {
            return setSearchParams({ page })
        }
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