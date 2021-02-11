import React from 'react';
import {IChatRoom} from "../../../Interfaces";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";


const ChatRoom = ({name, id, userId}: IChatRoom) => {
    const loginInfo = useSelector((state: any) => state.login);
    console.log(userId, loginInfo.id, loginInfo.id == userId);
     
    return (
        <div className="card card-body text-center col-md-2">
            <h4>#{id}</h4>
            <h4>{name}</h4>
            <div>
                <button className="btn btn-primary"><Link to={`${id}`}> Go to chatroom</Link></button>
                {Number(loginInfo.id) === userId && (
                    <>
                        <button className="btn btn-warning"><Link to={`${id}/edit`}>Edit</Link></button>
                        <button className="btn btn-danger"><Link to={`${id}/delete`}>Delete</Link></button>
                    </>
                )}
            </div>

        </div>
    );
};

export default ChatRoom;
