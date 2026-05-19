const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-dark text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4 tracking-tighter">Anjali.</h2>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anjali Achuthan. All rights reserved.
        </p>
        {/* <p className="text-gray-600 text-[10px] mt-4 uppercase tracking-[0.3em]">
          Built with React & Framer Motion
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;