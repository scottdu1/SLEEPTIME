function handleOnClick() {
    let output = document.querySelector(".output");
    output.style.display = "block"

    let hours = document.getElementById("hours");
    hours.innerHTML = "";

    let now = new Date();
    now.setMinutes(now.getMinutes() + 14);

    for (let i = 0; i < 6; i++) {
      now.setMinutes(now.getMinutes() + 90);
      hours.innerHTML += now.toLocaleTimeString(
      "en-us",
      {
        timeStyle: "short"
      }
    ) + "<br \>";
}
    
  }