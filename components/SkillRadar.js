"use client";

import { Radar } from "react-chartjs-2";
import {
Chart as ChartJS,
RadialLinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
RadialLinearScale,
PointElement,
LineElement,
Filler,
Tooltip,
Legend
);

export default function SkillRadar() {

const data = {
labels: ["Python","Machine Learning","Data Analysis","Cloud","Web Dev"],
datasets: [
{
label: "Skill Level",
data: [90,85,80,70,75],
backgroundColor: "rgba(34,211,238,0.3)",
borderColor: "cyan"
}
]
};

return (

<section className="bg-black text-white py-20">

<h2 className="text-4xl text-center text-cyan-400 mb-10">
Skills Radar
</h2>

<div className="max-w-xl mx-auto">
<Radar data={data} />
</div>

</section>

);

}