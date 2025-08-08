import {User, Bot} from 'lucide-react';


const ChatMessage = ({darkMode, Messages, formatTime}) => {
  return (
    <div
      className={`flex ${
        Messages.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-[80%] md:max-w-[70%] rounded-2xl px-5 py-3.5 ${
          Messages.sender === "user"
            ? "bg-gradient-to-r from -indigo-600 to-purple-600 text-white shadow-md"
            : darkMode
            ? "bg-gray-800 text-gray-100 border border-gray-700"
            : "bg-white text-gray-800 shadow-md"
        }`}
      >
        <div
          className={`flex-shrink-0 mr-3 ${
            Messages.sender === "user"
              ? "text-indigo-200"
              : darkMode
              ? "text-indigo-400"
              : "text-indigo-600"
          }`}
        >
          {Messages.sender === "user" ? (
            <User className="h-5 w-5" />
          ) : (
            <Bot className="h-5 w-5" />
          )}
        </div>
        <div className="flex-1">
          <div className="mb-1 flex justify-between items-center">
            <span className="font-medium">
              {Messages.sender === "user" ? "You" : "Ai Assistant"}
            </span>
            <span
              className={`text-xs ${
                Messages.sender === "user"
                  ? "opacity-70"
                  : darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              } ml-2`}
            >
              {formatTime(Messages.timestamp)}
            </span>
          </div>
          <p className="text-sm md:text-base whitespace-pre-wrap break-words leading-relaxed">
            {Messages.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage