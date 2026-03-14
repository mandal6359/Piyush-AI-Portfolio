export async function POST(req){

const {message} = await req.json();

let reply = "";

if(message.includes("project")){
reply = "Piyush built ML projects like Fraud Detection, Car Price Prediction and Data Dashboards.";
}
else if(message.includes("skills")){
reply = "Piyush works with Python, SQL, Machine Learning, Power BI and React.";
}
else{
reply = "Piyush is an AI / Data Science student building ML solutions.";
}

return Response.json({reply});

}