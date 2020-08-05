// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.
 */

const createDOMElement = (tagName) => {
  const element = document.createElement(tagName);
  return element;
};

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

const addPTag = (text) => {
  const paragraph = document.querySelector("p");
  paragraph.innerText = `${text}`;
};

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

const addElementWithClass = (tagName, text, className) => {
  const element = document.createElement(tagName);
  element.innerText = text;
  element.className = className;
  document.body.appendChild(element);
};

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

const addElementWithMultipleClasses = (tagName, text, classArray) => {
  const element = document.createElement(tagName);
  element.innerText = text;

  document.body.appendChild(element);

  for (i = 0; i < classArray.length; i++) {
    element.classList.add(classArray[i]);
  }
};
/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

const buildAList = (listType, listClass, listElNum) => {
  const li = document.createElement(listType);
  li.className = listClass;

  document.body.appendChild(li);

  for (i = 0; i < listElNum; i++) {
    let newlistItem = document.createElement("li");
    newlistItem.innerText = `Item ${listElNum[i]}`;
    li.appendChild(newlistItem);
  }
};

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

const prependLiToList = (text, liClass) => {
  const prependList = document.querySelector("ul");
  const newElement = document.createElement("li");
  newElement.innerText = text;
  newElement.className = liClass;

  prependList.insertBefore(newElement, prependList.childNodes[0]);
};

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

const pushToSelectedPosition = (text, listClass, position) => {
  const pushPosList = document.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = text;
  li.className = listClass;

  pushPosList.insertBefore(li, pushPosList.childNodes[position]);
};

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

const deleteSelectedElements = (parentSelector, childSelector) => {
  let parent = document.getElementsByClassName(parentSelector);
  let children = document.querySelectorAll(childSelector);

  children.forEach((child) => {
    child.parentNode.removeChild(child);
  });
};
