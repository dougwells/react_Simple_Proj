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

  handleUpdateUser: function(event){
    this.setState({username: event.target.value})
  },

  handleSubmitUser: function(event){
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
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />

    )
  }
})

module.exports = PromptContainer
