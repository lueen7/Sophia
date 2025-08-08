// //Generate a local storage key for the chat history and dark mode.
// import { useState } from "react";
// import { useEffect } from "react";
// import { useLocalStorage } from "usehooks-ts";
// import ChatMessage from "./ChatMessage";
// import Header from "./Header";
// import { v4 as uuidv4 } from "uuid";
// import { useCallback } from "react";
// // This component manages local storage for dark mode and chat history.

// const LocalStore = () => {
//   const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
//   const [messages, setMessages] = useLocalStorage("chatHistory", []);

//   const toggleDarkMode = useCallback(() => {
//     setDarkMode((prev) => !prev);
//   }, [setDarkMode]);

//   const addMessage = (text, sender) => {
//     const newMessage = {
//       id: uuidv4(),
//       text,
//       sender,
//       timestamp: new Date(),
//     };
//     setMessages((prev) => [...prev, newMessage]);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
//       <div className="flex-1 overflow-y-auto p-4 md:p-6">
//         <div className="max-w-5xl mx-auto space-y-4">
//           {messages.map((msg) => (
//             <ChatMessage key={msg.id} darkMode={darkMode} Messages={msg} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocalStore;
