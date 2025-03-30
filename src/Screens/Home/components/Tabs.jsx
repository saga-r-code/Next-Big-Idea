import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Tabs = () => {
  const [activeState, setActiveState] = useState('#hot');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setActiveState(location.hash);
    }
  }, [location]);

  const tabs = [
    { href: "#hot", label: "🔥 HOT" },
    { href: "#new", label: "💡 NEW" },
    { href: "#top", label: "🏆 TOP" },
  ];

  return (
    <div>
      <div
        role="tablist"
        className="tabs tabs-border justify-center my-10 sm:gap-20"
      >
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={tab.href}
            role="tab"
            className={`${
              activeState === tab.href ? "tab-active" : ""
            } tab text-base sm:text-lg`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tabs;

