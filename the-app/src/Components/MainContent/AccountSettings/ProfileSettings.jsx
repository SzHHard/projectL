import React, { useState } from 'react'





const ProfileSettings = (props) => {

    let [selectedFile, setSelectedFile] = useState(null)

    function fileSelectedHandler(event) {
        let file = event.target.files[0]
        console.log(file);
        setSelectedFile(file);
    }


    function handleSubmit() {
        if(selectedFile)
        props.updateProfileImageTC(selectedFile);
    }

    
    return (
        <div>
            <input type='file' onChange={fileSelectedHandler} />
            <button onClick = {handleSubmit} > Выгрузить аву сервер (надо еще как-то получить файл обратно) </button>

            {/* <img > </img> */}
        </div>
    )
}

export default ProfileSettings;