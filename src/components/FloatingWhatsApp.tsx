import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button after scrolling down 500px (approx height of the hero section on mobile)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#contato"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#b8935a] hover:bg-[#a07f4a] text-white px-4 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
      aria-label="Agendar pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/-2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M11.954 1.83C6.388 1.83 1.875 6.344 1.875 11.91c0 1.77.464 3.447 1.258 4.908L1.833 22l5.31-1.392a10.024 10.024 0 004.811 1.229h.004c5.564 0 10.076-4.514 10.076-10.081 0-2.697-1.049-5.232-2.956-7.14a10.035 10.035 0 00-7.124-2.786zM6.92 7.747c.218-.485.447-.495.653-.504.186-.008.397-.008.608-.008.21 0 .553.078.84.697.288.618 1.4 3.407 1.523 3.655.124.248.207.536.063.825-.144.289-.218.464-.424.706-.207.243-.436.526-.62.705-.205.201-.422.417-.184.823.237.406 1.056 1.745 2.272 2.83 1.564 1.397 2.871 1.832 3.284 2.037.412.206.65.165.89-.108.239-.272 1.036-1.196 1.314-1.608.278-.412.556-.34.935-.206.378.134 2.392 1.124 2.805 1.33.412.206.686.309.786.48.1.171.1.99-.257 1.948-.358.959-2.124 1.884-2.915 1.932-.79.049-1.554.218-5.207-1.223-4.39-1.733-7.228-6.195-7.444-6.484-.216-.29-1.777-2.368-1.777-4.518 0-2.15 1.12-3.21 1.525-3.65.405-.44 1.066-.549 1.479-.549.414 0 .828.006 1.046.006z" />
      </svg>
      <span className="text-sm font-medium pr-1">Agendar pelo WhatsApp</span>
    </a>
  );
}
