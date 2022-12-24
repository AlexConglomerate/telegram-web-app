import React from 'react';
import orangeWhite from "../example.json/orangeWhite";

let tg = window.Telegram.WebApp
tg = orangeWhite

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
    const color = tg.themeParams
    return (
        <>
            <h1 className="text-3xl hover:font-bold text-red-800 mb-3"> The colors you use in the system </h1>
            <div className={`bg-[${color.bg_color}] flex flex-col m-3`}>
                <button className={`bg-[${color.button_color}] rounded my-2`}> button_text_color</button>
                <div className={`text-[${color.hint_color}]`}>Hint text</div>
                <div className={`text-[${color.link_color}]`}>Link text</div>
                <div className={`text-[${color.text_color}]`}>Simple text</div>
                <div className={`bg-[${color.secondary_bg_color}]`}>Secondary bg color</div>
            </div>
            color => {JSON.stringify(color)}
            <hr/>
            tg => {JSON.stringify(color)}
            <hr/>
            window.Telegram => {JSON.stringify(window.Telegram)}
        </>
    )
}

export default ColorsUsing;