function newtask(){
    const text = document.getElementById("new")
    const ask = document.getElementById("askingpart").value;
    const para = document.createElement("label");
    const broke =document.createElement("br")
    var checkbox = document.createElement("INPUT");
    checkbox.type="checkbox"
    para.innerText = ask;
    text.appendChild(para);
    text.appendChild(checkbox);
    text.appendChild(broke);
    text.appendChild(broke);

}
