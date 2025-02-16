let clicks = localStorage.getItem('clicks') || 0;
let clicksDisplay = document.querySelector('#clicks');

clicksDisplay.innerHTML = `Clicks : ${clicks}`;

function clicked() {
    clicks++;
    clicksDisplay.innerHTML = `Clicks : ${clicks}`;
    localStorage.setItem('clicks', clicks);
}
