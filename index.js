const main = document.getElementById("main")
main.remove()

const newHeader = document.createElement("h1")
newHeader.setAttribute('id', 'victory')

const textNode = document.createTextNode('Brian Isaboke is the champion')
newHeader.appendChild(textNode)
