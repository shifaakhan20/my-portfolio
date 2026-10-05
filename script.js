(function () {
    emailjs.init("EWY1WEvsHbZlAp6Nx");
})();

var typed = new Typed('#element', {
    strings: ['I like coding', 'web development', 'learning new things'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    showCursor: false
});

document.getElementById('portfolioContactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formStatus = document.getElementById('formStatus');
    formStatus.style.color = '#56052b';
    formStatus.style.display = 'block';
    formStatus.textContent = 'Sending message...';

    emailjs.sendForm('service_s9q9ji7', 'template_1joi6nt', this, 'EWY1WEvsHbZlAp6Nx')
        .then(function () {
            formStatus.style.color = '#56052b';
            formStatus.textContent = 'Thank you! Your message has been sent to my inbox. ';
            document.getElementById('portfolioContactForm').reset();

            setTimeout(function () {
                formStatus.style.display = 'none';
            }, 5000);
        }, function (error) {
            formStatus.style.color = '#d9534f';
            formStatus.textContent = 'Failed to send message: ' + (error.text || 'Please try again.');
            console.error('EmailJS Detailed Error:', error);
        });
});