import React, { useState } from 'react';
import { io } from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Outlet } from 'react-router-dom';
import { ChatContent, ChatInput } from './Chatting';

import 'styles/Chat/Chat.scss';

const socket = io('/');

function Chat() {
  const [chatView, setChatView] = useState<boolean>(false);

  return (
    <>
      <div className="chat_box">
        {chatView ? (
          <div className="chat_unroll">
            <div className="chat_bar">
              <div className="chat_title">
                <h2>땡땡의 채팅방</h2>
              </div>
              <div>
                <button
                  type="submit"
                  className="chat_close"
                  onClick={() => {
                    setChatView(!chatView);
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
            {/* <ChatContent /> */}
            <ChatInput />
          </div>
        ) : (
          <button
            type="submit"
            className="chat_roll"
            onClick={() => {
              setChatView(!chatView);
            }}
          >
            채팅창 작아진 상태
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Chat;
