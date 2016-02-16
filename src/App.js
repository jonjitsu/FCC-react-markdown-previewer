import React from 'react';
import CodeEditor from './CodeEditor.js';
import MarkdownPreviewer from './MarkdownPreviewer.js';


const EXAMPLE_MD = require('raw!./default-code.md');

class App extends React.Component {
  constructor(){
    super();
    this.state = {code:EXAMPLE_MD}
  }
  update(code) {
    console.log('updated');
    this.setState({code:code.code})
  }
  render() {
    return (
            <div className="row">
              <CodeEditor
                    className="small-6 columns"
                    onChange={this.update.bind(this)}
                    defaultValue={this.state.code} />
              <MarkdownPreviewer
                  className="small-6 columns"
                  value={this.state.code} />
            </div>
        );
  }
}

export default App;
