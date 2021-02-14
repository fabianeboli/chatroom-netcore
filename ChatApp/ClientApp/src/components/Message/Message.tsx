import React from 'react';
import {IMessage} from "../../Interfaces";

const Message = ({author, date, text}: IMessage) => {


    return (
        <div className="card card-body">
            <div>
                <h4>{author}</h4> <p>{date}</p>
            </div>

            <div>
                {text}
            </div>
        </div>
    );
};

export default Message;
