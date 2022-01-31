let colors = ["list-group-item list-group-item-primary", "list-group-item list-group-item-secondary", "list-group-item list-group-item-success", "list-group-item list-group-item-danger", "list-group-item list-group-item-warning"];
fetch('https://kapileshwar.herokuapp.com/notices')
  .then(response => response.json())
  .then(data => {
    for (i in data) {
        let Instruction = document.getElementById("suchna");
        var singleIntruction = document.createElement("li");
        let j = i;
        if (i > 5) {
            j = (i - 1) % 5;
        }
        singleIntruction.className = `${colors[j]}`;
        singleIntruction.innerHTML = `${data[i].fields.notice_message}`;
        Instruction.appendChild(singleIntruction);
    }
    $('#exampleModal').modal('show');

  });

// $(window).on("load", function () {
//     console.log("Modal loading");
//     $('#exampleModal').modal('show');
// });