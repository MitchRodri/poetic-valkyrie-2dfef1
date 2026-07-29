console.log("NEW SCRIPT LOADED");

// donation box

const giveButton = document.getElementById("giveButton");
const donationBox = document.getElementById("donationBox");

if (giveButton && donationBox) {

    giveButton.addEventListener("click", () => {
        donationBox.style.display = "block";
    });

    const submitDonation = document.getElementById("submitDonation");
    const donationAmount = document.getElementById("donationAmount");

    submitDonation.addEventListener("click", () => {
        const amount = Number(donationAmount.value);

        if (amount < 5) {
            alert("Minimum donation is $5.");
        } else {
            alert(`Thank you for your donation of $${amount}!`);
        }
    });

}


//send emails through contact
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");

    console.log(contactForm);

    if (contactForm) {

        emailjs.init({
            publicKey: "O9bZP8ZjI24rw64ke",
        });

        contactForm.addEventListener("submit", function(event){

            event.preventDefault();

            emailjs.sendForm(
                "service_4dcz4hg",
                "template_ipqa1ya",
                this
            )
            .then(() => {
                alert("Message sent successfully!");
                this.reset();
            })
            .catch((error) => {
                console.log("EmailJS Error:", error);
                alert("Something went wrong.");
            });

        });

    }

});

