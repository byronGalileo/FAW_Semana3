function init() {
    var elems = document.querySelectorAll('select');
    var instancesSel = M.FormSelect.init(elems, {});

    var elems = document.querySelectorAll('.datepicker');
    var instancesPic = M.Datepicker.init(elems, {});

    var formularioDiv = document.getElementById("formulario2");
    formularioDiv.style.display = "none";
  };


function form1(){
    var formularioDiv = document.getElementById("formulario2");
    formularioDiv.style.display = "none";

    var formularioDiv = document.getElementById("formulario1");
    formularioDiv.style.display = "block";
}

function form2(){
    var formularioDiv = document.getElementById("formulario1");
    formularioDiv.style.display = "none";

    var formularioDiv = document.getElementById("formulario2");
    formularioDiv.style.display = "block";
}