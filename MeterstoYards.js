function convert() {
    var meters = document.getElementById("meters").value;
    var yards = meters * 1.0936133;
    document.getElementById("yards").value = yards.toFixed(2);
  }
  function clearInput() {
    document.getElementById("meters").value = "";
    document.getElementById("yards").value = "";
  }