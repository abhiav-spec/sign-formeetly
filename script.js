// Default users array
const defaultUsers = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    email: "amisha@email.com",
    schooling: "Delhi Public School",
    qualification: "B.Tech, CSE",
    linkedin: "https://linkedin.com/in/amisha",
    github: "https://github.com/amisha"
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
    email: "amita@email.com",
    schooling: "St. Xavier's School",
    qualification: "B.A., English",
    linkedin: "https://linkedin.com/in/amita",
    github: "https://github.com/amita"
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    email: "isha@email.com",
    schooling: "Modern School",
    qualification: "M.Sc., Psychology",
    linkedin: "https://linkedin.com/in/isha",
    github: "https://github.com/isha"
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
    email: "ojin@email.com",
    schooling: "Ryan International",
    qualification: "B.Des., Fashion",
    linkedin: "https://linkedin.com/in/ojin",
    github: "https://github.com/ojin"
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    email: "diya@email.com",
    schooling: "Springdales School",
    qualification: "BFA, Fine Arts",
    linkedin: "https://linkedin.com/in/diya",
    github: "https://github.com/diya"
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    email: "tanay@email.com",
    schooling: "DAV Public School",
    qualification: "BBA, Marketing",
    linkedin: "https://linkedin.com/in/tanay",
    github: "https://github.com/tanay"
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
    email: "mohit@email.com",
    schooling: "Bluebells School",
    qualification: "B.Sc., Animation",
    linkedin: "https://linkedin.com/in/mohit",
    github: "https://github.com/mohit"
  }
];

// Load users from localStorage or use default
let users = JSON.parse(localStorage.getItem("users")) || defaultUsers;

// Save users to localStorage whenever changed
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Show users
function showUsers(arr) {
  document.querySelector(".cards").innerHTML = "";
  arr.forEach(function (user, idx) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.position = "relative";

    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const heading = document.createElement("h3");
    heading.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = function (e) {
      e.stopPropagation();
      users = users.filter((u, i) => i !== idx);
      saveUsers();
      showUsers(users);
    };

    content.appendChild(heading);
    content.appendChild(para);
    content.appendChild(removeBtn);

    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    card.addEventListener("click", function () {
      showModal(user);
    });

    document.querySelector(".cards").appendChild(card);
  });
  saveUsers();
}

// Initial render
showUsers(users);

// Search input
let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  showUsers(newUsers);
});

// Modal logic
function showModal(user) {
  document.getElementById("modalPic").src = user.pic;
  document.getElementById("modalName").textContent = user.name;
  document.getElementById("modalBio").textContent = user.bio;
  document.getElementById("modalEmail").textContent = user.email || "N/A";
  document.getElementById("modalSchooling").textContent = user.schooling || "N/A";
  document.getElementById("modalQualification").textContent = user.qualification || "N/A";
  document.getElementById("modalLinkedin").href = user.linkedin || "#";
  document.getElementById("modalGithub").href = user.github || "#";
  document.getElementById("userModal").style.display = "flex";
}

document.querySelector(".close-btn").onclick = function () {
  document.getElementById("userModal").style.display = "none";
};
document.getElementById("userModal").onclick = function (e) {
  if (e.target === this) this.style.display = "none";
};

document.getElementById("aboutBtn").onclick = function () {
  document.getElementById("aboutModal").style.display = "flex";
};
document.getElementById("aboutClose").onclick = function () {
  document.getElementById("aboutModal").style.display = "none";
};
document.getElementById("aboutModal").onclick = function (e) {
  if (e.target === this) this.style.display = "none";
};

document.getElementById("addBtn").onclick = function () {
  document.getElementById("addModal").style.display = "flex";
};
document.getElementById("addClose").onclick = function () {
  document.getElementById("addModal").style.display = "none";
};
document.getElementById("addModal").onclick = function (e) {
  if (e.target === this) this.style.display = "none";
};

document.getElementById("addUserForm").onsubmit = function (e) {
  e.preventDefault();
  const form = e.target;
  const newUser = {
    name: form.name.value,
    pic: form.pic.value,
    bio: form.bio.value,
    email: form.email.value,
    schooling: form.schooling.value,
    qualification: form.qualification.value,
    linkedin: form.linkedin.value,
    github: form.github.value
  };
  users.unshift(newUser);
  saveUsers();
  showUsers(users);
  form.reset();
  document.getElementById("addModal").style.display = "none";
};

// Schedule Meeting Modal logic
document.getElementById("scheduleBtn").onclick = function () {
  populateMemberSelect(users);
  document.getElementById("scheduleModal").style.display = "flex";
};
document.getElementById("scheduleClose").onclick = function () {
  document.getElementById("scheduleModal").style.display = "none";
};
document.getElementById("scheduleModal").onclick = function (e) {
  if (e.target === this) this.style.display = "none";
};

function populateMemberSelect(arr) {
  const select = document.getElementById("memberSelect");
  select.innerHTML = '<option value="">Select member</option>';
  arr.forEach(user => {
    const option = document.createElement("option");
    option.value = user.email;
    option.textContent = user.name + " (" + user.email + ")";
    select.appendChild(option);
  });
}

document.getElementById("searchMember").addEventListener("input", function () {
  const val = this.value.toLowerCase();
  const filtered = users.filter(u => u.name.toLowerCase().includes(val));
  populateMemberSelect(filtered);
});

document.getElementById("scheduleForm").onsubmit = function (e) {
  e.preventDefault();
  const select = document.getElementById("memberSelect");
  const email = select.value;
  if (!email) return alert("Please select a member!");

  const subject = document.getElementById("meetingSubject").value;
  const time = document.getElementById("meetingTime").value;
  const msg = document.getElementById("meetingMsg").value;

  let timeStr = "";
  if (time) {
    const dt = new Date(time);
    timeStr = dt.toLocaleString();
  }

  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Hi,\n\nI'd like to schedule a meeting.\n\nSubject: ${subject}\nTime: ${timeStr}\n\n${msg}\n\nRegards`
  )}`;

  window.open(mailto, "_blank");
  document.getElementById("scheduleModal").style.display = "none";

  // Add to To-Do list
  if (subject && time) addTodo({ subject, time });
};

// To-Do List logic
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Only show unchecked meetings
function renderTodos() {
  const list = document.getElementById("todoList");
  list.innerHTML = "";
  todos.forEach((todo, idx) => {
    if (todo.checked) return; // Hide checked meetings

    const li = document.createElement("li");

    const info = document.createElement("div");
    info.className = "todo-info";
    const subj = document.createElement("span");
    subj.className = "todo-subject";
    subj.textContent = todo.subject;
    const time = document.createElement("span");
    time.className = "todo-time";
    time.textContent = "At: " + new Date(todo.time).toLocaleString();
    info.appendChild(subj);
    info.appendChild(time);

    const timer = document.createElement("span");
    timer.className = "todo-timer";
    timer.id = "timer-" + idx;
    timer.textContent = getCountdown(todo.time);

    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "todo-check";
    check.checked = todo.checked;
    check.onchange = function () {
      todos[idx].checked = check.checked;
      saveTodos();
      renderTodos();
    };

    li.appendChild(info);
    li.appendChild(timer);
    li.appendChild(check);
    list.appendChild(li);
  });

  document.getElementById("todoCount").textContent = `${todos.filter(t=>!t.checked).length} pending`;
  saveTodos();
}

function addTodo(meeting) {
  todos.push({
    subject: meeting.subject,
    time: meeting.time,
    checked: false
  });
  saveTodos();
  renderTodos();
}

function getCountdown(time) {
  const now = Date.now();
  const target = new Date(time).getTime();
  let diff = Math.floor((target - now) / 1000);
  if (diff <= 0) return "Started/Passed";
  const h = Math.floor(diff / 3600);
  const m = Math.floor((diff % 3600) / 60);
  const s = diff % 60;
  return `${h}h ${m}m ${s}s`;
}

// Only update timers for unchecked meetings
setInterval(() => {
  todos.forEach((todo, idx) => {
    if (todo.checked) return;
    const timerEl = document.getElementById("timer-" + idx);
    if (timerEl) {
      timerEl.textContent = getCountdown(todo.time);
    }
  });
}, 1000);

// Show/hide To-Do Bar logic
const todoBar = document.getElementById("todoBar");
const showTodoBtn = document.getElementById("showTodoBtn");
const closeTodoBar = document.getElementById("closeTodoBar");

showTodoBtn.onclick = function () {
  todoBar.style.display = "flex";
  setTimeout(() => todoBar.classList.add("show"), 10);
  renderTodos();
};
closeTodoBar.onclick = function () {
  todoBar.classList.remove("show");
  setTimeout(() => (todoBar.style.display = "none"), 300);
};

// Initial render for todos
renderTodos();