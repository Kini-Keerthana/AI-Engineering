// PAGE SWITCHING FUNCTION
let wrongTopics = [];
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

// QUIZ GENERATOR
let totalQuiz = 0;
let totalScore = 0;

let currentQuestions = [];
let correctAnswers = [];
// function generateQuiz() {

//   const userClass = localStorage.getItem("userClass");
//   const container = document.getElementById("quizOutput");

//   container.innerHTML = "";
//   document.getElementById("feedbackSection").style.display = "none";

//   if (!userClass) {
//     alert("Please select your class first in Subjects!");
//     return;
//   }
const quizBank = {

"1st Class":[
{q:"2 + 1 = ?",options:["1","2","3","4"],answer:"3"},
{q:"Color of sky?",options:["Blue","Red","Green","Black"],answer:"Blue"},
{q:"A for?",options:["Apple","Ball","Cat","Dog"],answer:"Apple"}
],

"2nd Class":[
{q:"5 - 2 = ?",options:["2","3","4","5"],answer:"3"},
{q:"How many days in week?",options:["5","6","7","8"],answer:"7"},
{q:"Sun gives?",options:["Water","Light","Stone","Dust"],answer:"Light"}
],

"3rd Class":[
{q:"10 ÷ 2 = ?",options:["2","5","10","8"],answer:"5"},
{q:"Largest planet?",options:["Mars","Earth","Jupiter","Moon"],answer:"Jupiter"},
{q:"Plants need?",options:["Plastic","Water","Smoke","Iron"],answer:"Water"}
],

"4th Class":[
{q:"12 + 8 = ?",options:["18","20","22","24"],answer:"20"},
{q:"Human has how many legs?",options:["1","2","3","4"],answer:"2"},
{q:"Birds can?",options:["Swim","Fly","Drive","Cook"],answer:"Fly"}
],

"5th Class":[
{q:"15 - 5 = ?",options:["5","10","15","20"],answer:"10"},
{q:"Earth is a?",options:["Star","Planet","Moon","Comet"],answer:"Planet"},
{q:"Water freezes at?",options:["0°C","50°C","100°C","10°C"],answer:"0°C"}
],

"6th Class":[
{q:"Sun rises in?",options:["East","West","North","South"],answer:"East"},
{q:"Largest animal?",options:["Dog","Elephant","Blue Whale","Cat"],answer:"Blue Whale"},
{q:"Water formula?",options:["CO2","H2O","O2","NaCl"],answer:"H2O"}
],

"7th Class":[
{q:"7 × 6 = ?",options:["36","42","48","56"],answer:"42"},
{q:"Gas needed for breathing?",options:["Oxygen","Nitrogen","CO2","Helium"],answer:"Oxygen"},
{q:"India capital?",options:["Delhi","Mumbai","Chennai","Kolkata"],answer:"Delhi"}
],

"8th Class":[
{q:"Speed = ?",options:["Distance/Time","Mass×Force","Work×Time","None"],answer:"Distance/Time"},
{q:"Chemical symbol O?",options:["Gold","Oxygen","Iron","Silver"],answer:"Oxygen"},
{q:"Triangle sides?",options:["2","3","4","5"],answer:"3"}
],

"9th Class":[
{q:"Newton unit of?",options:["Force","Speed","Mass","Energy"],answer:"Force"},
{q:"Cell discovered by?",options:["Newton","Hooke","Einstein","Darwin"],answer:"Hooke"},
{q:"SI unit of length?",options:["Meter","Kg","Second","Volt"],answer:"Meter"}
],

"10th Class":[
{q:"Ohm's Law?",options:["V=IR","F=ma","E=mc2","P=VI"],answer:"V=IR"},
{q:"?144 ?",options:["10","11","12","13"],answer:"12"},
{q:"Na symbol?",options:["Iron","Sodium","Gold","Silver"],answer:"Sodium"}
],

"+1":[
{q:"Derivative of x²?",options:["x","2x","x²","1"],answer:"2x"},
{q:"Unit of Force?",options:["Newton","Joule","Watt","Pascal"],answer:"Newton"},
{q:"pH neutral value?",options:["5","7","9","1"],answer:"7"}
],

"+2":[
{q:"Integration of x?",options:["x²/2","x","2x","1"],answer:"x²/2"},
{q:"Acceleration unit?",options:["m/s²","m","kg","N"],answer:"m/s²"},
{q:"Avogadro number?",options:["6.02e23","10","100","1"],answer:"6.02e23"}
],

// "Undergraduate":[
// {q:"Stack follows?",options:["FIFO","LIFO","Random","Priority"],answer:"LIFO",topic=stack},
// {q:"SQL used for?",options:["Database","AI","OS","Network"],answer:"Database"},
// {q:"OS manages?",options:["CPU","Memory","Process","All"],answer:"All"}
// ],
"Undergraduate":[
{q:"Stack follows?",options:["FIFO","LIFO","Random","Priority"],answer:"LIFO",topic:"Stack"},
{q:"SQL used for?",options:["Database","AI","OS","Network"],answer:"Database",topic:"DBMS"},
{q:"OS manages?",options:["CPU","Memory","Process","All"],answer:"All",topic:"Operating System"}
],
"Postgraduate":[
{q:"AI stands for?",options:["Artificial Intelligence","Auto Input","Advanced Internet","None"],answer:"Artificial Intelligence"},
{q:"Machine Learning is subset of?",options:["AI","DBMS","OS","Networks"],answer:"AI"},
{q:"Neural Network inspired from?",options:["Human Brain","CPU","Robot","Cloud"],answer:"Human Brain"}
]

};
function generateQuiz() {

  const userClass = localStorage.getItem("userClass");
  const userInterest = localStorage.getItem("userInterest");

  const container = document.getElementById("quizOutput");

  container.innerHTML = "";

  if (!userClass) {
    alert("Please select class in Subjects first!");
    return;
  }

  container.innerHTML = `<h3>Quiz for ${userClass}</h3>`;

  /* ================= 6TH CLASS ================= */
  if (userClass === "6th Class") {

    currentQuestions = [
      {
        q: "Which planet is known as Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
      },
      {
        q: "5 + 7 = ?",
        options: ["10", "11", "12", "13"],
        answer: "12"
      },
      {
        q: "Water freezes at?",
        options: ["0°C", "50°C", "100°C", "10°C"],
        answer: "0°C"
      }
    ];
  }

  /* ================= 10TH CLASS ================= */
  else if (userClass === "10th Class") {

    /* ---- MATHS QUIZ ---- */
    if (userInterest === "Maths") {

      currentQuestions = [
        {
          q: "Quadratic equation degree?",
          options: ["1", "2", "3", "4"],
          answer: "2",
          topic: "Mathematics"
        },
        {
          q: "Value of ?144 ?",
          options: ["10", "11", "12", "14"],
          answer: "12",
          topic: "Mathematics"
        },
        {
          q: "15 × 6 = ?",
          options: ["60", "75", "90", "95"],
          answer: "90",
          topic: "Mathematics"
        }
      ];
    }

    /* ---- SCIENCE QUIZ ---- */
    else if (userInterest === "Science") {

      currentQuestions = [
        {
          q: "Ohm’s Law relates?",
          options: ["V, I, R", "Mass & Force", "Speed & Time", "Heat & Work"],
          answer: "V, I, R",
          topic: "Physics"
        },
        {
          q: "Chemical symbol of Sodium?",
          options: ["So", "Na", "S", "Sn"],
          answer: "Na",
          topic: "Chemistry"
        },
        {
          q: "Unit of Force?",
          options: ["Newton", "Joule", "Watt", "Pascal"],
          answer: "Newton",
          topic: "Physics"
        }
      ];
    }

    /* ---- DEFAULT (IF NO INTEREST) ---- */
    else {
      alert("Please select Interest first!");
      return;
    }
  }

  /* ================= +1 / +2 ================= */
  else if (userClass === "+1" || userClass === "+2") {

    currentQuestions = [
      {
        q: "Derivative of x²?",
        options: ["x", "2x", "x²", "1"],
        answer: "2x"
      },
      {
        q: "Unit of Force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        answer: "Newton"
      },
      {
        q: "pH of neutral solution?",
        options: ["5", "7", "9", "1"],
        answer: "7"
      }
    ];
  }

  /* ================= UNDERGRAD ================= */
  else if (userClass === "Undergraduate") {

    currentQuestions = [
      {
        q: "Stack follows?",
        options: ["FIFO", "LIFO", "Random", "Priority"],
        answer: "LIFO"
      },
      {
        q: "SQL used for?",
        options: ["Database", "Networking", "AI", "OS"],
        answer: "Database"
      },
      {
        q: "OS manages?",
        options: ["Hardware", "Memory", "Processes", "All"],
        answer: "All"
      }
    ];
  }

  /* ================= DISPLAY ================= */

  currentQuestions.forEach((item, index) => {

    container.innerHTML += `
      <div style="margin-bottom:15px;">
        <p><strong>Q${index + 1}:</strong> ${item.q}</p>

        ${item.options.map(opt => `
          <label>
            <input type="radio" name="q${index}" value="${opt}">
            ${opt}
          </label><br>
        `).join("")}

      </div>
    `;
  });

  container.innerHTML += `
    <button onclick="submitQuiz()">Submit Quiz</button>
  `;
}

function submitQuiz() {

  let score = 0;
  let unanswered = false;

  currentQuestions.forEach((item, index) => {

    const selected = document.querySelector(`input[name="q${index}"]:checked`);

    if (!selected) {
      unanswered = true;
    } 
    else if (selected.value.trim() === item.answer.trim()) {
      score++;
    }
else {
  wrongTopics.push(item.topic);
}

  });

  if (unanswered) {
    alert("Please answer all questions!");
    return;
  }

  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);

  totalQuiz++;
  totalScore += percentage;

  document.getElementById("totalQuiz").innerText = totalQuiz;
  document.getElementById("avgScore").innerText =
    Math.round(totalScore / totalQuiz) + "%";

  document.getElementById("quizOutput").innerHTML +=
    `<h3>Your Score: ${percentage}%</h3>`;

  window.lastScore = percentage;
  // ? UPDATE WEAK AREA IN DASHBOARD
if (wrongTopics.length > 0) {

  const weak =
    [...new Set(wrongTopics)].join(", ");

  document.getElementById("weakArea").innerText = weak;

} else {

  document.getElementById("weakArea").innerText =
    "No Weak Area";
}

  showBarGraph(score, total - score);

  document.getElementById("feedbackSection").style.display = "block";
}


function analyzePerformance() {

  // Check quiz attempted or not
  if (totalQuiz === 0) {
    document.getElementById("analysisResult").innerHTML =
      "Take at least one quiz first!";
    return;
  }

  // Get class from localStorage
  const userClass = localStorage.getItem("userClass") || "Not Selected";

  let suggestion = "";

  // If no wrong topics
  if (!wrongTopics || wrongTopics.length === 0) {
    suggestion = "? Great performance! No major weak areas detected.";
  } 
  else {

    // Remove duplicate topics
    const uniqueTopics = [...new Set(wrongTopics)];

    // Shuffle topics
    const shuffledTopics = uniqueTopics
      .sort(() => Math.random() - 0.5);

    // Pick max 2 weak topics
    const selectedWeakTopics = shuffledTopics.slice(0, 2);

    suggestion =
      "?? Focus more on: <strong>" +
      selectedWeakTopics.join(", ") +
      "</strong>";
  }

  // Display result
  document.getElementById("analysisResult").innerHTML = `
      <p><strong>Class:</strong> ${userClass}</p>
      <p>${suggestion}</p>
  `;
}

async function askAI() {
  const question = document.getElementById("userQuestion").value;

  if (question.trim() === "") {
    alert("Please enter a question.");
    return;
  }

  document.getElementById("aiResponse").innerHTML =
    "<p>Thinking...</p>";

  try {
    const response = await fetch("http://localhost:5000/ask-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();

    document.getElementById("aiResponse").innerHTML =
      `<p><strong>Your Question:</strong> ${question}</p>
       <p><strong>AI Response:</strong> ${data.reply}</p>`;
  } catch (error) {
    document.getElementById("aiResponse").innerHTML =
      "Error connecting to AI server.";
  }
}
// ? ADAPTIVE WORK AREA LOGIC
const matrix = {
  "Difficult": {
    "Weak": "Revise basic concepts.",
    "Average": "Provide step-by-step explanation.",
    "Strong": "Improve presentation clarity."
  },
  "Neutral": {
    "Weak": "Give extra practice questions.",
    "Average": "Continue current path.",
    "Strong": "Introduce advanced problems."
  },
  "Easy": {
    "Weak": "Increase difficulty slightly.",
    "Average": "Move to next level.",
    "Strong": "Unlock advanced modules."
  }
};

function updateWorkArea(score, feedback) {

  const workArea = document.getElementById("workArea");

  let performanceLevel = "";

  if (score < 40) {
    performanceLevel = "Weak";
  } 
  else if (score <= 75) {
    performanceLevel = "Average";
  } 
  else {
    performanceLevel = "Strong";
  }

  let difficultyLevel = feedback;

  const action = matrix[difficultyLevel][performanceLevel];

  workArea.innerHTML = `
      <h3>Adaptive Learning Action</h3>
      <p><strong>Performance:</strong> ${performanceLevel}</p>
      <p><strong>Quiz Difficulty:</strong> ${difficultyLevel}</p>
      <p><strong>Recommendation:</strong> ${action}</p>
  `;
}

function submitFeedback() {

  const feedback = document.getElementById("userFeedback").value;
  const score = window.lastScore;

  if (!feedback) {
    alert("Please select feedback");
    return;
  }

  // ? SAVE DATA
  localStorage.setItem("quizScore", score);
  localStorage.setItem("userFeedback", feedback);

  // ? UPDATE WORK AREA
  updateWorkArea(score, feedback);

  // ? AUTO DASHBOARD
  setTimeout(() => {
    showPage("dashboard");
  }, 1500);
}

let chartInstance = null;


function showBarGraph(correct, wrong) {

  const ctx = document.getElementById("resultChart");
  ctx.style.display = "block";

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Correct", "Wrong"],
      datasets: [{
        data: [correct, wrong],
        backgroundColor: ["#4CAF50", "#F44336"]
      }]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}
// Switch Login/Register Tabs
function switchAuth(type) {

  document.getElementById("loginForm").classList.remove("active-form");
  document.getElementById("registerForm").classList.remove("active-form");

  document.getElementById("loginTab").classList.remove("active-tab");
  document.getElementById("registerTab").classList.remove("active-tab");

  if (type === "login") {
    document.getElementById("loginForm").classList.add("active-form");
    document.getElementById("loginTab").classList.add("active-tab");
  } else {
    document.getElementById("registerForm").classList.add("active-form");
    document.getElementById("registerTab").classList.add("active-tab");
  }
}

// Register
function registerUser() {

  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return;
  }

  // localStorage.setItem("userEmail", email);
  // localStorage.setItem("userPassword", password);
  localStorage.setItem("userName", name);
localStorage.setItem("userEmail", email);
localStorage.setItem("userPassword", password);

  alert("Account Created Successfully!");
  switchAuth("login");
}
function loginUser() {

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");
  const userName = localStorage.getItem("userName");

  if (email === storedEmail && password === storedPassword) {

    document.getElementById("authSection").style.display = "none";
    document.querySelector("header").style.display = "block";
    document.getElementById("userSection").style.display = "flex";

    document.getElementById("userAvatar").innerText =
      userName.charAt(0).toUpperCase();

    document.getElementById("profileName").innerText =
      "Name: " + userName;

    document.getElementById("profileEmail").innerText =
      "Email: " + storedEmail;

    showPage("home");
  }
  else {
    alert("Invalid Credentials!");
  }
}


function logoutUser() {

  localStorage.clear();

  document.getElementById("authSection").style.display = "flex";
  document.querySelector("header").style.display = "none";
  document.getElementById("userSection").style.display = "none";

}
function toggleDropdown() {
  const dropdown = document.getElementById("profileDropdown");

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// function submitEducation() {
//     const level = document.getElementById("educationLevel").value;

//     if(level === "") {
//         alert("Please select your class");
//         return;
//     }

//     localStorage.setItem("userClass", level);

//     document.getElementById("educationForm").style.display = "none";

//     showContentChoice();
// }
function submitEducation() {

  const level =
    document.getElementById("educationLevel").value;

  if(level === "") {
      alert("Please select your class");
      return;
  }

  localStorage.setItem("userClass", level);

  document.getElementById("educationForm").style.display = "none";

  // ? NEW STEP
  document.getElementById("interestForm").style.display = "block";
}
function submitInterest() {

  const interest =
    document.getElementById("interestChoice").value;

  if(!interest){
    alert("Select your interest");
    return;
  }

  localStorage.setItem("userInterest", interest);

  document.getElementById("interestForm").style.display = "none";

  showContentChoice();
}


const jeeTopics = ["Physics Mechanics", "Chemistry Organic", "Mathematics Calculus", "Physics Optics", "Problem Solving"];
function showRecommendedTopics(level) {

  let topics = topicsByClass[level] || [];

  // +1/+2 & JEE interest override
  if ((level === "+1" || level === "+2") && localStorage.getItem("jeeInterest") === "Yes") {
    topics = jeeTopics;
  }

  const container = document.getElementById("subjects");

  let html = `<h2>Recommended Topics for ${level}</h2><ul style="list-style: disc; text-align:left; margin:20px auto; width:70%;">`;

  topics.forEach(topic => {
    html += `<li>${topic}</li>`;
  });

  html += `</ul>`;

  container.innerHTML += html;

  showPage("subjects");
}
function showContentChoice() {
    document.getElementById("contentChoice").style.display = "block";
}

// function showVideos() {

//     const videos = [
//         "https://www.youtube.com/embed/dQw4w9WgXcQ",
//         "https://www.youtube.com/embed/9bZkp7q19f0"
//     ];

//     document.getElementById("contentTitle").innerText = "Recommended Videos";

//     document.getElementById("contentPageOutput").innerHTML = `
//         <iframe width="300" height="200" src="${videos[0]}" allowfullscreen></iframe>
//         <iframe width="300" height="200" src="${videos[1]}" allowfullscreen></iframe>
//     `;

//     showPage("contentPage"); // ? open new page
// }
function showVideos() {

  const userInterest = localStorage.getItem("userInterest");

  let videos = "";

  /* ========= MATHS VIDEOS ========= */
  if (userInterest === "Maths") {

    videos = `
      <h2>?? Maths Learning Videos</h2>

      <div class="video-container">

        <div class="video-card">
          <h3>Maths Concept Video 1</h3>
          <iframe width="400" height="225"
          src="https://www.youtube.com/embed/O6XGRFLXu8E"
          allowfullscreen></iframe>
        </div>

        <div class="video-card">
          <h3>Maths Concept Video 2</h3>
          <iframe width="400" height="225"
          src="https://www.youtube.com/embed/8GzY3lX--54"
          allowfullscreen></iframe>
        </div>

      </div>
    `;
  }

  /* ========= SCIENCE VIDEOS ========= */
  else if (userInterest === "Science") {

    videos = `
      <h2>?? Science Learning Videos</h2>

      <div class="video-container">

        <div class="video-card">
          <h3>Science Concept Video 1</h3>
          <iframe width="400" height="225"
          src="https://www.youtube.com/embed/kHVAk96r05Y"
          allowfullscreen></iframe>
        </div>

        <div class="video-card">
          <h3>Science Concept Video 2</h3>
          <iframe width="400" height="225"
          src="https://www.youtube.com/embed/-oZFYsxfsIw"
          allowfullscreen></iframe>
        </div>

      </div>
    `;
  }

  document.getElementById("contentPageOutput").innerHTML = videos;
  showPage("contentPage");
}
// function showVideos() {

//   const userClass = localStorage.getItem("userClass");

//   let videos = "";

//   if (userClass === "10th Class") {

//     videos = `
//       <h2>?? Recommended Learning Videos (10th Class)</h2>

//       <div class="video-container">

//         <div class="video-card">
//           <h3>?? Maths Concept Learning</h3>
//           <iframe width="400" height="225"
//           src="https://www.youtube.com/embed/O6XGRFLXu8E"
//           frameborder="0" allowfullscreen>
//           </iframe>
//         </div>

//         <div class="video-card">
//           <h3>?? Science Concept Learning</h3>
//           <iframe width="400" height="225"
//           src="https://www.youtube.com/embed/kHVAk96r05Y"
//           frameborder="0" allowfullscreen>
//           </iframe>
//         </div>

//       </div>
//     `;
//   }

//   document.getElementById("contentPageOutput").innerHTML = videos;
//   showPage("contentPage");
// }
// function showVideos() {

//   const interest = localStorage.getItem("userInterest");

//   let videos = [];

//   if (interest === "Maths") {
//     videos = [
//       "https://www.youtube.com/embed/1a8QXf6s3xE",
//       "https://www.youtube.com/embed/Zi-Q0t4gMC8"
//     ];
//   }

//   else if (interest === "Science") {
//     videos = [
//       "https://www.youtube.com/embed/7xT7fZ5Z4J8",
//       "https://www.youtube.com/embed/WXkzY6Yz5Ks"
//     ];
//   }

//   else {
//     videos = [
//       "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     ];
//   }

//   document.getElementById("contentTitle").innerText =
//     "Recommended Videos";

//   document.getElementById("contentPageOutput").innerHTML =
//     videos.map(v =>
//       `<iframe width="300" height="200" src="${v}" allowfullscreen></iframe>`
//     ).join("");

//   showPage("contentPage");
// }
function showMaterial() {

  const interest =
    localStorage.getItem("userInterest");

  let material = "";

  if (interest === "Maths") {
    material = `
      <li>?? JEE Mathematics Notes</li>
      <li>?? Physics Problems</li>
      <li>?? Advanced Practice</li>
    `;
  }

  else if (interest === "Science") {
    material = `
      <li>?? Biology Notes</li>
      <li>?? NEET Preparation</li>
      <li>?? Diagrams Practice</li>
    `;
  }

  else {
    material = `
      <li>?? Basic Study Notes</li>
      <li>?? Practice Questions</li>
    `;
  }

  document.getElementById("contentTitle").innerText =
    "Recommended Study Material";

  document.getElementById("contentPageOutput").innerHTML =
    `<ul style="text-align:left;width:300px;margin:auto;">
      ${material}
     </ul>`;

  showPage("contentPage");
}

// function showMaterial() {

//     const userClass = localStorage.getItem("userClass");

//     document.getElementById("contentTitle").innerText =
//         "Study Material for " + userClass;

//     document.getElementById("contentPageOutput").innerHTML = `
//         <ul style="text-align:left; width:300px; margin:auto;">
//             <li>?? Chapter Notes</li>
//             <li>?? Important Questions</li>
//             <li>?? Practice Problems</li>
//         </ul>
//     `;

//     showPage("contentPage"); // ? open new page
// }
function showEducationForm() {
    document.getElementById("educationForm").style.display = "block";
}
function goToQuiz() {

  showPage("quiz");   // open quiz page
  generateQuiz();     // auto generate quiz

}
// ? LOAD ADAPTATION WHEN DASHBOARD OPENS
window.addEventListener("load", () => {

  const score = localStorage.getItem("quizScore");
  const feedback = localStorage.getItem("userFeedback");

  if (score && feedback) {
    updateWorkArea(parseInt(score), feedback);
  }

});
