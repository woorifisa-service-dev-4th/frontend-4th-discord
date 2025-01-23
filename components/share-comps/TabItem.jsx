const TabItem = ({ label, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 text-sm rounded-md ${
          isActive
            ? 'bg-gray-600 text-white'
      : 'bg-discordDark text-gray-300 hover:bg-gray-600 hover:text-white'
        }`}
      >
        {label}
      </button>
    );
  };
  
  export default TabItem;
  