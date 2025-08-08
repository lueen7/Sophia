//Generate a random response from the Ai
export const getRandomResponse = () => {
  const botResponse = [
    "I understand your question. Let me think about that...",
    "That's an interesting point! Here's what i know...",
    "Based on my knowledge, i can tell you that...",
    "i'd be happy to help with that! Here's some information...",
    "Great question! The answer depends on several factors...",
  ];
  return botResponse[Math.floor(Math.random() * botResponse.length)];
};

//Format timestamp to readable time
export const formatTime = (date) => {
  return date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
};
