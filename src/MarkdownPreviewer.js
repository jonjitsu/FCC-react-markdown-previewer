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

export default MarkdownPreviewer;
