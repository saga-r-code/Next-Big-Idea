import React, { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";

const Hero = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      {/* Heading */}
      <div className="p-10 space-y-3 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold ">
          Your <span className="text-gradient">Big Idea</span> Begins Here
        </h1>
        <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
          Note your idea freely and begin creating the{" "}
          <span className="text-gradient">next big thing</span>.
        </span>
      </div>

      {/* Select Theme */}
      <div className="flex justify-center">
        <select
          className="select select-bordered rounded-full w-full max-w-xs"
          onChange={(e) => setTheme(e.target.value)}
        >
          <option disabled>Select Theme</option>
          <option value="light" defaultValue="light">
            Light
          </option>
          <option value="dark">Dark</option>
          <option value="caramellatte">Caramellatte</option>
          <option value="synthwave">Synthwave</option>
          <option value="retro">Retro</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="valentine">Valentine</option>
          <option value="halloween">Halloween</option>
          <option value="garden">Garden</option>
          <option value="forest">Forest</option>
          <option value="dim">Dim</option>
          <option value="lofi">Lofi</option>
          <option value="pastel">Pastel</option>
          <option value="fantasy">Fantasy</option>
          <option value="wireframe">Wireframe</option>
          <option value="black">Black</option>
          <option value="luxury">Luxury</option>
          <option value="dracula">Dracula</option>
          <option value="dim">Dim</option>
          <option value="night">night</option>
          <option value="sunset">sunset</option>
          <option value="abyss">abyss</option>
        </select>
      </div>
    </div>
  );
};

export default Hero;
