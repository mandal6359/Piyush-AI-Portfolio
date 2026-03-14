export default function Footer() {

return (

<footer className="bg-black text-gray-400 py-6 text-center border-t border-cyan-400">

<p>
© {new Date().getFullYear()} Piyush Mandal
</p>

<p className="text-sm mt-2">
Built with Next.js • AI • Machine Learning
</p>

</footer>

);

}