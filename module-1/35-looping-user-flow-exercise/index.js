// install and  import "readline-sync" npm package before you do exercises

const readlineSync = require("readline-sync");
const chalk = require("chalk");

let selectedItems = {
  book: "",
  movie: "",
  nextTrip: "",
};

const movies = [
  "The Invisible Man",
  "Never Rarely Sometimes Always",
  "Gretel & Hansel",
  "No time to die",
  "Bloodshot",
  "Onward",
  "Sonic",
];

const books = [
  "My Dark Vanessa",
  "Uncanny Valley",
  "Weather",
  "The night watchman",
  "All adults here",
  "Dear Edward",
  "Grown ups",
];

const countries = [
  "Italy",
  "France",
  "Germany",
  "Spain",
  "Portugal",
  "Denmark",
  "Netherland",
];

/**
 * Exercise 1
 *
 * create a sub menu "Books" where you need to render a list of {books}.
 * User should be able to select one. On selection store the response
 * to {user.book}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

const displayBooks = () => {
  console.log(chalk.cyanBright("--------------------"));
  console.log(chalk.greenBright("These are the books in our library "));
  console.log(chalk.cyanBright("--------------------"));

  const booksIndex = readlineSync.keyInSelect(
    books,
    null,
    { cancel: "Main Menu" },
    "Choose a book "
  );

  if (books[booksIndex] !== undefined) {
    selectedItems.book = books[booksIndex];
    console.log(`You chose ${chalk.yellowBright(books[booksIndex])}`);
  } else {
    mainMenu();
  }
};

/**
 * Exercise 2
 *
 * create a sub menu "Movies" where you need to render a list of {movies}.
 * User should be able to select one. On selection store the response
 * to {user.movie}.
 *
 * NOTE: You need to add option to "go back", to main menu
 */

const displayMovies = () => {
  console.log(chalk.redBright("--------Netflix------------"));
  console.log(chalk.greenBright("These are the books in our library "));
  console.log(chalk.redBright("--------------------"));

  const moviesIndex = readlineSync.keyInSelect(
    movies,
    null,
    { cancel: "Main Menu" },
    "Pick a movie "
  );

  if (movies[moviesIndex] !== undefined) {
    selectedItems.movie = movies[moviesIndex];
    console.log(`You chose ${chalk.whiteBright(movies[moviesIndex])}`);
  } else {
    mainMenu();
  }
};

/**
 * Exercise 3
 *
 * create a sub menu "Next destination" where you need to render a list
 * of {countries}. User should be able to select one. On selection store
 * the response to {user.nextTrip}.
 *
 * NOTE: You need to add option to go back, to main menu
 */

const displayCountries = () => {
  console.log(chalk.blueBright("-------------------------"));
  console.log(chalk.dim("Countries"));
  console.log(chalk.blueBright("--------------------"));

  const countriesIndex = readlineSync.keyInSelect(
    countries,
    null,
    { cancel: "Main Menu" },
    "Pick your next destination "
  );

  if (countries[countriesIndex] !== undefined) {
    selectedItems.nextTrip = countries[countriesIndex];
    console.log(`You chose ${chalk.magentaBright(countries[countriesIndex])}`);
  } else {
    mainMenu();
  }
};

/**
 * Exercise 4
 *
 * create a top menu with categories: "Books", "Movies", "Next destination"
 * so user can pick one. User also should have the option "Exit".
 * When the user pick "Exit", log selected items.
 */

const mainMenu = () => {
  const categories = ["Books", "Movies", "Next Destination"];
  const categoriesIndex = readlineSync.keyInSelect(
    categories,
    null,
    { cancel: "Exit" },
    "Please choose one category"
  );

  if (categories[categoriesIndex] === "Books") {
    displayBooks();
  } else if (categories[categoriesIndex] === "Movies") {
    displayMovies();
  } else if (categories[categoriesIndex] === "Next destination") {
    displayCountries();
  } else {
    console.log(chalk.yellow.bgBlack("Bye, have a beautiful time"));
  }
};

const init = () => {
  mainMenu();
};

init();
