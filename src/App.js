import React from "react";
import{MenuItem,FormControl,Select} from "@material-ui/core";
import './App.css';
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";

function App() {
  return (
    <div className="App">
      <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
            variant="outlined"
            value="abc"
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              <MenuItem value="worldwide">Option 2</MenuItem>
              <MenuItem value="worldwide">Option 3</MenuItem>
              <MenuItem value="worldwide">Option 4</MenuItem>
            </Select>
          </FormControl>
      </div>

 
    </div>
  );
}

export default App;
