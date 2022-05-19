The most common way to access an HTML element is to use the id of the element.

The innerHTML property is useful for getting or replacing the content of HTML elements.
The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

If you want to access any element in an HTML page, you always start with accessing the document object.

# Encontrando Elementos do HTML:

        Method	                       ||                Description

document.getElementById(id) Find an element by element id
document.getElementsByTagName(name) Find elements by tag(h1,p,input etc) name
document.getElementsByClassName(name) Find elements by class name

# ------------------------------------------------------------------------------

# Trocando Elementos do HTML:

        Property                       ||               Description

element.innerHTML = new html content || Change the inner HTML of an element
element.attribute = new value || Change the attribute value of an HTML element
element.style.property = new style || Change the style of an HTML element

        Method	                       ||                Description

element.setAttribute(attribute, value) || Change the attribute value of an HTML element

# ------------------------------------------------------------------------------

# Adicionando e deletando elementos

        Method	                       ||                Description

document.createElement(element) || Create an HTML element
document.removeChild(element) || Remove an HTML element
document.appendChild(element) || Add an HTML element
document.replaceChild(new, old) || Replace an HTML element
document.write(text) || Write into the HTML output stream

# ------------------------------------------------------------------------------


# Changing HTML Content
document.getElementById(id).innerHTML = new HTML

const element = document.getElementById("id01");
element.innerHTML = "New Heading";
=> esse ultimo exemplo trocaria o texto presente no elemento que tem a id=id01

# ------------------------------------------------------------------------------


# Changing the Value of an attribute
document.getElementById(id).attribute = new value

<img id="myImage" src="smiley.gif">
document.getElementById("myImage").src = "landscape.jpg";
=> No exemplo acima, a tag img tera o atributo src alterado

# ------------------------------------------------------------------------------

# Dynamic HTML content
É possível criar conteúdo dinâmico tbm
document.getElementById("demo").innerHTML = "Date : " + Date(); </script>

# ------------------------------------------------------------------------------

# JavaScript Forms

A validação de um form em HTML pode ser feita no Javascript. Se um campo do form com 
o nome fname estiver vazio, sera aberto uma mensagem de alerta

<form name="myForm" action="/action_page.php" onsubmit="return validateForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}


Mas pode ser validado também diretamente no código HTML colocando um atributo require

<form action="/action_page.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="Submit">
</form>

# ------------------------------------------------------------------------------


# Criando novos Elementos Nodes no HTML

Cria-se um elemento node primeiro, e então aplica ele a um elemento existente

- Exemplo: 
####
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
</script>
####

Explicação detalhada:
- Esse código ira criar um elemento <p>
               const para = document.createElement("p");

- Para adicionar o elemento <p> primeiro você DEVE criar um text node 
                const node = document.createTextNode("This is new.");

- Acrescentamos o node text no elemento
                para.appendChild(node);
                elemento p recebe o acréscimo da constante node 

- Finalmente deve ser adicionado o novo elemento a um elemento existente
Já existia o elemento div1, então dentro do elemento div1 adicionamos a constante para
que é o elemento p adicionado do texto 'this is new'
                const element = document.getElementById("div1");
                element.appendChild(para);

# ------------------------------------------------------------------------------

# Removendo um Child Node

Remove um Child Node utilizando o comando removeChild()

- Exemplo: 
####
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>
####

Explicação detalhada:
- Temos uma div com dois elementos p dentro dela
                        <div id="div1">
                        <p id="p1">This is a paragraph.</p>
                        <p id="p2">This is another paragraph.</p>
                        </div>

- dizemos que o pai é a div1 criando uma variável 
                        const parent = document.getElementById("div1");

- Dizemos qual é o filho que queremos marcar, no caso o elemento P da id p1
                        const child = document.getElementById("p1");

- Removemos então o filho da pai
                        parent.removeChild(child);
                        parent = nome da constante que seleciona a div1
                        child = nome da constante que seleciona o p1

# ------------------------------------------------------------------------------

