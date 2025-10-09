export default function Nav(){
    return(
        <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:underline border-white ">Projects</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a
                href="/resume.pdf"
                className="ml-2 inline-block px-3 py-1 rounded-md bg-white text-gray-900 font-medium shadow-sm"
                download
            >
                Resume
            </a>
        </nav>
    )
}