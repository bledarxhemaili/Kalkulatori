
let rezultati = document.getElementById("result");

function shtypeVleren(vlera){
    if(rezultati.textContent.includes('Infinity')){
        fshi();
    }
    rezultati.textContent += vlera;
}

function kalkulo() {
    try {
        rezultati.textContent = eval(rezultati.textContent);
    } catch (error) {
        rezultati.textContent = 'Error';
    }
  }

  function fshi() {
    rezultati.textContent = " ";
  }