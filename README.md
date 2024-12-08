# CrowdCube

CrowdCube is a dynamic and user-friendly crowdfunding platform built using React. It allows individuals to contribute to different campaigns and causes while providing an engaging user interface with features like theme toggling, typewriter effects, and interactive carousels.

## 🌐 Project Live Link

[Live Demo of CrowdCube](https://crowd-cube-111f0.web.app/)

---

## 🎯 Features

- **Light/Dark Theme Toggle**: Switch between light and dark themes.
- **Typewriter Effect**: A smooth typewriter animation to highlight key platform messages.
- **Image Carousel**: Interactive carousel displaying important images or messages.
- **Campaign Cards**: Display cards for campaigns that users can browse.
- **Detailed Campaign View**: Learn more about each campaign with a "See More" button.
- **Interactive "Why Choose Us" Cards**: Information cards explaining the benefits of the platform.

---

## 🚀 Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/crowdcube.git
```

## 🎯 Purpose

The **WarmHearts** project is designed to:

- Provide a platform for individuals and organizations to create and promote crowdfunding campaigns.
- Connect donors with causes they are passionate about.
- Offer a seamless experience for discovering, contributing to, and managing campaigns.

---

## 🚀 Key Features

- **🔒 User Authentication**: Secure login and registration for both donors and campaign creators.
- **🏅 Campaign Listings**: Display of active campaigns, with detailed information on each initiative.
- **📝 Campaign Details**: View detailed information about campaigns, including donation options and impact.
- **🌑 Theme Toggle**: A light and dark mode toggle to enhance user experience.
- **🎠 Carousel Display**: Showcase impactful images related to campaigns and causes.
- **🛒 Donation Button**: Easily donate to campaigns with the "Donate" button on each campaign card.
- **🚀 Campaign Navigation**: Access to various sections, such as active campaigns and more detailed campaign information.
- **⚙️ Backend CRUD Operations**:
  - **Create Campaigns**: Admins or campaign creators can add new campaigns.
  - **Read Campaigns**: View a list of active campaigns, including details.
  - **Update Campaigns**: Campaign creators can update their campaigns, including changing donation goals or descriptions.
  - **Delete Campaigns**: Admins can delete campaigns or archive them if necessary.
  - **Manage Donations**: Securely manage donations and track donor information.
---

### ✅ **Validation**
   - ✏️ Name Field**: Ensures the name entered by the user is at least 5 characters long. If the name is too short, an error message is displayed.
   - 🔑 Password Field**: The password is validated using three checks:
     - Must contain at least one lowercase letter.
     - Must contain at least one uppercase letter.
     - Must contain at least one number and be at least 6 characters long.
   - If any validation fails, an error message is displayed next to the corresponding field, guiding the user on how to correct the input.
    
     ```bash
      const hasLowerCase = /(?=.*[a-z])/;
        const hasUpperCase = /(?=.*[A-Z])/;
        const hasDigitAndLength = /(?=.*\d).{6,}/;


### 🖼️ **Profile Update**
   - After successful registration, the user's profile is updated with the provided `displayName` (from the form) and `photoURL` (from the photo URL input field).

###👁️ **Password Visibility Toggle**
   - The user can toggle the visibility of their password by clicking an eye icon. This improves the user experience when entering the password.

### ⚠️ **Error Handling**
   - The component includes robust error handling for both the user creation process and password validation. If any field doesn't meet the validation criteria, the user is informed with a clear error message next to the corresponding field.
   
## 💻 Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB, Firebase Authentication  
- **Hosting**: Firebase Hosting
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Routing**: React Router DOM

---

## 📦 NPM Packages Used

Below are the key NPM packages used in this project:

- `react-router-dom`: For client-side routing.
- `firebase`: For authentication and backend support.
- `react-toastify`: For showing real-time toast notifications.
- `react-icons`: For displaying user-friendly icons.
- `animate.css`: For adding smooth animations.
- `react-awesome-reveal`: For smooth fade-in animations..
- `react-simple-typewriter`: For creating typewriter effects.
- `mongodb`: Database to store campaigns, users, and donations.
- `express`: Backend framework for handling API requests.

---

## ⚙️ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-Khalid9080
   cd WarmHearts
2. Install dependencies:
   ```bash
   npm install
3. Configure Firebase:
   Add your Firebase configuration to the .env file using the VITE_apiKey and other keys.
   
4. Start the development server:
   ```bash
   npm run dev
   
   
