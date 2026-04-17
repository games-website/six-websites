import React from 'react';

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        alert('Action would open login');
    };

    return (
        <section class="section login-section bg-light-alt" id="login">
            <div class="container">
                <h2 class="section-title">Reddyanna Login Process</h2>
                <div class="split-content reverse-mobile">
                    <div class="image-content">
                        <img src="/images/login_process_original.png" alt="Login Welcome" />
                    </div>
                    <div class="text-content">
                        <p class="section-desc">Here’s how you can log in with ease:</p>
                        <ul class="custom-list">
                            <li><strong>Visit the Platform:</strong> To access the <strong>Reddyanna Book</strong> website
                                or app, use your desktop or mobile phone to open it.</li>
                            <li><strong>Click on Login:</strong> Look up the homepage and locate the “Login” button to be
                                taken to the login page.</li>
                            <li><strong>Enter Your Credentials:</strong> Enter the email or mobile number that you are
                                registered with as well as the password you created when signing up.</li>
                            <li><strong>Secure Authentication (Optional):</strong> If you have set a two-factor
                                authentication (2FA) in your account, type in the OTP sent to your phone or email.</li>
                        </ul>
                        {}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
