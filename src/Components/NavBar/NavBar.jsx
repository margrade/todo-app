const NavBar = () => {
    return (
      <nav className="flex justify-between items-center py-2 px-4 border-b-2 border-gray-300">
        <a href="/" className="text-gray-900">Home</a>
        <a href="/about" className="text-gray-900">Iniciar Sesión</a>
        <a href="/contact" className="text-gray-900">Registro</a>
        
      </nav>
    );
  };
  
  export { NavBar }