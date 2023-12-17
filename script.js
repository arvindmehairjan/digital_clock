const updateDateTime = () => {
    const today = new Date()
    const seconds = today.getSeconds();
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    const currentTime = today.getHours() + ":" + today.getMinutes() + ":" + formattedSeconds
    document.getElementById("currentTime").textContent = currentTime
}

setInterval(updateDateTime, 1000);
