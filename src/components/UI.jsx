// // import { useRef } from "react";
// // import { useChat } from "../hooks/useChat";

// // export const UI = ({ hidden, ...props }) => {
// //   const input = useRef();
// //   const { chat, loading, cameraZoomed, setCameraZoomed, message } = useChat();

// //   const sendMessage = () => {
// //     const text = input.current.value;
// //     if (!loading && !message) {
// //       chat(text);
// //       input.current.value = "";
// //     }
// //   };
// //   if (hidden) {
// //     return null;
// //   }

// //   return (
// //     <>
// //       <div className="fixed top-0 left-0 right-0 bottom-0 z-10 flex justify-between p-4 flex-col pointer-events-none">
// //         <div className="self-start backdrop-blur-md bg-white bg-opacity-50 p-4 rounded-lg">
// //           <h1 className="font-black text-xl">My Virtual GF</h1>
// //           <p>I will always love you ❤️</p>
// //         </div>
// //         <div className="w-full flex flex-col items-end justify-center gap-4">
// //           <button
// //             onClick={() => setCameraZoomed(!cameraZoomed)}
// //             className="pointer-events-auto bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-md"
// //           >
// //             {cameraZoomed ? (
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 strokeWidth={1.5}
// //                 stroke="currentColor"
// //                 className="w-6 h-6"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
// //                 />
// //               </svg>
// //             ) : (
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 strokeWidth={1.5}
// //                 stroke="currentColor"
// //                 className="w-6 h-6"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
// //                 />
// //               </svg>
// //             )}
// //           </button>
// //           <button
// //             onClick={() => {
// //               const body = document.querySelector("body");
// //               if (body.classList.contains("greenScreen")) {
// //                 body.classList.remove("greenScreen");
// //               } else {
// //                 body.classList.add("greenScreen");
// //               }
// //             }}
// //             className="pointer-events-auto bg-pink-500 hover:bg-pink-600 text-white p-4 rounded-md"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               strokeWidth={1.5}
// //               stroke="currentColor"
// //               className="w-6 h-6"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //         <div className="flex items-center gap-2 pointer-events-auto max-w-screen-sm w-full mx-auto">
// //           <input
// //             className="w-full placeholder:text-gray-800 placeholder:italic p-4 rounded-md bg-opacity-50 bg-white backdrop-blur-md"
// //             placeholder="Type a message..."
// //             ref={input}
// //             onKeyDown={(e) => {
// //               if (e.key === "Enter") {
// //                 sendMessage();
// //               }
// //             }}
// //           />
// //           <button
// //             disabled={loading || message}
// //             onClick={sendMessage}
// //             className={`bg-pink-500 hover:bg-pink-600 text-white p-4 px-10 font-semibold uppercase rounded-md ${
// //               loading || message ? "cursor-not-allowed opacity-30" : ""
// //             }`}
// //           >
// //             Send
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export const UI = ({ hidden }) => {
// //   if (hidden) return null;

// //   return (
// //     <>
// //       {/* Pure Clean Screen - Only Avatar */}
// //       <div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center">
        
// //         {/* Optional subtle overlay (hospital feel light) */}
// //         <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/30 backdrop-blur-[2px]" />

// //       </div>
// //     </>
// //   );
// // };
// import { useRef } from "react";
// import { useChat } from "../hooks/useChat";

// export const UI = ({ hidden }) => {
//   const input = useRef();
//   const { chat, loading, message } = useChat();

//   const sendMessage = () => {
//     const text = input.current.value.trim();
//     if (!text) return;

//     if (!loading && !message) {
//       chat(text);
//       input.current.value = "";
//     }
//   };

//   if (hidden) return null;

//   return (
//     <>
//       {/* FULL SCREEN - NO BLUR */}
//       <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-end">

//         {/* Bottom Chat Input */}
//         <div className="w-full max-w-3xl mx-auto mb-6 px-4 pointer-events-auto">
//           <div className="flex items-center gap-3 bg-white/90 border border-gray-200 shadow-xl rounded-2xl p-3">

//             {/* Input */}
//             <input
//               ref={input}
//               placeholder="Talk to your AI Doctor..."
//               className="flex-1 p-3 rounded-xl outline-none bg-gray-50 text-gray-800"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") sendMessage();
//               }}
//             />

//             {/* Button */}
//             <button
//               onClick={sendMessage}
//               disabled={loading || message}
//               className={`px-6 py-3 rounded-xl text-white font-semibold transition ${
//                 loading || message
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               {loading ? "..." : "Send"}
//             </button>

//           </div>
//         </div>

//       </div>
//     </>
//   );
// };

// import { useRef } from "react";
// import { useChat } from "../hooks/useChat";

// export const UI = ({ hidden }) => {
//   const input = useRef();

//   const { chat, loading, message, assistantText } = useChat();

//   const sendMessage = async () => {
//     const text = input.current.value.trim();
//     if (!text) return;

//     if (!loading && !message) {
//       await chat(text);
//       input.current.value = "";
//     }
//   };

//   if (hidden) return null;

//   return (
//     <>
//       <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-end">
//         <div className="w-full max-w-3xl mx-auto mb-6 px-4">
//           {/* Assistant response box */}
//           {assistantText && (
//             <div className="mb-4 pointer-events-none">
//               <div className="bg-white/90 border border-gray-200 shadow-xl rounded-2xl px-5 py-4">
//                 <p className="text-sm font-semibold text-blue-700 mb-1">
//                   AI Doctor
//                 </p>
//                 <p className="text-gray-800 leading-7 text-[15px]">
//                   {assistantText}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Loading state */}
//           {loading && (
//             <div className="mb-4 pointer-events-none">
//               <div className="bg-white/90 border border-gray-200 shadow-xl rounded-2xl px-5 py-4">
//                 <p className="text-sm font-semibold text-blue-700 mb-1">
//                   AI Doctor
//                 </p>
//                 <p className="text-gray-500 text-[15px]">
//                   Thinking...
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Bottom Chat Input */}
//           <div className="pointer-events-auto">
//             <div className="flex items-center gap-3 bg-white/90 border border-gray-200 shadow-xl rounded-2xl p-3">
//               <input
//                 ref={input}
//                 placeholder="Talk to your AI Doctor..."
//                 className="flex-1 p-3 rounded-xl outline-none bg-gray-50 text-gray-800"
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") sendMessage();
//                 }}
//               />

//               <button
//                 onClick={sendMessage}
//                 disabled={loading || message}
//                 className={`px-6 py-3 rounded-xl text-white font-semibold transition ${
//                   loading || message
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-600 hover:bg-blue-700"
//                 }`}
//               >
//                 {loading ? "..." : "Send"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// import { useRef, useState } from "react";
// import { useChat } from "../hooks/useChat";

// export const UI = ({ hidden }) => {
//   const input = useRef();

//   const {
//     chat,
//     loading,
//     message,
//     assistantText,
//     sendConversationToDoctor,
//     doctorSending,
//     conversationHistory,
//   } = useChat();

//   const [doctorStatus, setDoctorStatus] = useState("");

//   const sendMessage = async () => {
//     const text = input.current.value.trim();
//     if (!text) return;

//     if (!loading && !message) {
//       await chat(text);
//       input.current.value = "";
//     }
//   };

//   const handleDoctorSend = async () => {
//     const result = await sendConversationToDoctor();
//     setDoctorStatus(result?.message || "");
//   };

//   if (hidden) return null;

//   return (
//     <>
//       <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-end">
//         <div className="w-full max-w-3xl mx-auto mb-6 px-4">
//           {assistantText && (
//             <div className="mb-4 pointer-events-none">
//               <div className="bg-white/90 border border-gray-200 shadow-xl rounded-2xl px-5 py-4">
//                 <p className="text-sm font-semibold text-blue-700 mb-1">
//                   AI Doctor
//                 </p>
//                 <p className="text-gray-800 leading-7 text-[15px]">
//                   {assistantText}
//                 </p>
//               </div>
//             </div>
//           )}

//           {loading && (
//             <div className="mb-4 pointer-events-none">
//               <div className="bg-white/90 border border-gray-200 shadow-xl rounded-2xl px-5 py-4">
//                 <p className="text-sm font-semibold text-blue-700 mb-1">
//                   AI Doctor
//                 </p>
//                 <p className="text-gray-500 text-[15px]">Thinking...</p>
//               </div>
//             </div>
//           )}

//           {doctorStatus && (
//             <div className="mb-4 pointer-events-none">
//               <div className="bg-green-50/95 border border-green-200 shadow-xl rounded-2xl px-5 py-3">
//                 <p className="text-green-700 text-sm font-medium">
//                   {doctorStatus}
//                 </p>
//               </div>
//             </div>
//           )}

//           <div className="pointer-events-auto">
//             <div className="flex items-center gap-3 bg-white/90 border border-gray-200 shadow-xl rounded-2xl p-3">
//               <input
//                 ref={input}
//                 placeholder="Talk to your AI Doctor..."
//                 className="flex-1 p-3 rounded-xl outline-none bg-gray-50 text-gray-800"
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") sendMessage();
//                 }}
//               />

//               <button
//                 onClick={sendMessage}
//                 disabled={loading || message}
//                 className={`px-6 py-3 rounded-xl text-white font-semibold transition ${
//                   loading || message
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-blue-600 hover:bg-blue-700"
//                 }`}
//               >
//                 {loading ? "..." : "Send"}
//               </button>

//               <button
//                 onClick={handleDoctorSend}
//                 disabled={doctorSending || conversationHistory.length === 0}
//                 className={`px-6 py-3 rounded-xl text-white font-semibold transition ${
//                   doctorSending || conversationHistory.length === 0
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-emerald-600 hover:bg-emerald-700"
//                 }`}
//               >
//                 {doctorSending ? "Sending..." : "Doctor Send"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

import { useRef, useState } from "react";
import { useChat } from "../hooks/useChat";

export const UI = ({ hidden }) => {
  const input = useRef();

  const {
    chat,
    loading,
    message,
    assistantText,
    sendConversationToDoctor,
    doctorSending,
    conversationHistory,
  } = useChat();

  const [doctorStatus, setDoctorStatus] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  let recognitionRef = useRef(null);

  const startRecording = () => {
  try {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN"; // Hinglish best
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      console.log("🎤 Recording started");
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      console.log("🎤 Heard:", transcript);

      // input me auto fill
      input.current.value = transcript;

      // 🔥 OPTIONAL: auto send
      setTimeout(() => {
        sendMessage();
      }, 300);
    };

    recognition.onend = () => {
      console.log("🎤 Recording ended");
      setIsRecording(false);
    };

    recognition.onerror = (err) => {
      console.error("Speech error:", err);
      setIsRecording(false);
    };

    recognitionRef.current = recognition;

    // 🔥 IMPORTANT: AUTO START
    recognition.start();

  } catch (err) {
    console.error(err);
  }
};
  // 🎤 Stop Recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const sendMessage = async () => {
    const text = input.current.value.trim();
    if (!text) return;

    if (!loading && !message) {
      await chat(text);
      input.current.value = "";
    }
  };

  const handleDoctorSend = async () => {
    const result = await sendConversationToDoctor();
    setDoctorStatus(result?.message || "");
  };

  if (hidden) return null;

  return (
    <>
      <div className="fixed inset-0 z-10 pointer-events-none flex flex-col justify-end">
        <div className="w-full max-w-3xl mx-auto mb-6 px-4">

          {/* AI Response */}
          {assistantText && (
            <div className="mb-4 pointer-events-none">
              <div className="bg-white/90 border shadow-xl rounded-2xl px-5 py-4">
                <p className="text-blue-700 font-semibold mb-1">AI Doctor</p>
                <p>{assistantText}</p>
              </div>
            </div>
          )}

          {/* Doctor status */}
          {doctorStatus && (
            <div className="mb-4 pointer-events-none">
              <div className="bg-green-100 rounded-xl p-3">
                {doctorStatus}
              </div>
            </div>
          )}

          {/* Input + Buttons */}
          <div className="pointer-events-auto">
            <div className="flex items-center gap-3 bg-white shadow-xl rounded-2xl p-3">

              {/* Input */}
              <input
                ref={input}
                placeholder="Talk to your AI Doctor..."
                className="flex-1 p-3 rounded-xl outline-none bg-gray-50"
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              />

              {/* 🎤 MIC BUTTON */}
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`px-4 py-3 rounded-xl text-white ${
                  isRecording
                    ? "bg-red-500 animate-pulse"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {isRecording ? "Stop 🎙️" : "Mic 🎤"}
              </button>

              {/* Send */}
              <button
                onClick={sendMessage}
                disabled={loading || message}
                className={`px-5 py-3 rounded-xl text-white ${
                  loading || message
                    ? "bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                Send
              </button>

              {/* Doctor Send */}
              <button
                onClick={handleDoctorSend}
                disabled={doctorSending || conversationHistory.length === 0}
                className={`px-5 py-3 rounded-xl text-white ${
                  doctorSending
                    ? "bg-gray-400"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Doctor
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};