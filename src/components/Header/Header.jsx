import React from 'react';
import Button from "../Button/Button";
import {useTelegramFunc} from "../../hooks/useTelegramFunc";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegramFunc();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>

    );
};

export default Header;
