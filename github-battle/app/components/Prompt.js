var React = require('react');
var styles = require('../styles/index');

var Prompt = React.createClass({
  render: function(){
    return (
    <div style={styles.transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{this.props.route.header}</h1>
      <form onSubmit={this.onSubmitUser}>
        <div className="form-group">
          <input
            className = "form-control"
            placeholder = "Github Username"
            type = "text"
            onChange = {this.onUpdateUser}
            value = {this.state.username}
          />
        </div>
        <div className = "form-group col-sm-4 col-sm-offset-4">
          <button
            className = "btn btn-block btn-success"
            type = "submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  )}
});

module.exports = Prompt;
