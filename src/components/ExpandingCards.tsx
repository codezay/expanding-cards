import { useState } from "react";
import "../styles/ExpandingCards.css";

/**
 * types
 */
type PanelProps = {
  imageUrl: string;
  title: string;
};

/**
 * Component
 */

export default function ExpandingCards() {
  const [activePanel, setActivePanel] = useState<number | null>(0);

  const panels: PanelProps[] = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Explore The World",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Wild Forest",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      title: "Sunny Beach",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      title: "City on Winter",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Mountains - Clouds",
    },
  ];

  const handlePanelClick = (index: number) => {
    console.log(`current panel index: ${index}`);
    setActivePanel(index);
  };

  return (
    <div className="container">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`panel ${activePanel === index ? "active" : ""}`}
          onClick={() => handlePanelClick(index)}
          style={{ backgroundImage: `url(${panel.imageUrl})` }}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
}
