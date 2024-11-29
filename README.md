# ❤️ WarmHearts

**WarmHearts** is a charitable initiative aimed at facilitating the donation of winter clothing to those in need. This project connects donors with underprivileged communities in Bangladesh, spreading warmth and kindness during the cold winter months.

##🌐 Project: Live Site 

Access the live application here: [WarmHearts Live](https://warm-heart-a5f9d.web.app/)

---

## 🎯 Purpose

The **WarmHearts** project is designed to:

- Enable easy donation of winter clothing through organized events.
- Spread awareness about regions and communities most affected by winter.
- Provide an intuitive platform for donors to contribute and make a positive impact.

---

## 🚀 Key Features

- 🔒 User Authentication**: Secure login and Google Sign-In for donors.
- 🗓️ Event Information**: View schedules and details for winter donation events.
- 📍 Region Targeting**: Highlights priority areas most affected by the winter season.
- ℹ️ Interactive Modals**: Detailed information for each card in the home section.
- 🎠 Carousel Display**: Showcase impactful images of donation drives and events.
- 👤 Profile Management**: Update user profiles with personalized data.
- 🔔 Notification System**: Real-time toast notifications for updates and actions.

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

###🌐 **Google Authentication**
   - Users can sign up using their Google account through Firebase Authentication.
   - Upon successful Google sign-in, the user is redirected to the homepage, and a success toast notification is shown.


     ```bash
       const AuthProvider = ({children}) => {
       const [user, setUser] = useState(null);
       const [loading,setLoading]=useState(true);
       
       const createNewUser=(email,password)=>{
           setLoading(true);
           return createUserWithEmailAndPassword(auth,email,password)
       }
       const userLogin=(email,password)=>{
           setLoading(true);
           return signInWithEmailAndPassword(auth,email,password)
       }
       const logOut=()=>{
           setLoading(true);
           return signOut(auth)
       }
       const updateUserProfile=(updateData)=>{
           return updateProfile(auth.currentUser,updateData)
       }
      
### 🖼️ **Profile Update**
   - After successful registration, the user's profile is updated with the provided `displayName` (from the form) and `photoURL` (from the photo URL input field).

###👁️ **Password Visibility Toggle**
   - The user can toggle the visibility of their password by clicking an eye icon. This improves the user experience when entering the password.

### ⚠️ **Error Handling**
   - The component includes robust error handling for both the user creation process and password validation. If any field doesn't meet the validation criteria, the user is informed with a clear error message next to the corresponding field.
   
## 💻 Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Firebase (Authentication)
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
- `classnames`: For conditional class styling.

---

## ⚙️ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/WarmHearts.git
   cd WarmHearts
2. Install dependencies:
   ```bash
   npm install
3. Configure Firebase:
   Add your Firebase configuration to the .env file using the VITE_apiKey and other keys.
   
4. Start the development server:
   ```bash
   npm run dev
   
   
