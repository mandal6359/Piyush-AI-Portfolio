export async function POST(req) {
  const { message } = await req.json();
  const msg = message.toLowerCase();

  let reply = "";

  if (msg.includes("project") || msg.includes("built") || msg.includes("work")) {
    reply =
      "Piyush has built 6+ ML projects: 🛡️ Fraud Detection System (XGBoost + FastAPI), 🚗 Car Price Prediction, 💳 Credit-Wise Loan System, 🤖 EXECOS-AI (currently active), 📁 Python File Management System, and 🏏 T20 World Cup Dashboard. Check the Projects section for details!";
  } else if (msg.includes("skill") || msg.includes("tech") || msg.includes("language") || msg.includes("stack")) {
    reply =
      "Piyush's core skills: Python (90%), Scikit-Learn (88%), Pandas/NumPy (92%), XGBoost (85%), SQL (85%), Power BI (80%), FastAPI/Flask (80%), React/Next.js (75%), GCP (68%), and PyTorch (72%). He's a full-stack ML developer!";
  } else if (msg.includes("cert") || msg.includes("course") || msg.includes("achiev") || msg.includes("badge")) {
    reply =
      "Piyush holds certifications in Google Cloud, Machine Learning Specialization (Coursera/DeepLearning.AI), Python for Data Science (IBM), Data Analysis with Python (freeCodeCamp), and SQL & Database Management. View all badges at his Credly profile!";
  } else if (msg.includes("contact") || msg.includes("hire") || msg.includes("reach") || msg.includes("email")) {
    reply =
      "You can reach Piyush at piyushmandal6359@gmail.com, connect on LinkedIn (linkedin.com/in/piyushmandal), or message on WhatsApp (+91 63591 74426). He's open to ML/AI opportunities and collaborations!";
  } else if (msg.includes("github") || msg.includes("repo") || msg.includes("code")) {
    reply =
      "Piyush's GitHub (@mandal6359) has 7 repositories with 37+ contributions. His most active project right now is EXECOS-AI with 17 commits in April 2026. Check github.com/mandal6359 for all repos!";
  } else if (msg.includes("who") || msg.includes("about") || msg.includes("piyush") || msg.includes("introduce")) {
    reply =
      "Piyush Mandal is an AI/ML Developer and Data Scientist from India 🇮🇳. He builds end-to-end ML systems — from data wrangling to FastAPI deployment. Currently exploring LLMs, MLOps, and cloud-native AI on GCP. Always building, always learning!";
  } else if (msg.includes("experience") || msg.includes("background") || msg.includes("education")) {
    reply =
      "Piyush is currently pursuing his degree in CS/Data Science. He has hands-on experience building production ML systems, deploying models via FastAPI, and creating data dashboards with Power BI. His latest project EXECOS-AI is actively in development!";
  } else {
    reply =
      "Great question! Piyush is an AI/ML Developer specializing in Python, machine learning, and data science. Try asking about his projects, skills, certifications, or how to contact him. I'm here to help! 🤖";
  }

  return Response.json({ reply });
}
