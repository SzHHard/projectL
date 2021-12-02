import React from "react";


class MainPanel extends React.Component {

    constructor(props) {
        super(props);


        {
            fetch("/api")
                .then((res) => {
                    console.log(res);
                    return res.json()
                })
                .then((data) => console.log(data));
        }
    }

    render() {

        return (
            <div className='MainContent'>
                <h1>Some ad here</h1>
            </div>
        )
    }
}

export default MainPanel;