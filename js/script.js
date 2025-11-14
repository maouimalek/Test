const titles = ["Quote", "Pay Fee", "Complete Work", "Rate", "Release Fund"];

const contents = [
  [
    "Tradesperson agrees a quote with the customer upfront",
    "Tradesperson uploads quote to Lorem and sends it to the customer"
  ],
  ["Customer pays securely via platform", "Funds are held until completion"],
  ["Tradesperson finishes the job", "Customer receives automatic updates"],
  ["Customer submits a rating", "Rating improves service quality"],
  ["Funds are released", "Payment is fully completed"]
];

function changeTab(i) {
  document.getElementById("title").textContent = titles[i];

  const box = document.getElementById("content-box");
  box.innerHTML = contents[i]
    .map(t => `<div class='text-item'><li class='bullet'></li>${t}</div>`)
    .join("");

  document.querySelectorAll('.pill').forEach((pill, idx) => {
    pill.classList.toggle('active', idx === i);
  });

  
  document.querySelector('.far-number').textContent =
    String(i + 1).padStart(2, '0');
}

// initialize default
changeTab(0);
