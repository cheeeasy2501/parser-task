class Parser {
  getTitle(selector) {
    return document.querySelector(selector).innerHTML;
  }

  getImagesList(selector) {
    const imagesHtmlList = document.querySelectorAll(selector);
    let images = {
      original: null,
      all: [],
    };
    imagesHtmlList.forEach((element, index) => {
      const link = element.getAttribute("src");
      if (index > 0) {
        if(index === 1){
          images.original = link;
        }
        images.all.push(link);
      }
    });

    return images;
  }

  getPrices(currentSelector, previousSelector) {
    let prices = {
      previous: null,
      current: null,
    };
    prices.current = document.querySelector(currentSelector).innerHTML;
    prices.previous = document.querySelector(previousSelector).innerHTML;
    
    return prices;
  }
}
const titleSelector = ".product-hero > h1";
const imageSelector = ".amp-images > .amp-frame > .fullImageContainer > .img";
const currentSelector = "span[data-id='current-price']";
const previousSelector = "span[data-id='previous-price']";

let parser = new Parser();
let title = parser.getTitle(titleSelector);
let images = parser.getImagesList(imageSelector);
let prices = parser.getPrices(currentSelector, previousSelector);
console.log("Title:", title);
console.log("Images:", images);
console.log("Prices:", prices);
