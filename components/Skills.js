export default function Skills(){

const skills = [
"Python","SQL","R","Pandas","NumPy",
"Scikit Learn","PyTorch","Power BI",
"React","Flask","Streamlit","GCP"
];

return(

<section className="bg-black text-white py-20">

<h2 className="text-center text-4xl text-cyan-400 mb-10">
Skills
</h2>

<div className="flex flex-wrap justify-center gap-4">

{skills.map((skill,i)=>(
<span key={i}
className="border border-cyan-400 px-4 py-2 rounded-lg">
{skill}
</span>
))}

</div>

</section>

);
}