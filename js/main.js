/* SEARCH BAR */

document.addEventListener("DOMContentLoaded", function () {
  var searchButton = document.querySelector(".search__btn");

  searchButton.onclick = function () {
    var searchBar = document.querySelector(".search__bar");

    if (searchBar.style.display === "none") {
      searchBar.style.display = "flex";
    } else {
      searchBar.style.display = "none";
    }
  };
});
