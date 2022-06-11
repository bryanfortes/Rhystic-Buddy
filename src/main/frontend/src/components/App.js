import React from "react";
import SearchBar from "./SearchBar";
import DB from "../api/DB"

class App extends React.Component {
    state = { cards: []};

  onSearchSubmit = async (term) => {
    const response = await DB.get("http://localhost:8080/api/v1/card").then((response)=>{console.log(response.data);});
     // this.setState({cards: response.data});
  }


  render() {
    return (
      <div className={"ui container"} style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
