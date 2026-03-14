"use client";

export default function Contact() {

return (

<section id="contact" className="bg-black text-white py-20">

<h2 className="text-4xl text-center text-cyan-400 mb-10">
Get In Touch
</h2>

<div className="max-w-xl mx-auto">

<form
action="https://formsubmit.co/piyushmandal6359@gmail.com"
method="POST"
className="flex flex-col gap-4"
>

<input
type="text"
name="name"
placeholder="Your Name"
required
className="p-3 rounded bg-gray-900 border border-cyan-400"
/>

<input
type="email"
name="email"
placeholder="Your Email"
required
className="p-3 rounded bg-gray-900 border border-cyan-400"
/>

<textarea
name="message"
placeholder="Your Message"
required
rows="5"
className="p-3 rounded bg-gray-900 border border-cyan-400"
/>

<button
type="submit"
className="bg-cyan-400 text-black py-3 rounded font-bold hover:scale-105 transition"
>
Send Message
</button>

</form>

<div className="text-center mt-10">

<p className="mb-3">Or connect with me</p>

<div className="flex justify-center gap-6">

<a
href="https://github.com/mandal6359"
target="_blank"
className="text-cyan-400"
>
GitHub
</a>

<a
href="https://www.linkedin.com/in/piyushmandal"
target="_blank"
className="text-cyan-400"
>
LinkedIn
</a>

<a
href="mailto:piyushmandal6359@gmail.com"
className="text-cyan-400"
>
Email
</a>

<a
href="https://wa.me/916359174426"
target="_blank"
className="text-green-400"
>
WhatsApp
</a>


</div>

</div>

</div>

</section>

);

}