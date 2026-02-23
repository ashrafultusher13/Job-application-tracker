let intList = [];
let rejList = [];

let totalCount = document.getElementById("totalcount");
let intCount = document.getElementById("intercount");
let rejCount = document.getElementById("rejeccount");

const allBtn = document.getElementById("all-btn");
const intBtn = document.getElementById("int-btn");
const rejBtn = document.getElementById("rej-btn");

const allCards = document.getElementById("allcards");
const mainCon = document.querySelector("main");

function calculateCount() {
  totalCount.innerText = allCards.children.length;
  intCount.innerText = intList.length;
  rejCount.innerText = rejList.length;
}
calculateCount();

function toggleStyle(id) {
  allBtn.classList.add("bg-white", "text-[#64748B]");
  intBtn.classList.add("bg-white", "text-[#64748B]");
  rejBtn.classList.add("bg-white", "text-[#64748B]");

  allBtn.classList.remove("bg-blue-500", "text-white");
  intBtn.classList.remove("bg-blue-500", "text-white");
  rejBtn.classList.remove("bg-blue-500", "text-white");

  // Added bg-blue for selected button
  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("bg-white", "text-[#64748B]");
  selectedBtn.classList.add("bg-blue-500", "text-white");
}
