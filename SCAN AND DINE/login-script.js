// DOM Elements
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

// Toggle Password Visibility
function togglePasswordVisibility(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const isPassword = field.type === 'password';
    field.type = isPassword ? 'text' : 'password';
    
    // Update icon color
    const btn = field.nextElementSibling;
    if(btn) btn.style.color = isPassword ? '#D35400' : '#a0aec0';
}

// Handle Login
async function handleLogin(event) {
    event.preventDefault();

    // Reset messages
    formMessage.classList.remove('success', 'error');
    formMessage.innerHTML = '';
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        shakeForm();
        return;
    }

    // Loading State
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').style.opacity = '0';
    document.getElementById('spinner').style.display = 'block';

    try {
        // Simulate Network Delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Retrieve stored user data
        // In a real app, this would be an API call
        const storedUser = localStorage.getItem('userRegistration');
        let user = null;
        
        if (storedUser) {
            user = JSON.parse(storedUser);
        }

        // Validate Credentials
        // Note: In a real app, never store plain text passwords! This is for demo only.
        if (user && user.email === email && user.password === password) {
            showMessage('🎉 Login successful! Welcome back to Savolary.', 'success');
            
            // Save login state if "Remember Me" is checked (mock)
            if (document.getElementById('rememberMe').checked) {
                localStorage.setItem('isLoggedIn', 'true');
            }

            setTimeout(() => {
                window.location.href = 'menu_cart_updated.html';
            }, 1000);
        } else {
            throw new Error('Invalid email or password');
        }

    } catch (error) {
        console.error(error);
        showMessage('❌ Invalid email or password.', 'error');
        shakeForm();
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').style.opacity = '1';
        document.getElementById('spinner').style.display = 'none';
    }
}

function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
}

function shakeForm() {
    const card = document.querySelector('.glass-card');
    if(card) {
        card.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 400 });
    }
}

// Forgot Password Logic
function openForgotModal() {
    const modal = document.getElementById('forgotModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeForgotModal() {
    const modal = document.getElementById('forgotModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

async function handleForgotPassword(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('forgotEmail');
    const submitBtn = document.getElementById('forgotSubmitBtn');
    const messageEl = document.getElementById('forgotMessage');
    const spinner = document.getElementById('forgotSpinner');
    
    // Reset state
    messageEl.style.display = 'none';
    messageEl.className = 'form-message';
    
    if (!emailInput.value) return;

    // Loading
    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').style.opacity = '0';
    spinner.style.display = 'block';

    try {
        // Simulate API
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success
        messageEl.textContent = '✅ Password reset link sent to ' + emailInput.value;
        messageEl.className = 'form-message success';
        messageEl.style.display = 'block';
        emailInput.value = '';

        // Auto close after 3s
        setTimeout(() => {
            closeForgotModal();
            messageEl.style.display = 'none';
        }, 3000);

    } catch (error) {
        messageEl.textContent = '❌ An error occurred. Try again.';
        messageEl.className = 'form-message error';
        messageEl.style.display = 'block';
    } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector('.btn-text').style.opacity = '1';
        spinner.style.display = 'none';
    }
}

// Close modal when clicking outside
document.getElementById('forgotModal').addEventListener('click', (e) => {
    if (e.target.id === 'forgotModal') {
        closeForgotModal();
    }
});
