// console.log("hello")

let element=document.createElement('li');
// let text=document.createTextNode('Mayur');
// element.appendChild('text')

element.className='myclass';
element.id='createdLi';
element.setAttribute('title','mytitle');
element.innerHTML="<b>myur</b>"

let ul=document.querySelector('ul.this');
ul.appendChild(element)
// console.log(ul)
// console.log(element)

let elem2=document.createElement('h3');
elem2.id='elem2';
elem2.className="elem2";
let tnode=document.createTextNode('mayur is good boy');
elem2.appendChild(tnode);
element.replaceWith(elem2)

let myul=document.getElementById('myul')
 myul.replaceChild(element,document.getElementById('mad'))