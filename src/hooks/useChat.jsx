// import { createContext, useContext, useEffect, useRef, useState } from "react";

// const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3125";

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [cameraZoomed, setCameraZoomed] = useState(true);

//   const isSendingRef = useRef(false);

//   const chat = async (messageText) => {
//     if (!messageText?.trim()) return [];

//     // duplicate request block
//     if (isSendingRef.current) {
//       console.log("Duplicate chat call blocked");
//       return [];
//     }

//     isSendingRef.current = true;
//     setLoading(true);

//     try {
//       const response = await fetch(`${backendUrl}/chat`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: messageText }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         console.error("Backend error:", data);
//         return [];
//       }

//       const resp = Array.isArray(data?.messages) ? data.messages : [];

//       if (resp.length === 0) {
//         console.error("No messages received from backend:", data);
//         return [];
//       }

//       setMessages((prev) => [...prev, ...resp]);
//       return resp;
//     } catch (error) {
//       console.error("Chat request failed:", error);
//       return [];
//     } finally {
//       setLoading(false);
//       isSendingRef.current = false;
//     }
//   };

//   const onMessagePlayed = () => {
//     setMessages((prev) => prev.slice(1));
//   };

//   useEffect(() => {
//     if (messages.length > 0) {
//       setMessage(messages[0]);
//     } else {
//       setMessage(null);
//     }
//   }, [messages]);

//   return (
//     <ChatContext.Provider
//       value={{
//         chat,
//         message,
//         messages,
//         onMessagePlayed,
//         loading,
//         cameraZoomed,
//         setCameraZoomed,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => {
//   const context = useContext(ChatContext);
//   if (!context) {
//     throw new Error("useChat must be used within a ChatProvider");
//   }
//   return context;
// };

// import { createContext, useContext, useEffect, useRef, useState } from "react";

// const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3125";

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [cameraZoomed, setCameraZoomed] = useState(true);

//   const [assistantText, setAssistantText] = useState("");
//   const [lastResponseMessages, setLastResponseMessages] = useState([]);

//   const isSendingRef = useRef(false);

//   const chat = async (messageText) => {
//     if (!messageText?.trim()) return [];

//     if (isSendingRef.current) {
//       console.log("Duplicate chat call blocked");
//       return [];
//     }

//     isSendingRef.current = true;
//     setLoading(true);

//     try {
//       const response = await fetch(`${backendUrl}/chat`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ message: messageText }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         console.error("Backend error:", data);
//         return [];
//       }

//       const resp = Array.isArray(data?.messages) ? data.messages : [];

//       if (resp.length === 0) {
//         console.error("No messages received from backend:", data);
//         return [];
//       }

//       setMessages((prev) => [...prev, ...resp]);
//       setLastResponseMessages(resp);

//       const combinedText = resp
//         .map((item) => item?.text?.trim())
//         .filter(Boolean)
//         .join(" ");

//       setAssistantText(combinedText);

//       return resp;
//     } catch (error) {
//       console.error("Chat request failed:", error);
//       return [];
//     } finally {
//       setLoading(false);
//       isSendingRef.current = false;
//     }
//   };

//   const onMessagePlayed = () => {
//     setMessages((prev) => prev.slice(1));
//   };

//   useEffect(() => {
//     if (messages.length > 0) {
//       setMessage(messages[0]);
//     } else {
//       setMessage(null);
//     }
//   }, [messages]);

//   return (
//     <ChatContext.Provider
//       value={{
//         chat,
//         message,
//         messages,
//         lastResponseMessages,
//         assistantText,
//         onMessagePlayed,
//         loading,
//         cameraZoomed,
//         setCameraZoomed,
//       }}
//     >
//       {children}
//     </ChatContext.Provider>
//   );
// };

// export const useChat = () => {
//   const context = useContext(ChatContext);
//   if (!context) {
//     throw new Error("useChat must be used within a ChatProvider");
//   }
//   return context;
// };

import { createContext, useContext, useEffect, useRef, useState } from "react";

const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:3125";

// yahan doctor backend ka URL daalo
const doctorBackendUrl =
  import.meta.env.VITE_DOCTOR_UPLOAD_URL || "http://localhost:5000/upload-txt";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cameraZoomed, setCameraZoomed] = useState(true);

  const [assistantText, setAssistantText] = useState("");
  const [lastResponseMessages, setLastResponseMessages] = useState([]);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [doctorSending, setDoctorSending] = useState(false);

  const isSendingRef = useRef(false);

  const chat = async (messageText) => {
    if (!messageText?.trim()) return [];

    if (isSendingRef.current) {
      console.log("Duplicate chat call blocked");
      return [];
    }

    isSendingRef.current = true;
    setLoading(true);
    setAssistantText("");

    try {
      const cleanUserText = messageText.trim();

      const response = await fetch(`${backendUrl}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: cleanUserText }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Backend error:", data);
        return [];
      }

      const resp = Array.isArray(data?.messages) ? data.messages : [];

      if (resp.length === 0) {
        console.error("No messages received from backend:", data);
        return [];
      }

      setMessages((prev) => [...prev, ...resp]);
      setLastResponseMessages(resp);

      const combinedText = resp
        .map((item) => item?.text?.trim())
        .filter(Boolean)
        .join(" ");

      setAssistantText(combinedText);

      // full conversation history maintain karo
      const assistantHistoryItems = resp
        .map((item) => ({
          role: "assistant",
          text: item?.text?.trim() || "",
        }))
        .filter((item) => item.text);

      setConversationHistory((prev) => [
        ...prev,
        { role: "user", text: cleanUserText },
        ...assistantHistoryItems,
      ]);

      return resp;
    } catch (error) {
      console.error("Chat request failed:", error);
      return [];
    } finally {
      setLoading(false);
      isSendingRef.current = false;
    }
  };

  const onMessagePlayed = () => {
    setMessages((prev) => prev.slice(1));
  };

  useEffect(() => {
    if (messages.length > 0) {
      setMessage(messages[0]);
    } else {
      setMessage(null);
    }
  }, [messages]);

  const buildConversationTxt = () => {
    if (!conversationHistory.length) return "";

    return conversationHistory
      .map((item, index) => {
        const speaker = item.role === "user" ? "User" : "AI Doctor";
        return `${index + 1}. ${speaker}: ${item.text}`;
      })
      .join("\n\n");
  };

  const sendConversationToDoctor = async () => {
    const txtContent = buildConversationTxt();

    if (!txtContent.trim()) {
      console.log("No conversation to send");
      return { ok: false, message: "No conversation available" };
    }

    setDoctorSending(true);

    try {
      // Option 1: .txt file as multipart/form-data
      const blob = new Blob([txtContent], { type: "text/plain" });
      const file = new File([blob], "conversation.txt", { type: "text/plain" });

      const formData = new FormData();
      formData.append("file", file);
      formData.append("source", "sanjeevani-frontend");

      const response = await fetch(doctorBackendUrl, {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error("Doctor send failed:", data);
        return { ok: false, message: "Doctor send failed", data };
      }

      console.log("Conversation sent to doctor backend:", data);
      return { ok: true, message: "Conversation sent successfully", data };
    } catch (error) {
      console.error("Doctor send request failed:", error);
      return { ok: false, message: error.message };
    } finally {
      setDoctorSending(false);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        chat,
        message,
        messages,
        lastResponseMessages,
        assistantText,
        conversationHistory,
        buildConversationTxt,
        sendConversationToDoctor,
        doctorSending,
        onMessagePlayed,
        loading,
        cameraZoomed,
        setCameraZoomed,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};