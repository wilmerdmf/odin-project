export default function loadMenu() {
  const menuContainerElement = document.createElement("div"),
    menuTextContainerElement = document.createElement("div"),
    menuListElement = document.createElement("ul"),
    dish1 = document.createElement("li"),
    dish2 = document.createElement("li"),
    dish3 = document.createElement("li"),
    dish4 = document.createElement("li"),
    dish5 = document.createElement("li");

  menuContainerElement.classList.add("menu-container");
  menuTextContainerElement.classList.add("menu-text-container");
  menuListElement.classList.add("menu-list");

  dish1.textContent = `Spaghetti Carbonara - $12.99`;
  dish2.textContent = `Grilled Salmon with Asparagus - $15.99`;
  dish3.textContent = `Chicken Caesar Salad - $9.99`;
  dish4.textContent = `Beef Burger with Fries - $11.99`;
  dish5.textContent = `Margherita Pizza - $10.99`;

  menuContainerElement.appendChild(menuTextContainerElement);
  menuTextContainerElement.appendChild(menuListElement);
  menuListElement.append(dish1, dish2, dish3, dish4, dish5);

  return menuContainerElement;
}
