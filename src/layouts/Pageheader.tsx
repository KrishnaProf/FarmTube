import React from "react";
import { Menu } from "lucide-react";
import FarmTube from "../assets/FarmTube.png";
import Button from "../components/Button";

const Pageheader = () => {
  return (
    <div>
      <div>
        <button>
          <Menu />
        </button>
        <a href="/">
          <img src={FarmTube} />
        </a>
      </div>
    </div>
  );
};

export default Pageheader;
