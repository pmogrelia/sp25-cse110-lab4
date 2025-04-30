function getCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(getCurrentTime, 1000);