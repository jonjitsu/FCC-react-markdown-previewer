import React from 'react';
import marked from 'marked';

class MarkdownPreviewer extends React.Component {
  toHtml() {
    return { __html: marked(this.props.value.toString(), {sanitize:true}) };
  }
  render() {
    return <div
            className={this.props.className}
            dangerouslySetInnerHTML={this.toHtml()} />
  }
}

class CodeEditor extends React.Component {
  update(e) {
      this.props.onChange({code:e.target.value});
  }
  render() {
    let classNames=this.props.className.split(/\s+/),
        styles = { height:'100vh' };
    classNames.push('codeEditor');
    return (
      <div
          className={classNames.join(' ')}>
        <textarea
              style={styles}
              className='editor'
              onChange={this.update.bind(this)}
              placeholder="Enter code"
              defaultValue={this.props.defaultValue} ></textarea>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {code:require('raw!./default-code.md') }
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

function getDefaultCode() {
  return "";
}
