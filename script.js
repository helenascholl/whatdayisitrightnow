addEventListener('load', () => {
    showDay();
    setInterval(showDay, 100);
});

function showDay() {
    let day = getDay();

    document.getElementById('day').innerText = day
    document.title = day;
}

function getDay() {
    let date = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    return new Intl.DateTimeFormat('en-GB', options).format(date);
}