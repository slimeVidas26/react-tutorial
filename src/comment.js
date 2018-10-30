import React from 'react';

function formatDate(date){
    return date.toLocaleDateString();
}

const Comment = (props)=>{
    //return infoUser text date
    return (
        <div className = "Comment">
            <div className = "InfoUser">
                <div className = "Avatar">
                    <img src = {props.author.avatarUrl}
                    alt = {props.author.name}/>

                </div>
                <div className ="UserName">
                {props.author.name}
                </div>
            </div>
            <div className = "Comment-text">
            {props.text}
            </div>
            <div className = "Comment-date">
            {formatDate(props.date)}
            </div>
        </div>
    )
}




export default Comment;