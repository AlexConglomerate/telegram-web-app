import React from 'react';

const tg = window.Telegram.WebApp

function MyTestComponent() {
    // const text1 = `Hello, ${user?.first_name} ${user?.last_name},\n ${user?.username}!`
    // const text2 = tg.initDataUnsafe
    const text3 = tg.initDataUnsafe?.user
    return (
        <>
            <div>
                {/*{text2}*/}
                Вывожу через JSON.stringify(text3)
                {JSON.stringify(text3)}
            </div>
        </>
    );
}

export default MyTestComponent;