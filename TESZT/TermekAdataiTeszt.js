import Termekek from "../PUBLIC/Termekek.js";  /*Valamit roszil inportálok mert nem jelenik meg a consol log szöveg */
/*Terméklista megjelenítése (Termekek osztály):

Ellenőrizd, hogy a termékek adatai (név, ár stb.) helyesen jelennek meg.
Ellenőrizd, hogy a "Kosárba tesz" gomb helyesen jelenik meg. */

function termekekAdataiMegjelenit() {
    const tesztLista = [
        {
            id: 0,
            nev: "Termék 1",
            ar: 1000,
            kep: "./kepek/placeholder.jpg",
            leiras: "Ez egy példa termék leírása.",
        },
        {
            id: 1,
            nev: "Termék 2",
            ar: 1300,
            kep: "./kepek/placeholder.jpg",
            leiras: "Ez egy példa termék leírása.",
        },
    ];


    const szuloElem = document.createElement("div");
    szuloElem.classList.add("termekek");  
    document.body.appendChild(szuloElem); 


    const termekek = new Termekek(tesztLista, szuloElem);

    termekek.render();

    const termekElemek = document.querySelectorAll(".termek"); 
    console.assert(termekElemek.length === tesztLista.length, `A termékek száma nem egyezik: ${termekElemek.length} vs ${tesztLista.length}`);

    const kosarbaGombok = document.querySelectorAll(".kosarba-tesz");
    console.assert(kosarbaGombok.length > 0, "Nincs 'Kosárba tesz' gomb!");

    console.log("Ez a termekekAdataiMegjelenit() teszt lefutott");/*Valamit roszil inportálok mert nem jelenik meg a consol log szöveg */
}

termekekAdataiMegjelenit();
