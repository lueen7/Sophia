const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
const DEEPSEEK_API_URL = `${import.meta.env.VITE_DEEPSEEK_API_URL}
`;

export const generateContent = async (message) => {
  if (!DEEPSEEK_API_KEY) {
    throw new Error("DEEPSEEK_API_KEY is not defined in .env file");
  }

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`,
        "Content-Type": "application/json",
        "X-Title": "SOPHIA",
      },
      // body: JSON.stringify({
      //   contents: [
      //     {
      //       parts: [
      //         {
      //           text: message,
      //         },
      //       ],
      //     },
      //   ],
      // }),
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Error response from Deepseek API", errorText);
      throw new Error(
        `Deepseek Api error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    if (!data) {
      throw new Error("No response");
    }
console.log(data);


    return data.choices[0].message.content || "No response from AI";
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};
