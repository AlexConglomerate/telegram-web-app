import React from 'react';

const tg = window.Telegram.WebApp

function MyTestComponent() {
    // const text1 = `Hello, ${user?.first_name} ${user?.last_name},\n ${user?.username}!`
    const text2 = tg.initDataUnsafe
    // const text3 = tg.initDataUnsafe?.user
    return (
        <>
            Привет! Вывожу через JSON.stringify(text2)
            {/*<div>*/}
            {/*    /!*{text2}*!/*/}
            {/*    Вывожу через JSON.stringify(text3)*/}
            {JSON.stringify(text2)}
            {/*</div>*/}
        </>
    );
}

export default MyTestComponent;