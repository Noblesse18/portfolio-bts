import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  text-amber-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-3xl font-bold">CNSAMY</div>

        {/* Bouton burger (mobile) */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-4 text-lg">
          <NavLink href="#hero">Accueil</NavLink>
          <NavLink href="#About">À propos</NavLink>
          <NavLink href="#parcours">Parcours</NavLink>
          <NavLink href="#project">Projets</NavLink>
          <NavLink href="#veille">Veille</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#e4">Épreuve E4</NavLink>
        </nav>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden flex flex-col items-center space-y-4 py-6 bg-blue-950">
          <NavLink href="#hero" onClick={() => setOpen(false)}>
            Accueil
          </NavLink>
          <NavLink href="#about" onClick={() => setOpen(false)}>
            À propos
          </NavLink>
          <NavLink href="#parcours" onClick={() => setOpen(false)}>
            Parcours
          </NavLink>
          <NavLink href="#project" onClick={() => setOpen(false)}>
            Projets
          </NavLink>
          <NavLink href="#veille" onClick={() => setOpen(false)}>
            Veille
          </NavLink>
          <NavLink href="#contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <NavLink href="#e4" onClick={() => setOpen(false)}>
            Épreuve E4
          </NavLink>
        </nav>
      )}
    </header>
  );
};

/* Bouton réutilisable */
const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-4 py-2 border-2 rounded-full hover:bg-gray-700 transition"
  >
    {children}
  </a>
);

export default Navbar;
