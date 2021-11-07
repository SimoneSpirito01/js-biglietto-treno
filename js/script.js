
const prezzoAlKm = 0.21;
const percorsoKm = prompt('Inserisci il numero di Km che vuoi percorrere');
const eta = Math.floor(prompt('Inserisci la tua età'));
const d = new Date();


if (percorsoKm !== null && eta !== null && percorsoKm != '' && eta != '' && !(isNaN(percorsoKm)) && !(isNaN(eta))) {
    document.getElementById('eta').innerHTML = 'La tua età è: ' + eta + ' anni';
    document.getElementById('km').innerHTML = 'Il numero di Km da percorrere è: ' + percorsoKm + 'Km';

    let prezzo = percorsoKm * prezzoAlKm;
    console.log(prezzo);

    let sconto20 = prezzo * 20 / 100;
    console.log(sconto20);

    let sconto40 = prezzo * 40 / 100;
    console.log(sconto40);

    let prezzoFinale;

    if (eta < 18) {
        prezzoFinale = prezzo - sconto20;
    } else if(eta > 65) {
        prezzoFinale = prezzo - sconto40;
    } else {
        prezzoFinale = prezzo;
    }

    prezzoFinale = prezzoFinale.toFixed(2);

    console.log(prezzoFinale);
    document.getElementById('prezzo-finale').innerHTML = 'Il prezzo scontato del viaggio è: ' + prezzoFinale + '&euro;';

    document.getElementById('data').innerHTML = 'Calcolo effettuato in data: ' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
} else {
    alert('Inserisci dei dati validi');
}



