# Green Thumb 🌱  
A simple gardening website built with **Node.js** and **Express** as part of a checkpoint project.  

## 📌 Features
- **Three pages**:
  - Home
  - Our Services
  - Contact Us
- **Navigation bar** on all pages
- Website only accessible **Monday to Friday, 9:00 – 17:00** (custom middleware)
- Styled with **CSS** for a clean, modern look
- Uses **EJS** template engine with reusable partials

---

## 🛠️ Technologies Used
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/)
- HTML5 / CSS3

---

## 📂 Project Structure

```markdown
green-thumb/
│
├── app.js                # Main server file
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
│
├── public/               # Static files
│   └── css/
│       └── styles.css
│
└── views/                # EJS templates
├── home.ejs
├── services.ejs
├── contact.ejs
├── closed.ejs
└── partials/
├── navbar.ejs
└── footer.ejs

````

---

## ⚙️ Installation & Usage

1. **Clone or Download** the repository:

   git clone <repo-link>

2. **Navigate into the project folder**:

   cd green-thumb

3. **Install dependencies**:

   npm install

4. **Start the server**:

   npm run dev

   Server will run on: `http://localhost:3000`

---

## 🕒 Working Hours Middleware

This website includes middleware that checks the **day** and **time** of the request.
If the current time is outside working hours (Mon–Fri, 9:00–17:00),
the user will see a **"Sorry, we’re closed!"** page.

---

## 🎯 Checkpoint Requirements Met

* ✅ 3 pages with navigation
* ✅ Middleware for working hours
* ✅ Styled with CSS
* ✅ Uses a template engine
* ✅ Content organized with partials

---

## 👨‍💻 Author

**Thafsouthe HASSANI**
Student — Express.js Checkpoint Project

