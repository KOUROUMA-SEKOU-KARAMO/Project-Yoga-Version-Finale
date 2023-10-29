
/**
 * 
 * @param {string} tagName 
 * @param {Object} attributes 
 * @returns {HTMLElement}
 */
export function createElement(tagName, attributes={}){
     
    const element=document.createElement(tagName)

    for(let [attribute , value ] of Object.entries(attributes)){
         
        element.setAttribute(attribute,value)
    }


    return element
}