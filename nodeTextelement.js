function nodeTextelement() {
  // define the element or html tag as li, normally named node
  var nelement = document.createElement("li");

  // define the text, t to be appended to the node element, normally named textnode
  // in this example, its static text, you can pass whatever dynamic text, array etc. you want
  var t = document.createTextNode("Hello World");

  //append the text or textnode to the node element 
  nelement.appendChild(t);

  //reference the named Id in html body and show the node element appended with the textnode
  document.getElementById("output").appendChild(nelement);
}
