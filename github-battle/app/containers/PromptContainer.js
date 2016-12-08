var React = require('react');

var PromptContainer = React.createClass({
  render: function(){
    return (
      <div className="jumbotroncol-sm-6 col-sm-offset-3 text-center">
        <h1>Some Header Text</h1>
        <form>
          <div className="form-group">
            <input
              className = "form-control"
              placeholder = "Github Username"
              type = "text"
            />
          </div>
          <div className = "form-group col-sm-4 col-sm-offset-4">
            <button
              className = "btn btn-block btn-success"
              type = "submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = PromptContainer
