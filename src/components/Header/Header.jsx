import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <div>12345</div>
            <div>{JSON.stringify(user)}</div>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;
