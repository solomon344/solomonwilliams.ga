

function refreshTime() {
    var date = new Date().toDateString()
    var year = new Date().toLocaleTimeString()
    var hours = new Date().getHours()+1;
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent =  date  + " "+ year;
    console.log(hours)
  }
setInterval(refreshTime, 1000);

function display_menu() {
  const menu_item = document.getElementById("menu_item")
  if (menu_item.style.display ==="flex") {
    menu_item.style = "display:none;"
  }else{
    menu_item.style = "display:flex;"
  }
}

function hide_menu() {
  const menu_item = document.getElementById("menu_item")
  menu_item.style = "display:none;"

}