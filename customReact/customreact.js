function customeRender( mainContainer , reactElement ){
    const domEle = document.createElement(reactElement.type) 
 
    domEle.innerHTML = reactElement.children 

    // domEle.setAttribute( 'href' , reactElement.props.href)
    // domEle.setAttribute( 'target' , reactElement.props.target)
    for (const prop in reactElement.props) {
        // console.log(prop);
        // domEle.setAttribute(prop,reactElement.props.prop)
        domEle.setAttribute(prop,reactElement.props[prop])
    }

    mainContainer.appendChild(domEle) ;
}

// below is how react see an element 
const reactElement = {
    type : 'a' , 
    props : {
        href : 'https://codeforces.com/', 
        target : '_blank'
    } , 
    children : 'Codeforces'
}
const mainContainer = document.querySelector('#root')

customeRender( mainContainer , reactElement );