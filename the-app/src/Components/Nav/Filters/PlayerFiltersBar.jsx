import React, { useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

const PlayerFiltersBar = (props) => {

    let [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const amountOnAPage = props.amountOnAPage;
        const currentPage = parseInt(searchParams.get('page'));
        const filterRole = searchParams.get('role')

        console.log('filterRole: ' +  filterRole)
        
        props.fetchCardsTC(amountOnAPage, (currentPage || 1), filterRole)

    }, [searchParams.get('role')])

  
  
    const mySetQuery = (e) => {
        let  page = searchParams.get('page')
        if (e.target.checked) {
            const filterValue = e.target.value;
            const targetName = e.target.name;
            return setSearchParams({ page, [targetName]: filterValue })
        } else {
            return setSearchParams({page})
        }
    }

    return (
        <div>
            <label>
                Топ
                <input onChange={mySetQuery} name='role' type='checkbox' value='Top' />
            </label>
            <label>
                Лес
                <input type='checkbox' name='role' value='Jungle' />
            </label>
            <label>
                Мид
                <input type='checkbox' name='role' value='Mid' />
            </label>
            <label>
                Бот
                <input type='checkbox' name='role' value='Bottom' />
            </label>

            <label>
                Саппорт
                <input type='checkbox' name='role' value='Support' />
            </label>
        </div>
    )
}
export default PlayerFiltersBar;