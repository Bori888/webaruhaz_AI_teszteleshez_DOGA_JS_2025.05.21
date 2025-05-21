import Model from "../PUBLIC/Model.js";
//removeKosarItem(id): ellenőrizd, hogy el tudsz-e távolítani egy adott terméket a kosárból. Mi van akkor, ha nem létező ID-jú terméket akarsz eltávolítani?
function removeKosarItem_TESZT() {
  const model = new Model();

  const termek = {
    id: 1,
    nev: "Termék 1",
    ar: 1000,
    kep: "./kepek/placeholder.jpg",
    leiras: "Ez egy példa termék leírása.",
  };
  console.log("removeKosarItem_TESZT()")
  model.addKosar(termek);

  console.log("Termék hozzáadva");

  let kosarLista = model.getKosarLista();
  console.assert(
    kosarLista.length === 1,
    "A kosárban 1 terméknek kell lennie!"
  );
  console.log("Kosár hossza:", kosarLista.length);

  model.removeKosarItem(99);
  console.log("Eltávolítottunk egy nem létező terméket");

  kosarLista = model.getKosarLista();
  console.assert(
    kosarLista.length === 1,
    "A kosárnak változatlanul 1 terméket kell tartalmaznia, mivel az ID nem létezett."
  );
  console.log("Kosár hossza:", kosarLista.length);

  model.removeKosarItem(1);
  console.log("Eltávolítottunk egy létező terméket");

  kosarLista = model.getKosarLista();
  console.assert(
    kosarLista.length === 0,
    "A kosárnak üresnek kell lennie, miután eltávolítottuk az egyetlen terméket."
  );
  console.log("Kosár hossza:", kosarLista.length);

  console.log("lefutott az removeKosarItem_TESZT");/*Valamit roszul inportálok mert nem jelenik meg a consol log szöveg */
}
removeKosarItem_TESZT();
