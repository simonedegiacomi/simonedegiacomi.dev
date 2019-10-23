import React from "react";

import githubIcon from "../../../../icons/github.svg";
import telegramIcon from "../../../../icons/telegram.svg";
import emailIcon from "../../../../icons/email.svg";
import "./Contacts.css";

export default () => (
    <p className="contacts">
        <a href="https://github.com/simonedegiacomi" target="_blank">
            <img src={githubIcon} className="contact-icon"/>
            Github
        </a><br/>
        <a href="https://t.me/simonedegiacomi" target="_blank">
            <img src={telegramIcon} className="contact-icon"/>
            Telegram
        </a><br/>
        <a href="#" onClick={() => showEmailAddress('simonedegiacomi97', 'gmail.com')}>
            <img src={emailIcon} className="contact-icon"/>
            Email
        </a>
    </p>
);

function showEmailAddress(localPart: string, domain: string) {
    alert(`${localPart}@${domain}`);
}
