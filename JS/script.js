const assignedTask = document.querySelector(".text-left .task-count");

const completedTask = document.querySelector(".flex .task-count");
let assignedTaskCount = parseInt(assignedTask.innerText);

let completedTaskCount = parseInt(completedTask.innerText);

const taskButtons = document.querySelectorAll(".complete-btn");

const activityLog = document.querySelector(".bg-gray-200 .mt-4");

taskButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    

    if (assignedTaskCount > 0) {
      assignedTaskCount--;

      assignedTask.innerText = assignedTaskCount;
    }

    completedTaskCount++;

    completedTask.innerText = completedTaskCount;

    event.target.classList.remove("bg-purple-600", "text-white");

    event.target.classList.add("bg-gray-200","text-gray-700","cursor-not-allowed"
    );
    const taskCard = event.target.closest(".task-card");

    alert(
      `"${taskCard.querySelector("h2").innerText}" Board updated Successfully!`
    );

    
    const completedTasks = document.querySelectorAll(
        ".complete-btn.bg-gray-200"
      ).length;
    
    if (completedTasks === taskButtons.length) {
        alert("All tasks completed Successfully!");
    }
   


    history(`"${taskCard.querySelector("h2").innerText}" You Have completed  The Task `); 
  });
});

const history = (message) => {
  const currentTime = new Date().toLocaleString(); 

  const historyCreate = document.createElement("p");

  historyCreate.classList.add("text-sm", "text-black","my-8" ,"font-semibold");

  historyCreate.innerHTML = `${message} - <span class="text-gray-500" >${currentTime}</span>`;

  activityLog.appendChild(historyCreate);
};

const clearHistory = document.querySelector(".bg-blue-600");

clearHistory.addEventListener("click", () => {
  activityLog.innerHTML = "";
});

const themeButton = document.getElementById("theme-button");
const body = document.body;

const colors = [ "bg-red-200","bg-green-200","bg-blue-200","bg-yellow-200","bg-purple-200","bg-pink-200", "bg-indigo-200","bg-sky-200","bg-gray-400", ];

themeButton.addEventListener("click", function () {
  colors.forEach((color) => {
    body.classList.remove(color);
  });

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  body.classList.add(randomColor);
});

const discover = document.getElementById("discover-new");

if (discover) {
  discover.addEventListener("click", () => {
    window.location.href = "blog.html";
  });

  const back = document.getElementById("back-to-desk");
  if (back) {
    back.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }
}

const month = document.getElementById("current-month");
const day = document.getElementById("current-day");
const year = document.getElementById("current-year");
const week = document.getElementById("current-week");

const now = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Saturday"];

const currentMonth = monthNames[now.getMonth()];
const currentDay = now.getDate();
const currentYear = now.getFullYear();
const currentWeek = weekNames[now.getDay()];


month.textContent = currentMonth;
day.textContent = currentDay;
year.textContent = currentYear;
week.textContent = currentWeek;


