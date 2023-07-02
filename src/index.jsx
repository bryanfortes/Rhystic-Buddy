import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

class App extends React.Component {
    render() {
        return <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
            <p className="text-3xl text-gray-700 font-bold mb-5">Rhystic Buddy</p>
            <p className="text-gray-500 text-lg">An app made with React and Tailwind CSS</p>
        </div>;
    }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);