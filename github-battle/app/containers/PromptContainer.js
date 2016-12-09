var React = require('react');
var styles = require('../styles/index');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      username: ''
    }
  },

  onUpdateUser: function(event){
    this.setState({username: event.target.value})
  },

  onSubmitUser: function(event){
    event.preventDefault();
    var username = this.state.username;
    this.setState({username: ''});
    if(this.props.routeParams.playerOne){
      console.log("Go to Battle!")
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      });
    }else{
      console.log("Go to Player 2")
      console.log('this.state.username = ', this.state.username)
      this.context.router.push('/playerTwo/' + this.state.username)
    }


  },

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
    )
  }
})

module.exports = PromptContainer
