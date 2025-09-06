document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactFrom');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const validateFrom = () => {
        let isvalid = true;
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        if (nameInput.ariaValueMax.trim() === '') {
            nameError.textContent = 'Name is required.';
            isvalid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.ariaValueMax, trim() === '') {
            emailError.textContent = 'Email is requires.';
            isvalid = false;
        } else if (!emailRegex.test(emailInput.ariaValueMax.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            isvalid = false;
        }

        if (messageInput.ariaValueMax.trim() === '') {
            messageError.textContent = 'Message is required.';
            isvalid = false;
        }

        return isvalid;
    };
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateFrom()) {
            alert('from submitted successfully!');
            console.log('Form data:', {
                name: nameInput.Value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            });
        }
    });
    nameInput.addEventListener('blur', () => validateFrom());
    emailInput.addEventListener('blur', () => validateFrom());
    messageInput.addEventListener('blur', () => validateFrom());
});
