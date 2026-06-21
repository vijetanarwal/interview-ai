# 🚀 Interview AI

Interview AI is an AI-powered interview preparation platform that helps candidates prepare smarter by analyzing their resume and target job description. It generates personalized interview questions, identifies skill gaps, creates a preparation roadmap, and builds ATS-optimized resumes tailored to the role.

Live Demo

🌐 Frontend: https://interview-ai-six-xi.vercel.app
⚙️ Backend: https://interview-ai-backend-dsou.onrender.com

<img width="790" height="557" alt="image" src="https://github.com/user-attachments/assets/51d016c1-d5e3-43e1-bc08-afa43f629b4b" />
<img width="790" height="557" alt="image" src="https://github.com/user-attachments/assets/fc60f759-3309-4a6d-a5b6-ff49b3790941" />



## ✨ Features

* 📄 **Resume & Job Description Analysis** – Analyze resumes and job descriptions to understand candidate-job alignment.
* 🎯 **Match Score Calculation** – Get an AI-generated score indicating how well your profile matches the target role.
* ⚠️ **Skill Gap Analysis** – Identify missing skills and categorize them as Low, Medium, or High priority.
* 🤖 **Personalized Interview Questions** – Generate role-specific technical and behavioral interview questions.
* 💡 **Interviewer Insights** – Understand what interviewers are actually evaluating through intention-based explanations.
* 📝 **Detailed Model Answers** – Review structured sample answers for better interview preparation.
* 📅 **Preparation Roadmap** – Receive a personalized day-by-day preparation plan based on your weaknesses.
* 📄 **ATS-Friendly Resume Generation** – Generate optimized resumes tailored to the selected job description.
* 🔐 **Secure Authentication** – JWT-based authentication and protected routes.
* 📚 **Interview History** – Access previous interview reports, plans, and generated resumes anytime.

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* SCSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### AI & Tools

* Groq API (LLaMA 3.3 70B)
* Multer
* PDF Parse
* Puppeteer

---

## ⚙️ Installation

```bash
# Clone the repository
git clone <repository-url>

# Install frontend dependencies
cd Frontend
npm install

# Install backend dependencies
cd ../Backend
npm install
```

### Environment Variables

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_groq_api_key
```

### Run Locally

```bash
# Backend
npm run dev

# Frontend
npm run dev
```

---

## 🚀 Future Improvements

* AI Mock Interviews
* Voice-Based Interview Practice
* Company-Specific Interview Preparation
* Coding Assessment Generation
* Interview Performance Analytics
* LinkedIn Profile Analysis
