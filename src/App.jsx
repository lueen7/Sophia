import { useState } from "react";
import ChatMessage from "./Components/ChatMessage";
import Header from "./Components/Header";
import { formatTime, getRandomResponse } from "../utils/chatUtils";
import LoadingIndicator from "./Components/LoadingIndicator";
import ChatInput from "./Components/ChatInput";
import { generateContent } from "../Services/DeepseekApi";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const [input, setInput] = useState("");
  const [Messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello how can i help you ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleSendMessage = () => {
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setisLoading(true);

    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: generateContent(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setisLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {Messages.map((message) => {
            return (
              <ChatMessage
                key={message.id}
                darkMode={darkMode}
                Messages={message}
                formatTime={formatTime}
              />
            );
          })}
          {isloading && <LoadingIndicator darkMode={darkMode} />}
        </div>
      </div>
      <ChatInput
        darkMode={darkMode}
        input={input}
        setInput={setInput}
        loading={isloading}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SignUp from "./Components/Signup";
// import SignIn from "./Components/SignIn";
// import { useState } from "react";
// import ChatMessage from "./Components/ChatMessage";
// import Header from "./Components/Header";
// import { formatTime, getRandomResponse } from "../utils/chatUtils";
// import LoadingIndicator from "./Components/LoadingIndicator";
// import ChatInput from "./Components/ChatInput";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isloading, setisLoading] = useState(false);
//   const [input, setInput] = useState ("");
//   const [Messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello how can i help you ?",
//       sender: "bot",
//       timestamp: new Date(),
//     },
//   ]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleSendMessage = () => {
//     const userMessage = {
//       id: Date.now().toString(),
//       text: input,
//       sender: "user",
//       timestamp: new Date(),
//     };
//     setMessages((prev)=> [...prev, userMessage]);
//     setInput("");
//     setisLoading(true);

//     setTimeout(()=>{
//       const botMessage = {
//         id: (Date.now() + 1).toString(),
//         text: getRandomResponse(input),
//         sender: "bot",
//         timestamp: new Date(),
//       }
//       setMessages((prev) => [...prev, botMessage]);
//       setisLoading(false);
//     }, 1500);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/" element={ <div className="flex flex-col h-screen">
//       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//       <div className="flex-1 overflow-y-auto p-4 md:p-6">
//         <div className="max-w-5xl mx-auto space-y-4">
//          {Messages.map((message) => {
//           return (
//             <ChatMessage
//               key={message.id}
//               darkMode={darkMode}
//               Messages={message}
//               formatTime={formatTime}
//             />
//           );
//          })}
//           {isloading && <LoadingIndicator darkMode={darkMode} />}
//         </div>
//       </div>
//       <ChatInput
//         darkMode={darkMode}
//         input={input}
//         setInput={setInput}
//         loading={isloading}
//         handleSendMessage={handleSendMessage}
//       />
// (logged in)</div>
// } />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
