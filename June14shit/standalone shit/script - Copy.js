document.getElementById("startBtn")
.addEventListener("click", function() {

    document.body.innerHTML = `
        <h1>Will you officially be my girlfriend? ❤️</h1>

        <button onclick="yesClicked()">Yes</button>

        <button id="noBtn">No</button>
    `;

    const noBtn = document.getElementById("noBtn");

    noBtn.addEventListener("mouseover", () => {
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
    });
});

function yesClicked() {
    document.body.innerHTML = `
        <h1>You just made me the happiest guy alive ❤️</h1>
    `;
}