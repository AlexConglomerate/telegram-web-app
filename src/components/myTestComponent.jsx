import React from 'react';

const tg = window.Telegram.WebApp

function MyTestComponent() {
    // const text1 = `Hello, ${user?.first_name} ${user?.last_name},\n ${user?.username}!`
    // const text2 = tg
    // const text3 = tg.initDataUnsafe?.user
    return (
        <div>
            Привет! Вывожу через JSON.stringify(tg)
            <hr/>
            <code>{JSON.stringify(tg)}</code>
            <div></div>
            <h1 className="text-3xl hover:font-bold text-red-800"> Hello world! </h1>
        </div>
    );
}

export default MyTestComponent;