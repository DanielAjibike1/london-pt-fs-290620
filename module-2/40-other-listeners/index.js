/**
 * Exercise 1
 *
 * create an event listener which will show
 * a popup(add class "open" to "popup")
 * when you double click on ".trigger"
 */

document.querySelector(".trigger").ondblclick = function () {
  document.querySelector(".popup").classList.add("open");
};

/**
 * Exercise 2
 *
 * create an event listener which will toggle
 * zoom class on image when you double click on
 * image container(".img")
 */

document.querySelector(".img").ondblclick = function () {
  document.querySelector(".img img").classList.toggle("zoom");
};

/**
 * Exercise 3
 *
 * create an event listener which will stop/start music player
 * when you switch tab/come back to the tab in the browser.
 *
 * NOTE: to test please interact with the page, and switch tabs
 */
