import React from 'react';

const tg = window.Telegram.WebApp

function MyTestComponent() {
    // const text1 = `Hello, ${user?.first_name} ${user?.last_name},\n ${user?.username}!`
    const text2 = tg.initDataUnsafe
    return (
        <>
            <div>
                {text2}
            </div>
        </>
    );
}

export default MyTestComponent;