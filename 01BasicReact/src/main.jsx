import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const ReactElement={            //JS object that react actually wants. So reactElement is nothing but a JS object
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit google"
}

function MyApp(){           //Creating JSX
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement=(
    <a href="http://google.com" target="_blank">Visit Google</a>
)


const aReactElement=React.createElement(        //This is how JSX is converted to JavaScript Object(React Element)
    'a',
    {
        href:"https://google.com",
        target:"_blank"
    },
    "Cick to visit google"
)

createRoot(document.getElementById('root')).render(
    <MyApp/>
)   
//Create root or connection between react and browser DOM
//And take ths React Element and render inside BrowserDOM
