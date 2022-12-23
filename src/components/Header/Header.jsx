import React from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css';

const Header = () => {
    const {user, onClose} = useTelegram();
    const text = `Hello, ${user?.first_name} ${user?.last_name},\n ${user?.username}!`
    return (
        <div className={'header'}>
            <i>{text}</i>
            <Button onClick={onClose}>Закрыть</Button>
        </div>
    );
};

export default Header;
