"use client";
import { useState } from "react";
import axios from "axios";

export default function AIChat(){

const [msg,setMsg]=useState("");
const [reply,setReply]=useState("");

async function askAI(){

const res = await axios.post("/api/chat",{
message:msg
});

setReply(res.data.reply);

}

return(

<section className="bg-black text-white py-20 text-center">

<h2 className="text-4xl text-cyan-400 mb-6">
Ask AI About Piyush
</h2>

<input
className="text-black px-4 py-2"
value={msg}
onChange={(e)=>setMsg(e.target.value)}
placeholder="Ask about projects, skills..."
/>

<button
onClick={askAI}
className="ml-4 bg-cyan-400 text-black px-4 py-2">
Ask
</button>

<p className="mt-6 text-gray-300">{reply}</p>

</section>

);
}