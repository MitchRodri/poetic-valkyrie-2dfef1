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

    const memberCards = document.querySelectorAll(".band-member-card");

    if (memberCards.length) {
        const setActiveCard = (activeCard) => {
            memberCards.forEach((card) => {
                const shouldBeActive = card === activeCard;
                card.classList.toggle("active", shouldBeActive);
                card.setAttribute("aria-expanded", shouldBeActive ? "true" : "false");
            });
        };

        memberCards.forEach((card) => {
            card.addEventListener("click", () => {
                setActiveCard(card.classList.contains("active") ? null : card);
            });

            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveCard(card.classList.contains("active") ? null : card);
                }
            });
        });
    }

    const contactForm = document.getElementById("contact-form");

    console.log(contactForm);

    if (contactForm) {

        emailjs.init({
            publicKey: "O9bZP8ZjI24rw64ke",
        });

        contactForm.addEventListener("submit", function(event){

            event.preventDefault();

            emailjs.sendForm(
                "service_1aqgypn",
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
