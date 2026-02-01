**Deployment Guide for Savolary**

Since your application uses a backend (Node.js) and a database (`orders.json`), you cannot use simple static hosting like GitHub Pages. You need a platform that runs Node.js.

I recommend **Render.com** because it is free and easy to set up.

### **Important Note on Database**
Your app uses a local file (`orders.json`) to store orders. On most cloud platforms (like Render Free Tier), this file will **reset** every time the server restarts (approx. every 15 minutes of inactivity).
*   **For a Demo**: This is fine. Just know that data won't persist long-term.
*   **For Production**: You would need to connect a real database like MongoDB (Atlas).

---

### **Step 1: Prepare Your Code**
(I have already done most of this for you!)
1.  Ensure `package.json` has a `start` script: `"start": "node server.js"` (✅ Verified)
2.  Ensure your code uses relative paths for API calls (✅ Updated in `admin.html` and `checkout.html`)
3.  Ensure your server serves the frontend files (✅ Verified in `server.js`)

### **Step 2: Push to GitHub**
To deploy, your code needs to be on GitHub.
1.  Create a new Repository on GitHub.
2.  Upload your project files (`server.js`, `package.json`, `orders.json`, and the `SCAN AND DINE` folder) to this repository.

### **Step 3: Deploy on Render**
1.  Go to [dashboard.render.com](https://dashboard.render.com/) and Sign Up/Login.
2.  Click **"New +"** -> **"Web Service"**.
3.  Connect your GitHub repository.
4.  **Configure the Service**:
    *   **Name**: `savolary-app` (or similar)
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
    *   **Instance Type**: Free
5.  Click **"Create Web Service"**.

Render will now build your app. Once finished, it will give you a live link (e.g., `https://savolary-app.onrender.com`).

### **Optional: Keeping Data (Advanced)**
If you want your orders to survive restarts, you need a database.
1.  Create a generic MongoDB Atlas account (free).
2.  Update `server.js` to use `mongoose` instead of `fs` to read/write `orders.json`.
3.  Add your connection string to Render Environment Variables.
