const myButton = document.querySelector("button");
console.log(myButton);

myButton.textContent = "Search";

myButton.addEventListener("click", function () {
  console.log("button clicked");
});

const myHeader = document.querySelector("h1");

myHeader.addEventListener("mouseover", function (event) {
  console.log(event);
});

const page = [
  { page: "home" },
  { page: "Home" },
  { page: "about" },
  { page: "About" },
  { page: "breathing" },
  { page: "Breathing" },
  { page: "breathing?" },
  { page: "Breathing?" },
  { page: "5 things?" },
  { page: "5 things" },
  { page: "five things?" },
  { page: "five things" },
  { page: "ice?" },
  { page: "Ice?" },
  { page: "ice" },
  { page: "Ice" },
];

function renderQuery(targetHTML) {
  const Pageinfo = document.querySelector;
  ("[data-page]");
  Pageinfo.innerHTML = targetHTML;
}

function generatePageHTML(targetPageinfo) {
  return targetPageinfo;
}

const searchinput = document.querySelector("fa fa-search");

searchinput.addEventListener("any", function (event) {
  const searchinput = document.querySelector(input).map((pageinfo) => {
    return '<li class="Pageinfo"></li>';
  }).join;
});

document
  .querySelector('["data-Pageinfo-form"]')
  .addEventListener("submit", (e) => {
    e.preventDefault();
    renderQuery(generatePageHTML(PageinfoFilter(e.target.search.value)));
  });

function PageinfoFilter(targetPAgeinfo = page) {
  return Pageinfo.filter((page) => {
    return Pageinfo.includes(targetPageinfo);
  });
}
