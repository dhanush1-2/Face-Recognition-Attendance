function updateTime() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    dateElement.textContent = `Date: ${now.toLocaleDateString("en-US", options)}`;
    timeElement.textContent = `Time: ${now.toLocaleTimeString("en-US", { hour12: true })}`;
}

updateTime(); // Call the function initially to show date and time on load

setInterval(updateTime, 1000); // Update time every second
