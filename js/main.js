document.getElementById('modoOscuroBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    var modeIcon = document.getElementById('modoOscuroBtnIcon');
    if (document.body.classList.contains('dark')) {
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});


document.getElementById('btnSubscribirse').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'block';
});

document.getElementById('btnCerrar').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('popup').addEventListener('click', function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});
const nav = document.querySelector ("#nav");
const abrir = document.querySelector ("#abrir");
const cerrar = document.querySelector ("#cerrar");

abrir.addEventListener ("click", () => {
  nav.classList.add("visible");

})

cerrar.addEventListener ("click", () => {
  nav.classList.remove("visible");

})
