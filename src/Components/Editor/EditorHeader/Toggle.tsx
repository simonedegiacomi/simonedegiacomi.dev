import React from 'react';

const Toggle = ({onClick, mobileMenuOpen }: ToggleProps) => (
    <div onClick={onClick}>
        Toggle {mobileMenuOpen}
    </div>
);

interface ToggleProps {
    onClick: () => void,
    mobileMenuOpen: boolean
}

export default Toggle;