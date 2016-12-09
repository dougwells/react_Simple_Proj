var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles/index');

//Functional Stateless component (concise syntax instead of React.createClass)
function Prompt (props){
    return (
      <div style={styles.transparentBg} className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{props.header}</h1>
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className = "form-control"
              placeholder = "Github Username"
              type = "text"
              onChange = {props.onUpdateUser}
              value = {props.username}
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

// Add PropTypes - Required props for this component to render correctly
    Prompt.propTypes = {
      onSubmitUser: PropTypes.func.isRequired,
      onUpdateUser: PropTypes.func.isRequired,
      header: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    };

module.exports = Prompt;
