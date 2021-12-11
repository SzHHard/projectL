import React from 'react';
import { connect } from 'react-redux'
import { deletePlayerCardTC } from '../../../State/PlayersReducer'

const DeleteCardButton = (props) => {

    const handleDelete = () => {
        if (window.confirm('This action can not be undone! Are you sure you want to delete the card?')) {
            props.deletePlayerCardTC(props.id)
        }
    }

    return (
        <button onClick={handleDelete}> Delete </button>
    )
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { deletePlayerCardTC })(DeleteCardButton)