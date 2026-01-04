(function () {
  "use strict";

  var menuItems = [
    {
      title: "Chicken",
      description: "Delicious grilled chicken with spices."
    },
    {
      title: "Beef",
      description: "Juicy beef cooked to perfection."
    },
    {
      title: "Sushi",
      description: "Fresh sushi rolls with authentic taste."
    }
  ];

  var container = document.getElementById("menu-content");

  menuItems.forEach(function (item) {
    var div = document.createElement("div");
    div.className = "col-md-4 col-sm-6 col-xs-12";

    div.innerHTML =
      '<div class="menu-item">' +
        '<div class="menu-title">' + item.title + '</div>' +
        '<p>' + item.description + '</p>' +
      '</div>';

    container.appendChild(div);
  });

})();
