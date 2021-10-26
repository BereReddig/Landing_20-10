/*--------------------------- 
EMAILJS
--------------------------- */
const initForm = () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      emailjs.init('user_WKFn1swS6QbUm2bnIiYoJ');

      event.preventDefault();

      contactForm.querySelector('.btn').innerHTML = 'sending...';

      emailjs.sendForm('contact_service', 'contact_form', contactForm).then(
        function () {
          contactForm.querySelector('.btn').innerHTML = 'email sent successfully :D';
          Rollbar.info('Email sent successfully');
        },
        function (error) {
          contactForm.querySelector('.btn').innerHTML = 'something went wrong :(';
          Rollbar.error('Email sending failed', error);
        }
      );
    });
  }
};

export default initForm;
