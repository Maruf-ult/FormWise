
function App() {
   const sendMessageToTab = async (action: string) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, { action });
    }
  };
  return (
    <div className="p-4 w-64 bg-slate-50 flex flex-col gap-3 shadow-lg">
      <h1 className="text-xl font-extrabold text-slate-800 border-b pb-2">
        Form Master
      </h1>
      
      <button 
        onClick={() => sendMessageToTab("FILL_FORM")}
        className="bg-indigo-600 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 active:scale-95 transition"
      >
         Fill Random Data
      </button>

      <button 
        onClick={() => sendMessageToTab("CLEAR_FORM")}
        className="bg-white text-slate-600 border border-slate-300 font-medium py-2 px-4 rounded-md hover:bg-slate-100 active:scale-95 transition"
      >
         Clear All Fields
      </button>
      
      <p className="text-[10px] text-slate-400 text-center mt-2">
        Works on most standard HTML forms.
      </p>
    </div>
  );
}

export default App