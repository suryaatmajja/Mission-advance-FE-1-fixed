// components/TopBadge.jsx
const TopTen = ({ text = "Top 10", position = "top-right" }) => {
  const positionClass = {
    "top-right": "absolute top-0 right-0",
    "top-left": "absolute top-0 left-0",
    "bottom-right": "absolute bottom-0 right-0",
    "bottom-left": "absolute bottom-0 left-0",
  };

  return (
    <div
      className={`px-2 py-1 bg-red-600 text-white text-sm font-bold rounded-bl-md ${positionClass[position]}`}
    >
      {text}
    </div>
  );
};

export default TopTen;
