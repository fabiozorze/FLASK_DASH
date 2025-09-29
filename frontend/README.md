# Starting Frontend + Backend
Backend: source .venv/bin/activate
        python run.py
frontend: npm run dev


# TODO List - FLASK_DASH Project

## I am still working on the QR code display, I have to: 
  - Check with Fabio If I can change the primary Key from Email to ID
  - Implement the function when user clicks on Cancel it deletes the user from DB
  - Study the layout for improvements



## 🔐 Authentication & Security
- [x ] **Finish RegisterTwoFactorAuthentication modal**
  - [ x] Implement actual QR code display (currently just shows text input)
  - [ x] Add QR code image generation/display functionality
  - [ x] Connect to backend `/setup-2fa` endpoint to get provisioning URI
  - [ ] Add proper form validation and error handling
  - [ x] Implement 2FA code verification flow
  - [ ] Add success/failure feedback to user
  - [ x] Style the modal properly with QR code display area

## 🔧 Backend Improvements
- [ ] Add error handling for QR code generation
- [ ] Implement session management improvements
- [ ] Add rate limiting for 2FA attempts
- [ ] Add logging for security events

## 🎨 Frontend Improvements
- [ ] Complete 2FA user flow integration
- [ ] Add loading states for authentication processes
- [ ] Improve error messaging consistency
- [ ] Add form validation feedback

## 🧪 Testing
- [ ] Add unit tests for 2FA functionality
- [ ] Test QR code generation and verification flow
- [ ] Test authentication edge cases

## 📱 User Experience
- [ ] Add instructions for setting up authenticator apps
- [ ] Improve mobile responsiveness
- [ ] Add accessibility improvements

## 🚀 Deployment
- [ ] Configure production environment variables
- [ ] Set up proper session storage for production
- [ ] Add monitoring and logging
