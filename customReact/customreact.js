//Creating our Custom React Function in which we define how things work

function customRender(reactElement,container){

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}

//If we are not using JSX, we need to create React element like this. Else we can use JSX
const reactElement={            //Normal JavaScript Object
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit google"
}

const mainContainer=document.getElementById("root")

customRender(reactElement,mainContainer)