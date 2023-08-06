const counter = document.querySelector(".visit-count");
async function updateCounter(){
    let response = await fetch(
    "https://tecygqt5yxlesycgztaphxre3q0nzlbl.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = 'Views: ${data}';
}
updateCounter();