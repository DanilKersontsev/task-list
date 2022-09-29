const form = document.querySelector('form')
const taskinput = document.querySelector('#task')
form.addEventListener('submit', addtask)

function addtask(e){
    console.log(taskinput.value)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskinput.value))
    li.className = 'collection-item'
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('x'))
    a.className = "blue-text text-darken-2 secondary-content"
    a.setAttribute('href', '#')
    li.appendChild(a)
    console.log(li)
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    taskinput.value = ""
    e.preventDefault()
}