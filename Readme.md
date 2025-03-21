# **Technologies Used**

### **Frontend:**
- **React.js**: To build the user interface as dynamic components.
- **Vite**: For fast development and optimized bundling of the app.
- **Tailwind CSS**: For styling the app using utility-first CSS classes.
- **Framer Motion**: To create animations and transitions within the app.
- **Swiper**: For creating interactive carousels and sliders on certain pages.

### **Backend:**
- **Express.js**: To build the RESTful API for user authentication and profile management.
- **MongoDB**: For storing user data securely, including passwords and profile information.
- **bcrypt.js**: To hash passwords before storing them in the database.
- **JWT (JSON Web Token)**: For user authentication, ensuring that users are authenticated before accessing protected routes.

### **Deployment:**
- **Vercel**: For hosting the frontend and backend, providing a fully functional and publicly accessible URL.

---

# **User Authentication**

### **JWT-based Authentication:**
- During the login process, the user receives a JWT token, which is stored locally (e.g., in `localStorage` or `sessionStorage`) and is used for authenticating subsequent requests.
- The JWT token is sent with each request to protected routes, allowing the backend to verify the user's identity.

### **bcrypt.js for Password Hashing:**
- The user's password is hashed using **bcrypt.js** before storing it in the database. This ensures that even if the database is compromised, the passwords remain secure.
- During login, the system compares the provided password with the hashed password stored in the database.

### **Protected Routes:**
- Certain routes, like viewing and updating the user profile, are protected using a middleware that checks for the presence of a valid JWT token. If the token is missing or invalid, the user is denied access.

---

# **Security Considerations**

### **Password Hashing with bcrypt.js:**
- When a user registers, their password is hashed using **bcrypt.js**. This ensures that passwords are stored securely and cannot be accessed in plaintext, even if the database is compromised.

### **JWT Authentication:**
- **JWT** is used to secure routes and authenticate users. The token is signed with a secret key, making it tamper-proof. The backend verifies the token on every protected route to ensure the user is authenticated.

### **Middleware for Protection:**
- The **protect** middleware checks if the incoming request has a valid JWT token. If the token is not present or invalid, it prevents access to protected routes like profile viewing and updating.

---

# **Links:**

- **GitHub Repository**: [https://github.com/AbhiPandit1/suraAssignment](https://github.com/AbhiPandit1/suraAssignment)
- **Live Website**: [https://sura-assignment-j6ew.vercel.app/](https://sura-assignment-j6ew.vercel.app/)
