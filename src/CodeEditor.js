import React from 'react';

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

export default CodeEditor;
