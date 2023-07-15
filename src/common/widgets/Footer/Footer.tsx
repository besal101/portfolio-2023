import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section id="__footer" className="py-5">
      <div className="text-center text-sm text-slate-400">
        <p>
          {" "}
          Built & Designed by{" "}
          <button onClick={scrollToTop} className="text-sky-400">
            @bishalkhatri
          </button>{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
