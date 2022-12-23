import React from 'react';

const tg = window.Telegram.WebApp

function MyTestComponent(props) {
    // const text1 = `Hello, ${user?.first_name} ${user?.last_name},\n ${user?.username}!`
    const text2 = tg
    return (
        <>
            {text2}
        </>
    );
}

export default MyTestComponent;