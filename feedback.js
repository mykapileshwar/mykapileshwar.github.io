let feedack_message="";
// "Grampanchayat", "Tourism", "Education"
let about="Grampanchayat";
let given_by = "sfksf";
let email = "sjhdk@example.com";

fetch("http://kapileshwar.herokuapp.com/feedback", {
    method:"POST",
    body: JSON.stringify({
        feedack_message, about, given_by, email
    })
})
.then(response => response.json)
.then(res => console.log(res))
.catch(e => console.log(e));
// {
//     "given_by": "dsnfds",
//     "feedback_message": "dskjfbs jnfskf",
//     "email": "osghorpade19@gmail.com",
//     "about": "Education"
// }