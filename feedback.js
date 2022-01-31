document.querySelector("form#feedback-form").addEventListener("submit", (e) => {
    submitFeedback(e)
})

function submitFeedback(e) {
    e.preventDefault();
    let feedback_message=document.querySelector("textarea[name='feedback_message']").value;
    // "Grampanchayat", "Tourism", "Education"
    let about=document.querySelector("input[name='about']").value;
    let given_by = document.querySelector("input[name='given_by']").value;
    let email = document.querySelector("input[name='email']").value;
    console.log('submitting feedback...');
    console.log({feedback_message, about, given_by, email});

    fetch("https://kapileshwar.herokuapp.com/feedback", {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        // redirect:"follow",
        mode:"cors",
        body: JSON.stringify({
            "feedback_message":feedback_message,
            "about":about, 
            "given_by":given_by, 
            "email":email
        })
    })
    .then(response => {
        console.log(response);
        document.getElementById("feedback-modal").innerHTML = '<div class="modal-header">'
            +'<h5 class="modal-title feedback_status" id="exampleModalToggleLabel"></h5>'
            +'</div>'
            +'<div class="modal-footer">'
            +'<a><button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Close</button></a>'
            +'</div>';
        if (response.ok) {
            console.log("success");
            document.getElementById("exampleModalToggleLabel").innerHTML = "Thanks for your valuable Feedback..!";
        } else {
            console.log('error');
            document.getElementById("exampleModalToggleLabel").innerHTML = "Please enter valid input.";
        }
    })
    .catch(e => console.log(e));
}