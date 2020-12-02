function scrollPanel() {
    document.getElementsByClassName("panel").style.top -= "100vh";
}

document.getElementsByClassName("panel").onscroll = scrollPanel();