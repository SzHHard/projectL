import React from 'react';

const FullInfoAboutPlayer = (props) => {



    return (
        <div>

            <div>

                <div>
                    {props.profileUrl}
                </div>

                <div>
                    nickName   {props.nickName}
                </div>

                <div>
                    briefInfo:   {props.briefInfo}
                </div>

                <div>
                    fullInfo:  {props.fullInfo}
                </div>

                <div>
                    Main Roles: {props.mainRoles.join(', ')}
                </div>

                <div>
                    offRoles: {props.offRoles.join(', ')}
                </div>


                <div>
                    rank:   {props.rank}
                </div>

                <div>
                    categories:  {props.categoriesString}
                </div>
            </div>
        </div>
    )
}

// { "userId": "61acbf9255c508b754055bf0",
// "cardData": {
// "profileUrl": "url",
// "nickName": "szh",
// "briefInfo": "brief Info Here",
// "fullInfo": "full info here",
// "rank": "diamond24",
// "sex": "male",
// "mainRoles": ["jungler"],
// "offRoles": ["mid"],
// "categories": ["cat1", "cat2"]
// }
// } 


export default FullInfoAboutPlayer;
