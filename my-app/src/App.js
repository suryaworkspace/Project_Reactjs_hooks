import { useState } from "react";
import "./App.css";

const imagesList = [
  {
    id: 0,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",
    imageAltText: "nature mountain with pond",
    thumbnailAltText: "nature mountain with pond thumbnail",
  },
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",
    imageAltText: "nature sunset",
    thumbnailAltText: "nature sunset thumbnail",
  },
  {
    id: 2,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",
    imageAltText: "nature mountain with ocean",
    thumbnailAltText: "nature mountain with ocean thumbnail",
  },
  {
    id: 3,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",
    imageAltText: "nature mountain with forest",
    thumbnailAltText: "nature mountain with forest thumbnail",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",
    imageAltText: "nature leaves",
    thumbnailAltText: "nature leaves thumbnail",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",
    imageAltText: "nature tree",
    thumbnailAltText: "nature tree thumbnail",
  },
  {
    id: 6,
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",
    imageAltText: "nature waterfall",
    thumbnailAltText: "nature waterfall thumbnail",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",
    imageAltText: "nature river",
    thumbnailAltText: "nature river thumbnail",
  },
];

function App() {
  //using react hook useState instead of state.
  const [activeImageId, setActiveImageId] = useState(imagesList[0].id);
  const [isDark, setBackground] = useState(false);
  const activeImage = imagesList[activeImageId];
  const darkBg = isDark ? "dark-bg" : "";
  const whiteFont = isDark ? "dark-bg-font" : "";
  const bgStatus = isDark ? "Light Mode" : "Dark Mode";
  const bgButtonColor = isDark ? "button-light" : "button-dark";

  //updating the state on trigger of onClickevent
  const updateActiveId = (clickedImageId) => {
    setActiveImageId(clickedImageId);
  };

  const updateBg = () => {
    setBackground(!isDark);
  };

  return (
    <div className={`app-container ${darkBg}`}>
      <img
        src={activeImage.imageUrl}
        className="display-image"
        alt={activeImage.imageAltText}
      />
      <h1 className={`heading ${whiteFont}`}>Nature Photography</h1>
      <p className={`sub-heading ${whiteFont}`}>Nature photography by Surya</p>
      <ul className="thubnails-list">
        {imagesList.map((each) => (
          <li
            className="thumbnail-item"
            key={each.id}
            onClick={() => updateActiveId(each.id)} //using callbackfunction in order to pass clicked image id to the function
          >
            <img
              src={each.thumbnailUrl}
              className="thubnail-image"
              alt={each.thumbnailAltText}
            />
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`bg-button ${bgButtonColor}`}
        onClick={updateBg}
      >
        {bgStatus}
      </button>
    </div>
  );
}

export default App;
