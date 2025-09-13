// contact-form.js - Fixed version

// EmailJS configuration - Thay thế bằng thông tin thực tế của bạn
const emailJsConfig = {
  serviceId: import.meta.env.VITE_YOUR_SERVICE_ID,
  templateId: import.meta.env.VITE_YOUR_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
};

const setupContactForm = () => {
  const form = document.getElementById('contact-form');
  if (!form) {
    console.error('Contact form not found');
    return;
  }

  const formStatus = document.getElementById('form-status');
  const submitButton = form.querySelector('button[type="submit"]');
  const submitButtonText = submitButton.querySelector('span');
  const loadingSpinner = submitButton.querySelector('.loading-spinner');

  // Initialize EmailJS
  emailjs.init(emailJsConfig.publicKey);

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Ngăn form submit mặc định
    e.stopPropagation(); // Ngăn event bubbling

    console.log('Form submitted'); // Debug log

    // Validate form inputs
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const subject = form.querySelector('#subject').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !subject || !message) {
      showStatus('Please fill in all fields', 'error');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showStatus('Please enter a valid email address', 'error');
      return;
    }

    // Show loading state
    setLoadingState(true);

    try {
      // Prepare template parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_name: 'Nguyen Minh Thuan', // Tên người nhận
      };

      console.log('Sending email with params:', templateParams); // Debug log

      const result = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        templateParams,
        emailJsConfig.publicKey
      );

      console.log('EmailJS result:', result); // Debug log

      if (result.status === 200) {
        showStatus('Message sent successfully! I will get back to you soon.', 'success');
        form.reset();
        // Reset floating labels
        resetFormLabels();
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      showStatus('Failed to send message. Please try again or contact me directly.', 'error');
    } finally {
      setLoadingState(false);
    }
  });

  // Helper functions
  function setLoadingState(isLoading) {
    submitButton.disabled = isLoading;
    if (isLoading) {
      submitButton.classList.add('loading');
      submitButtonText.textContent = 'Sending...';
      if (loadingSpinner) loadingSpinner.classList.remove('hidden');
    } else {
      submitButton.classList.remove('loading');
      submitButtonText.textContent = 'Send Message';
      if (loadingSpinner) loadingSpinner.classList.add('hidden');
    }
  }

  function showStatus(message, type) {
    if (!formStatus) return;

    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.classList.remove('hidden');

    // Auto hide after 5 seconds
    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 5000);
  }

  function resetFormLabels() {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.classList.remove('has-value');
      input.blur();
    });
  }

  // Handle floating labels
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    // Check initial value on page load
    if (input.value.trim() !== '') {
      input.classList.add('has-value');
    }

    input.addEventListener('focus', () => {
      input.classList.add('has-value');
    });

    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        input.classList.remove('has-value');
      }
    });

    // Handle input changes
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    });

    // Handle autofill
    input.addEventListener('change', () => {
      if (input.value.trim() !== '') {
        input.classList.add('has-value');
      }
    });
  });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', setupContactForm);

// Alternative initialization for dynamic content
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupContactForm);
} else {
  setupContactForm();
}