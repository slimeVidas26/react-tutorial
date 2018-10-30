import React from 'react';

function formatDate(date){
    return date.toLocaleDateString();
}

function Avatar(props){
    return(
            <img className = "Avatar"
            src = {props.user.avatarUrl}
            alt = {props.user.name}/>
    )
}

function InfoUser(props){
    return(
            <div className = "InfoUser">
                {/* here goes Avatar */}
                 <Avatar user = {props.user}/>

                <div className ="UserName">
                {props.user.name}
                </div>
            </div>
    )
}

const Comment = (props)=>{
    //return infoUser text date
    return (
        <div className = "Comment">
           <InfoUser user = {props.author}/>
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