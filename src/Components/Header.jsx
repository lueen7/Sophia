import { Bot, Sparkles, Sun, Moon} from 'lucide-react';

const Header = ({darkMode, toggleDarkMode}) => {
  return (
    <header
      className={`${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      } shadow-lg py-4 px-6 border-b
      ${darkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        {/* left side content */}
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from bg-purple-500 to indigo-600 rounded-full">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold">Intelligent Chat</h1>
        </div>
        {/* right side content */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 px 3 py-1 rounded text-sm font-medium">
            <Sparkles
              className={`${
                darkMode ? "text-indigo-400" : "text- indigo-600"
              }h-4 w-4`}
            />
            <span
              className={`${
                darkMode ? "text-indigo-300" : "text-indigo-700"
              }text-sm font-medium`}
            >
              Ai Powered
            </span>
            <button
              className={`p-2 mx-2 rounded-full cursor-pointer  ${
                darkMode
                  ? "bg-gray-700 bg-indigo-700 text-yellow-300"
                  : "bg-indigo-100 text-indigo-700"
              }`}
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header