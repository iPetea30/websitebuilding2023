//var vs let
//1.

var primaVariabila = 20;
var primaVariabila = 40; //redeclareare este permisa dar nu este recomandata
//primaVariabila = 60; // reasignarea erte ok , schimba valoarea variabilei
console.log(primaVariabila);
let primulNumar = 10;
//let primulNumar = 17;// redeclararea cu let genereaza eroare: SyntaxError
primulNumar = 27;// reasignarea erte ok , schimba valoarea variabilei
console.log(primulNumar);

//2.
function myTest() {
    //declar local o variabila
    var masina1;
    masina1 = 'Ferrari';
    console.log('Masina mea noua este: ' + masina1);
}
//console.log('Masina ta este: ' + masina1);//ReferenceError
function myTest() {
    //declar local o variabila
    let masina1;
    masina1 = 'Ferrari';
    console.log('Masina mea noua este: ' + masina1);
}
//console.log('Masina ta este: ' + masina1);// ReferenceError
//2.1
{
    //declar global o variabila chiar daca se afla intre { }
    var culoare = 'rosie';
    console.log('Masina mea noua este: ' + culoare);

}
console.log('Masina ta este: ' + culoare);
{
    //declar local o variabila  intre { }
    let model = '125 s';
    console.log('Modelul masinei mele este: ' + model);

}
//console.log('Modelul masinei tale este: ' + model);

//2.2 declarata global
var masina = 'Dacia';

function myCar(){
    console.log('Masina mea din garaj este: '+ masina);
}

console.log('Masina mea este: '+ masina);

let masina2 = 'Opel';

function myCar(){
    console.log('Masina mea din garaj este: '+ masina2);
}

console.log('Masina mea este: '+ masina2);
//3.
function salutvar() {
    console.log(foo); // undefined
    var foo = "Salut Var";
    console.log(foo); 
  }
  
  salutvar();
  function salutlet() {
    console.log(foo); // ReferenceError
    let foo = "Salut let";
    console.log(foo); 
  }
  
  salutlet();

  //4
  let nume = 'Popescu';
  const prenume='Dan';
  nume ='Ionescu';
  prenume = 'Ion';
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: 'hover', //false
  keyboard:true,
  touch: true
})


var id;
$("#modalForm").on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget); //Button that triggered the modal
    const email = button.data('email') //need to find the button and get email
    const nume = button.data('nume') //need to find the button and get name
    $(".modal-body #email").val( email );
    $(".modal-body #name").val( nume );
    id = button.attr('id');
    // var datainfo = document.getElementById(id);
     alert(JSON.stringify(button[0]));
    // alert(JSON.stringify(datainfo));
    
   
  })
  $("#modalForm").on('hidden.bs.modal', function(event) {
   
    alert('Modalul s-a inchis');
    document.getElementById(id).classList.remove('btn-primary');
    document.getElementById(id).classList.add('btn-success');
  })
  
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

// document.addEventListener("DOMContentLoaded", function(){
//     var myScrollSpy = new bootstrap.ScrollSpy(document.body, {
//         target: "#navbar_top"
//     })
// });

$(document).ready(function () {
    $("body").scrollspy({
        target: "#navbar_top"
    })
});


        $(document).ready(function () {
            $('[data-bs-toggle="tooltip"]').tooltip();
            $('[data-bs-toggle="popover"]').popover(); 
        });
        
 
           //pur javascript
        // document.addEventListener("DOMContentLoaded", function(){
        //     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        //     var tooltipList = tooltipTriggerList.map(function(element){
        //         return new bootstrap.Tooltip(element);
        //     });
        // });
    
        // document.addEventListener("DOMContentLoaded", function(){
        //     var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        //     var popoverList = popoverTriggerList.map(function(element){
        //         return new bootstrap.Popover(element);
        //     });
        // });
       

(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()
