import React from 'react';

const tg = window.Telegram.WebApp

function MyTestComponent() {
    // const text1 = `Hello, ${user?.first_name} ${user?.last_name},\n ${user?.username}!`
    // const text2 = tg
    // const text3 = tg.initDataUnsafe?.user
    return (
        <>
            Привет! Вывожу через JSON.stringify(tg)
            <hr/>
            {JSON.stringify(tg, null, 7)}
        </>
    );
}

export default MyTestComponent;