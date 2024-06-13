import React from "react";

function Header({ theme, setTheme }) {
  return (
    <div className="w-full flex flow-row justify-evenly items-center py-3 gap-x-3 bg-blue-300 dark:bg-blue-900 dark:text-slate-200 text-slate-800 fixed z-10">
      <a href="/">
        <div className="flex flow-row justify-evenly items-center gap-x-5">
          <h1 className="text-xl sm:text-3xl font-bold text-center">Know Y4 Roads</h1>
          <div className="bg-blue-200 dark:bg-blue-700 rounded-full border-2 border-blue-400 p-1">
            <img src="./kyr.png" alt="" className="h-10" />
          </div>
        </div>
      </a>
      <a href="#about">
        <p className="text-lg sm:text-2xl text-slate-700 dark:text-slate-100 hover:underline font-semibold text-center">About</p>
      </a>
      <div className="flex justify-center">
        <button
          className="bg-blue-200 dark:bg-blue-800 text-3xl dark:hover:bg-blue-400 hover:bg-blue-400 text-white font-bold rounded"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "🌇" : "🛌"}
        </button>
      </div>
    </div>
  );
}

export default Header;
