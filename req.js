let colors = ["list-group-item list-group-item-primary", "list-group-item list-group-item-secondary", "list-group-item list-group-item-success", "list-group-item list-group-item-danger", "list-group-item list-group-item-warning"];
fetch('https://kapileshwar.herokuapp.com/notices')
  .then(response => response.json())
  .then(data => {
    for (i in data.notices) {
        let Instruction = document.getElementById("suchna");
        var singleIntruction = document.createElement("li");
        let j = i;
        if (i > 4) {
            j = (i - 1) % 4;
        }
        singleIntruction.className = `${colors[j]}`;
        singleIntruction.innerHTML = `${data.notices[i].notice_message}`;
        if (data.notices[i].attachment) {
          singleIntruction.innerHTML += ` <a href="${data.notices[i].attachment}" class="btn btn-secondary btn-sm" target="_blank">अधिक माहितीसाठी येथे क्लिक करा</a>`;
        }
        Instruction.appendChild(singleIntruction);
    }
    $('#exampleModal').modal('show');

  });

// $(window).on("load", function () {
//     console.log("Modal loading");
//     $('#exampleModal').modal('show');
// });