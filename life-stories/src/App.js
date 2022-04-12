import React from "react";
import ConnectModal from "./components/ConnectModal";

const App = () => {
  return (
    <div>
      <div className="app-header">
        <ConnectModal />
      </div>
      <div className="post-container"></div>
    </div>
  );
};

export default App;
