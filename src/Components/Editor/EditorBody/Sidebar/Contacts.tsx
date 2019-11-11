import React from "react";

import githubIcon from "../../../../icons/github.svg";
import telegramIcon from "../../../../icons/telegram.svg";
import emailIcon from "../../../../icons/email.svg";
import "./Contacts.css";

export default () => (
    <p className="contacts">
        <a href="https://github.com/simonedegiacomi" target="_blank" rel="noopener noreferrer" >
            <img src={githubIcon} className="contact-icon" alt="GitHub icon"/>
            Github
        </a><br/>
        <a href="https://t.me/simonedegiacomi" target="_blank" rel="noopener noreferrer" >
            <img src={telegramIcon} className="contact-icon" alt="Telegram icon"/>
            Telegram
        </a><br/>
        <button onClick={() => showEmailAddress('simonedegiacomi97', 'gmail.com')}>
            <img src={emailIcon} className="contact-icon" alt="Email icon"/>
            Email
        </button>
    </p>
);

function showEmailAddress(localPart: string, domain: string) {
    alert(`${localPart}@${domain}`);
}
