export default function Footer() {
    return (
      <footer className="w-full p-6 bg-gray-800 text-white text-center">
        <p>© {new Date().getFullYear()} Joshua. All rights reserved.</p>
  
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
          <a href="mailto:your-email@example.com" className="hover:text-gray-400">
            Email
          </a>
        </div>
  
        <div className="mt-4 space-x-2">
          <a href="/" className="hover:text-gray-400">Home</a>| 
          <a href="/about" className="hover:text-gray-400"> About</a>| 
          <a href="/projects" className="hover:text-gray-400"> Projects</a>| 
          <a href="/contact" className="hover:text-gray-400"> Contact</a>
        </div>
  
        <p className="mt-2 text-sm text-gray-400">
          "The most important step a man can take. It's not the first one, is it? It's the next one." - Brandon Sanderson
        </p>
      </footer>
    );
  }
  