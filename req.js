// fetch('https://kapileshwar.herokuapp.com/notices')
//   .then(response => response.json())
//   .then(data => console.log(data));
const data = await fetch('https://kapileshwar.herokuapp.com/notices');
let colors = ["list-group-item list-group-item-primary", "list-group-item list-group-item-secondary", "list-group-item list-group-item-success", "list-group-item list-group-item-danger", "list-group-item list-group-item-warning"];
console.log(data);
$(window).on("load", function () {
    console.log("Modal loading");
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

function submitFeedback(e) {
    let feedack_message=document.querySelector("input[name='feedback_message']");
    // "Grampanchayat", "Tourism", "Education"
    let about=document.querySelector("input[name='about']");;
    let given_by = document.querySelector("input[name='given_by']");;
    let email = document.querySelector("input[name='email']");;

    fetch("http://kapileshwar.herokuapp.com/feedback", {
        method:"POST",
        body: JSON.stringify({
            feedack_message, about, given_by, email
        })
    })
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(e => console.log(e));
}