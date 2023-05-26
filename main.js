//1.

const btn = document.createElement("button")
btn.setAttribute('id',"myBtn")
const btnText = document.createTextNode("Click Me")

const divEl = document.createElement("div")
divEl.setAttribute('id',"myDiv")
const h1El = document.createElement("h1")
const textEl = document.createTextNode("Random Text")

btn.addEventListener("click", function(){
  divEl.style.display = "none"
})


h1El.appendChild(textEl)
divEl.appendChild(h1El)
btn.appendChild(btnText)
document.body.append(divEl,btn)

//2.

const divEl = document.createElement("div")
divEl.setAttribute('id',"card")

const h2El = document.createElement("h2")
const textEl = document.createTextNode("Gandalf")

const aEl = document.createElement("a")
aEl.setAttribute('href',"#")
const textForLink = document.createTextNode("Go to profile")

aEl.appendChild(textForLink)
h2El.appendChild(textEl)
divEl.append(h2El,aEl)

document.body.appendChild(divEl)

//3.


const q1 = document.createElement("h2")
const q1Text = document.createTextNode("რომელი თეგი გამოიყენება მისამართების დასამატებლად?")

const a1 = document.createElement("button")
const a1Text = document.createTextNode("<a>")

const a2 = document.createElement("button")
const a2Text = document.createTextNode("<div>")

const a3 = document.createElement("button")
const a3Text = document.createTextNode("<p>")


q1.appendChild(q1Text)
a1.appendChild(a1Text)
a2.appendChild(a2Text)
a3.appendChild(a3Text)

a1.addEventListener("click",() => {
  a1.style.background = "green"
  a1.style.color = "white"
})

a2.addEventListener("click",() => {
  a2.style.background = "red"
  a2.style.color = "white"
  a1.style.background = "green"
  a1.style.color = "white"
})

a3.addEventListener("click",() => {
  a3.style.background = "red"
  a3.style.color = "white"
  a1.style.background = "green"
  a1.style.color = "white"
})

document.body.append(q1,a1,a2,a3)