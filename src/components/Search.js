import React from "react";

function Search({onHandleSearch}) {


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event) => {onHandleSearch(event.target.value)}} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
