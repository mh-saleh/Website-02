tailwind.config = {
  theme: {
    extend: {
      colors: {
        nav_color: "rgba(22, 12, 109, 0.5)",
        darkblue: "#282938",
        inquiryColor: "rgba(255, 255, 255, 0.05)",
        transparent: "transparent",
      },
      backgroundImage: {
        bannerimg: "url('./images/bg.jpg')",
        projectColor:
          "linear-gradient(329deg, #1C1E53 -10.96%, rgba(28, 30, 83, 0.42) 103.96%)",
      },
      fontFamily: {
        popins: ["Poppins", "cursive"],
        manrope: ["Manrope", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        sand: ["Quicksand", "sans-serif"],
      },
      boxShadow: {
        reason_box: "10px 30px 60px 0px",
      },
      zIndex: {
        front: "200",
        behind: "-1",
      },
    },
  },
};
