// DOM Elements
const form = document.getElementById('registrationForm');
const inputs = ['fullName', 'email', 'phone', 'city', 'password', 'confirmPassword'];
const termsCheckbox = document.getElementById('terms');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

// Validation Rules
const validationRules = {
  fullName: {
    test: (value) => value.length >= 3 && /^[A-Za-z\s]+$/.test(value),
    error: 'Name must be at least 3 characters (letters only)'
  },
  email: {
    test: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    error: 'Please enter a valid email address'
  },
  phone: {
    test: (value) => /^[0-9]{10}$/.test(value),
    error: 'Phone number must be exactly 10 digits'
  },

  city: {
    test: (value) => value.length >= 2,
    error: 'Please enter a valid city name'
  },
  password: {
    test: (value) => value.length >= 8,
    error: 'Password must be at least 8 characters'
  },
  confirmPassword: {
    test: (value) => value === document.getElementById('password').value,
    error: 'Passwords do not match'
  }
};

// Real-time Validation & Formatting
inputs.forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;

    input.addEventListener('blur', () => validateField(id));
    input.addEventListener('input', () => {
        // Clear error on type
        const errorElement = document.getElementById(`${id}Error`);
        if (errorElement) errorElement.classList.remove('show');
        
        // Special handling
        if (id === 'phone') {
            input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
        }
        if (id === 'password') {
            updatePasswordStrength(input.value);
        }
    });
});

// Validate Individual Field
function validateField(fieldName) {
  const input = document.getElementById(fieldName);
  const errorElement = document.getElementById(fieldName + 'Error');
  const rule = validationRules[fieldName];

  if (!rule || !input) return true;

  const isValid = rule.test(input.value);
  
  if (!isValid && input.value) {
    showError(errorElement, rule.error);
    return false;
  } else {
    clearError(errorElement);
    return true;
  }
}

function showError(element, message) {
    element.textContent = message;
    element.classList.add('show');
    // Shake animation for parent
    const group = element.parentElement;
    group.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-5px)' },
        { transform: 'translateX(5px)' },
        { transform: 'translateX(0)' }
    ], { duration: 300 });
}

function clearError(element) {
    element.textContent = '';
    element.classList.remove('show');
}

// Password Strength
function updatePasswordStrength(password) {
  const strengthEl = document.getElementById('passwordStrength');
  if (!strengthEl) return;
  
  if (password.length === 0) {
    strengthEl.className = 'password-strength';
    return;
  }

  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  strengthEl.className = 'password-strength';
  if (strength < 2) strengthEl.classList.add('weak');
  else if (strength < 4) strengthEl.classList.add('medium');
  else strengthEl.classList.add('strong');
}

// Toggle Password
function togglePasswordVisibility(fieldId) {
  const field = document.getElementById(fieldId);
  const isPassword = field.type === 'password';
  field.type = isPassword ? 'text' : 'password';
  
  // Update icon opacity or style if needed
  const btn = field.nextElementSibling;
  btn.style.color = isPassword ? '#D35400' : '#a0aec0';
}

// Main Submission
async function handleRegistration(event) {
  event.preventDefault();
  
  // Clear global messages
  formMessage.classList.remove('success', 'error');
  formMessage.innerHTML = '';

  // Run all validations
  let isFormValid = true;
  inputs.forEach(id => {
      if (!validateField(id)) isFormValid = false;
  });

  if (!termsCheckbox.checked) {
      alert('Please agree to the Terms & Conditions'); // Simple alert for checkbox
      isFormValid = false;
  }

  if (!isFormValid) {
      showMessage('Please correct the highlighted errors.', 'error');
      // Shake the form card slightly
      document.querySelector('.glass-card').animate([
          { transform: 'translateX(0)' },
          { transform: 'translateX(-10px)' },
          { transform: 'translateX(10px)' },
          { transform: 'translateX(0)' }
      ], { duration: 400 });
      return;
  }

  // Loading State
  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-text').style.opacity = '0';
  document.getElementById('spinner').style.display = 'block';

  try {
    const registrationData = {
      fullName: document.getElementById('fullName').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value,

      city: document.getElementById('city').value.trim(),
      password: document.getElementById('password').value,
      registeredAt: new Date().toISOString()
    };

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success
    showMessage('🎉 Welcome to Savolary! Redirecting...', 'success');
    
    // Store data (mock)
    localStorage.setItem('userRegistration', JSON.stringify(registrationData));

    setTimeout(() => {
      window.location.href = 'menu_cart_updated.html';
    }, 2000);

  } catch (error) {
    console.error(error);
    showMessage('❌ Something went wrong. Please try again.', 'error');
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-text').style.opacity = '1';
    document.getElementById('spinner').style.display = 'none';
  }
}

function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
}

// Modal Logic
const modalContent = {
    terms: {
        title: "Terms and Conditions",
        body: `
            <p>Welcome to Savolary ("we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms.</p>
            <h3>1. Use of Service</h3>
            <p>You agree to use our platform only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the platform.</p>
            <h3>2. User Account</h3>
            <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
            <h3>3. Ordering & Payments</h3>
            <ul>
                <li>All orders are subject to availability.</li>
                <li>Prices are subject to change without notice.</li>
                <li>Payment must be made at the time of ordering.</li>
            </ul>
            <h3>4. Cancellation Policy</h3>
            <p>Orders cannot be cancelled once the kitchen has started preparation.</p>
        `
    },
    privacy: {
        title: "Privacy Policy",
        body: `
            <p>At Savolary, we take your privacy seriously. This policy describes how we collect and use your data.</p>
            <h3>1. Data Collection</h3>
            <p>We collect information you provide directly to us, such as your name, email address, phone number, and delivery address.</p>
            <h3>2. How We Use Your Data</h3>
            <ul>
                <li>To process and deliver your orders.</li>
                <li>To communicate with you about your order status.</li>
                <li>To send you promotional offers (only if you opt-in).</li>
            </ul>
            <h3>3. Data Security</h3>
            <p>We implement industry-standard security measures to protect your personal information.</p>
            <h3>4. Contact Us</h3>
            <p>If you have any questions about this policy, please contact our support team.</p>
        `
    }
};

function openModal(type) {
    const modal = document.getElementById('legalModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    const content = modalContent[type];

    if (content) {
        title.textContent = content.title;
        body.innerHTML = content.body;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('legalModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal when clicking outside
document.getElementById('legalModal').addEventListener('click', (e) => {
    if (e.target.id === 'legalModal') {
        closeModal();
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  console.log('Registration form ready');
});