let intList = [];
let rejList = [];
let currentStatus = "all";

let totalCount = document.getElementById("totalcount");
let intCount = document.getElementById("intercount");
let rejCount = document.getElementById("rejeccount");

const allBtn = document.getElementById("all-btn");
const intBtn = document.getElementById("int-btn");
const rejBtn = document.getElementById("rej-btn");

const allCards = document.getElementById("allcards");
const mainCon = document.querySelector("main");
const filterSec = document.getElementById("filtered-section");

function calculateCount() {
  totalCount.innerText = allCards.children.length;
  intCount.innerText = intList.length;
  rejCount.innerText = rejList.length;
}
calculateCount();

function toggleStyle(id) {
  currentStatus = id;
  // added bg-white for all
  allBtn.classList.add("bg-white", "text-[#64748B]");
  intBtn.classList.add("bg-white", "text-[#64748B]");
  rejBtn.classList.add("bg-white", "text-[#64748B]");

  // removed bg-blue for all
  allBtn.classList.remove("bg-blue-500", "text-white");
  intBtn.classList.remove("bg-blue-500", "text-white");
  rejBtn.classList.remove("bg-blue-500", "text-white");

  // Added bg-blue for selected button
  const selectedBtn = document.getElementById(id);
  selectedBtn.classList.remove("bg-white", "text-[#64748B]");
  selectedBtn.classList.add("bg-blue-500", "text-white");

  if (id == "int-btn") {
    allCards.classList.add("hidden");
    filterSec.classList.remove("hidden");
    putInt();
  } else if (id == "all-btn") {
    allCards.classList.remove("hidden");
    filterSec.classList.add("hidden");
  } else if ((id = "rej-btn")) {
    allCards.classList.add("hidden");
    filterSec.classList.remove("hidden");
    putRej();
  }
}

mainCon.addEventListener("click", function(event) {
  
  const parentNode = event.target.parentNode.parentNode;
  event.target
  
})

mainCon.addEventListener("click", function (event) {
  if (event.target.classList.contains("int-card-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const companyPost = parentNode.querySelector(".company-post").innerText;
    const postDetails = parentNode.querySelector(".post-details").innerText;
    const status = parentNode.querySelector(".state").innerText;
    const workNote = parentNode.querySelector(".post-work").innerText;

    parentNode.querySelector(".state").innerText = "INTERVIEW";

    const cardInfo = {
      companyName,
      companyPost,
      postDetails,
      status: "INTERVIEW",
      workNote,
    };
    const companyExist = intList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      intList.push(cardInfo);
    }
    rejList = rejList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );
    calculateCount();
    if (currentStatus == "rej-btn") {
      putRej();
    }
  } else if (event.target.classList.contains("rej-card-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const companyPost = parentNode.querySelector(".company-post").innerText;
    const postDetails = parentNode.querySelector(".post-details").innerText;
    const status = parentNode.querySelector(".state").innerText;
    const workNote = parentNode.querySelector(".post-work").innerText;

    parentNode.querySelector(".state").innerText = "REJECTED";

    const cardInfo = {
      companyName,
      companyPost,
      postDetails,
      status: "REJECTED",
      workNote,
    };
    const companyExist = rejList.find(
      (item) => item.companyName == cardInfo.companyName,
    );

    if (!companyExist) {
      rejList.push(cardInfo);
    }
    intList = intList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus == "int-btn") {
      putInt();
    }
    calculateCount();
  }
});

function putInt() {
  filterSec.innerHTML = "";

  for (let int of intList) {
    let div = document.createElement("div");
    div.className = "bg-white rounded-lg flex justify-between items-baseline";
    div.innerHTML = `
          <!-- 1st part card -->
          <div class="space-y-5 p-6">
            <h2 class="company-name text-[#002C5C] font-bold">
              ${int.companyName}
            </h2>
            <p class="company-post text-[#64748B]">React Native Developer</p>
            <p class="post-details text-[#64748B]">
              Remote • Full-time • $130,000 - $175,000
            </p>
            <p class="state text-[#002C5C]">${int.status}</p>
            <p class="post-work text-[#323B49] mt-4">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <!-- Buttons -->
            <div class="flex gap-2">
              <button class="int-card-btn btn btn-outline btn-success">
                Interview
              </button>
              <button class="rej-card-btn btn btn-outline btn-secondary">
                Rejected
              </button>
            </div>
          </div>

          <!-- 2nd part card -->
          <div class="mr-5">
            <button class="text-[#64748B] btn btn-circle">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filterSec.appendChild(div);
  }
}

function putRej() {
  filterSec.innerHTML = "";

  for (let rej of rejList) {
    let div = document.createElement("div");
    div.className = "bg-white rounded-lg flex justify-between items-baseline";
    div.innerHTML = `
          <!-- 1st part card -->
          <div class="space-y-5 p-6">
            <h2 class="company-name text-[#002C5C] font-bold">
              ${rej.companyName}
            </h2>
            <p class="company-post text-[#64748B]">React Native Developer</p>
            <p class="post-details text-[#64748B]">
              Remote • Full-time • $130,000 - $175,000
            </p>
            <p class="state text-[#002C5C]">${rej.status}</p>
            <p class="post-work text-[#323B49] mt-4">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <!-- Buttons -->
            <div class="flex gap-2">
              <button class="int-card-btn btn btn-outline btn-success">
                Interview
              </button>
              <button class="rej-card-btn btn btn-outline btn-secondary">
                Rejected
              </button>
            </div>
          </div>

          <!-- 2nd part card -->
          <div class="mr-5">
            <button class="text-[#64748B] btn btn-circle">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
    `;
    filterSec.appendChild(div);
  }
}
