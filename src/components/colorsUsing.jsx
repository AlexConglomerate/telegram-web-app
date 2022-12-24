import React from 'react';
import orangeWhite from "../example.json/orangeWhite";

let tg = window.Telegram.WebApp
// tg = orangeWhite

function ColorsUsing(props) {
    const themeParams = {
        "bg_color": "#ffffff",
        "button_color": "#f6562e",
        "button_text_color": "#ffffff",
        "hint_color": "#999999",
        "link_color": "#de3510",
        "secondary_bg_color": "#f1f1f1",
        "text_color": "#000000"
    }
    return (
        <>
            <h1 className="text-3xl hover:font-bold text-red-800 mb-3"> The colors you use in the system </h1>
            <div className={`bg-[${tg.themeParams.bg_color}] flex flex-col m-3`}>
                <button className={`bg-[${tg.themeParams.button_color}] rounded my-2`}> button_text_color</button>
                <div className={`text-[${tg.themeParams.hint_color}]`}>Hint text</div>
                <div className={`text-[${tg.themeParams.link_color}]`}>Link text</div>
                <div className={`text-[${tg.themeParams.text_color}]`}>Simple text</div>
                <div className={`bg-[${tg.themeParams.secondary_bg_color}]`}>Secondary bg color</div>
            </div>
        </>
    )
}

export default ColorsUsing;