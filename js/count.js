var count = localStorage.getItem("count");
if (count == null) {
    count = 1;
    localStorage.setItem("count", count);
} else {
    count = parseInt(count) + 1;
    localStorage.setItem("count", count);
}
$("#count").text("你是第: " + count + "次访问本站");