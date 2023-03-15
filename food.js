const foods = [
  { name: "Poulet pac", value: 2 },
  { name: "Cuisse de Poulet", value: 2 },
  { name: "Escalope de Dinde", value: 2 },
  { name: "Rôti de porc", value: 2 },
  { name: "Sauté d'agneau", value: 2 },
  { name: "Boeuf bourguignon", value: 2 },
  { name: "Bavette d'aloyau", value: 2 },
  { name: "Lapin", value: 2 },
  { name: "Saucisse de Toulouse", value: 2 },
  { name: "Jamboneau", value: 2 },
  { name: "Cuisse de Poulet (Surgelées)", value: 1 },
  { name: "Escalope de dinde (Surgelées)", value: 1 },
  { name: "Sauté de dinde (Surgelées)", value: 1 },
  { name: "Paupiette de veau (Surgelées)", value: 1 },
  { name: "Sauté de porc (Surgelées)", value: 1 },
  { name: "Côte de porc (Surgelées)", value: 1 },
  { name: "Cordon bleu (Surgelées)", value: 1 },
  { name: "Cuisse de lapin (Surgelées)", value: 1 },
  { name: "Kebab (Surgelées)", value: 1 },
  { name: "Boulettes de bœuf (Surgelées)", value: 1 },
  { name: "Egrené de bœuf (Surgelées)", value: 1 },
  { name: "Steak haché 20% MG (Surgelées)", value: 1 },
  { name: "Filet de Dorade (Surgelées), value: 1 "},
  { name: "Raie (Surgelées), value: 1 "},
  { name: "Filet de Saumon (Surgelées), value: 1 "},
  { name: "Darne de Saumon (Surgelées), value: 1 "},
  { name: "Filet de Cabillaud (Surgelées), value: 1 "},
  { name: "Filet de lieu (Surgelées), value: 1 "},
  { name: "Merlu (Surgelées), value: 1 "},
  { name: "Aiglefin (Surgelées), value: 1 "},
  { name: "Calamars à la romaine (Surgelées), value: 1 "},
  { name: "Filet meunière (Surgelées), value: 1 "},
  { name: "Steak de thon (Surgelées), value: 1 "},
  { name: "Saumonette (Surgelées), value: 1 "},
  { name: "Poisson pané (Surgelées), value: 1 "},
  { name: "Crevette cocktail (Surgelées), value: 1 "},
  { name: "Coquille de poisson (Surgelées), value: 1 "},
  { name: "Feuilleté de poisson (Surgelées), value: 1 "},
  { name: "Steak fromager (Surgelées), value: 1 "},
  { name: "Crêpes au fromage/champignons/jambon (Surgelées), value: 1 "},
  { name: "Steak végétal (Surgelées), value: 1 "},
  { name: "Saucisse végétale (Surgelées), value: 1 "},
  { name: "Moussaka (Surgelées), value: 1 "},
  { name: "Brandade de morue (Surgelées), value: 1 "},
  { name: "Lasagne (Surgelées), value: 1 "},
  { name: "Pizza (Surgelées), value: 1 "},
  { name: "Quiche (Surgelées), value: 1 "},
  { name: "Friands (Surgelées), value: 1 "},
  { name: "Omelette (Surgelées), value: 1 "},
  { name: "Persil (Surgelées), value: 1 "},
  { name: "Carottes rondelles (Surgelées), value: 1 "},
  { name: "Petit pois-carottes (Surgelées), value: 1 "},
  { name: "Choux-fleurs (Surgelées), value: 1 "},
  { name: "Haricots verts (Surgelées), value: 1 "},
  { name: "Ratatouille cuisinée (Surgelées), value: 1 "},
  { name: "Poireaux rondelles (Surgelées), value: 1 "},
  { name: "Brocolis (Surgelées), value: 1 "},
  { name: "Aubergines en tranches (Surgelées), value: 1 "},
  { name: "Salsifis (Surgelées), value: 1 "},
  { name: "Oignons (Surgelées), value: 1 "},
  { name: "Echalottes (Surgelées), value: 1 "},
  { name: "Cubes de courges (Surgelées), value: 1 "},
  { name: "Champignons de Paris (Surgelées), value: 1 "},
  { name: "Potimarrons (Surgelées), value: 1 "},
  { name: "Epinards branches (Surgelées), value: 1 "},
  { name: "Epinards hachés (Surgelées), value: 1 "},
  { name: "Lanières de poivrons (Surgelées), value: 1 "},
  { name: "Ail (Surgelées), value: 1 "},
  { name: "Poêlée de légumes (Surgelées), value: 1 "},
  { name: "Courgettes en rondelles (Surgelées), value: 1 "},
  { name: "Frites (Surgelées), value: 1 "},

];

const game = document.getElementById("game");
const result = document.createElement("div");
result.id = "result";
game.appendChild(result);

function checkResult() {
  if (currentScore > 0) {
    result.innerHTML = "Vous avez gagné !";
    result.style.backgroundColor = "green";
  } else {
    result.innerHTML = "Vous avez perdu.";
    result.style.backgroundColor = "red";
  }
  result.style.display = "block";
}

scoreValue.addEventListener("change", checkResult);
