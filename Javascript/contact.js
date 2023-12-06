function submitForm() {

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    alert("Form submitted!\n\nFirst Name: " + firstName +
            "\nLast Name: " + lastName +
            "\nEmail: " + email +
            "\nComments: " + comments);
       
            document.getElementById('submit').reset();
}