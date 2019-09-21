import React from 'react';
import "./Toggle.css";
import classNames from "classnames";

const Toggle = ({onClick, mobileMenuOpen }: ToggleProps) => (
    <div onClick={onClick} className={getClassName(mobileMenuOpen)}>
        <span/>
        <span/>
        <span/>
    </div>
);

function getClassName (mobileMenuOpen: boolean) {
    return classNames({
       toggle:true,
       open: mobileMenuOpen
    });
}

interface ToggleProps {
    onClick: () => void,
    mobileMenuOpen: boolean
}

export default Toggle;