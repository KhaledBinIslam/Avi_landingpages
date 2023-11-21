
// Get references to the buttons and divs
const reviewBtn = document.getElementById("reveiw-btn");
const desccriptionBtn = document.getElementById("description-btn");
const review = document.getElementById("review");
const desccription = document.getElementById("description");

// Add click event listeners to the buttons
reviewBtn.addEventListener("click", () => {
    // Toggle visibility of div1 and hide div2
    if (review.style.display === "none") {
        review.style.display = "block";
        desccription.style.display = "none";
    } else {
        review.style.display = "none";
    }
});

desccriptionBtn.addEventListener("click", () => {
    // Toggle visibility of div2 and hide div1
    if (desccription.style.display === "none") {
        desccription.style.display = "block";
        review.style.display = "none";
    } else {
        desccription.style.display = "none";
    }
});



// email js 
function emailSend() {


    var username = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var number = document.getElementById("number").value;
    var course = document.getElementById("course").value;

    var messageBody = "Name: " + username +
        "<br/> Address: " + address +
        "<br/> Phone:" + number +
        "<br/> Course:" + course;

    // console.log(messageBody)

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ketohouse0@gmail.com",
        Password: "8B133259AD76AF19EAAC5E3746FC62380DB6",
        To: 'ketohouse0@gmail.com',
        From: "ketohouse0@gmail.com",
        Subject: "This is Natural Keto House order",
        Body: messageBody
    }).then(
        message => {
            if (message == 'OK') {
                swal("ধন্যবাদ ", `আপনার অর্ডার টি কনফার্ম হয়েছে। শীগ্রই আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।
                ইনশাআল্লাহ ৩/৪ দিনের মধ্যে হোম ডেলিভারিতে পেয়ে যাবেন।`, "success");
            }
        }
    );

}



//disable-right-click-image
document.addEventListener('DOMContentLoaded', function() {
    var images = document.getElementsByClassName('disable-right-click-image');
    
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Prevent the default right-click context menu
        });
    }
});