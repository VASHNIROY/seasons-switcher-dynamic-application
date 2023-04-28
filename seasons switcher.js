let seasonSmallElement = document.getElementById("seasonSmallImage");
let seasonMediumElement = document.getElementById("seasonMediumImage");

let springSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

let summerSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

let autumnSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

let winterSmallImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function springBtn() {
    seasonSmallElement.src = springSmallImage;
    seasonMediumElement.src = springMediumImage;
}

function summerBtn() {
    seasonSmallElement.src = summerSmallImage;
    seasonMediumElement.src = summerMediumImage;
}

function autumnBtn() {
    seasonSmallElement.src = autumnSmallImage;
    seasonMediumElement.src = autumnMediumImage;
}

function winterBtn() {
    seasonSmallElement.src = winterSmallImage;
    seasonMediumElement.src = winterMediumImage;
}