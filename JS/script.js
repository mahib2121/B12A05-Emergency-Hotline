const increment = document.getElementById("heart_BTN")
let conut = 0;
increment.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}
const increment1 = document.getElementById("heart_BTN1")
increment1.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}

const increment2 = document.getElementById("heart_BTN2")
increment2.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}

const increment3 = document.getElementById("heart_BTN3")
increment3.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}
const increment4 = document.getElementById("heart_BTN4")
increment4.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}
const increment5 = document.getElementById("heart_BTN5")
increment5.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}

const increment6 = document.getElementById("heart_BTN6")
increment6.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}
const increment7 = document.getElementById("heart_BTN7")
increment7.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}
const increment8 = document.getElementById("heart_BTN8")
increment8.onclick = function () {
    conut++;
    defaultCnt.textContent = conut;
}

// calling function 
document.addEventListener("DOMContentLoaded", function () {
    var coinSpan = document.getElementById("coinCount");
    var coins = parseInt(coinSpan.textContent, 10) || 100;

    var historyContainer = document.querySelector(".space-y-5");

    document.querySelectorAll(".CallBtn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (coins < 20) {
                alert("Not enough coins to make a call.");
                return;
            }

            let card = btn.closest(".card");
            let name = card.querySelector("p.font-semibold").innerText;
            let number = card.querySelector(".text-4xl").innerText;

            alert("Calling " + name + " at " + number);

            coins -= 20;
            coinSpan.textContent = coins;

            let now = new Date();
            let time = now.toLocaleTimeString();

            var historyItem = document.createElement("div");
            historyItem.className = "flex justify-between items-center text-sm";
            historyItem.innerHTML = `
                <div>
                    <p class="font-semibold">${name}</p>
                    <p class="text-gray-500">${number}</p>
                </div>
                <p class="text-gray-400 text-xs">${time}</p>
            `;
            historyContainer.prepend(historyItem);
        });
    });

    document.getElementById("clearHistoryBtn").addEventListener("click", function () {
        historyContainer.innerHTML = "";
    });

});


// copy btn 
function copyNumber(btn) {
    const card = btn.closest(".card");
    const number = card.querySelector(".text-4xl").innerText.trim();
    navigator.clipboard.writeText(number)
        .then(function () { alert(`copied to clipboard`) })

}

document.querySelectorAll(".copyBtn").forEach(btn => {
    btn.addEventListener("click", function () {
        copyNumber(btn)
    });
});











