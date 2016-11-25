var React = require('react');
var ReactDom = require('react-dom');

var USER_DATA = {
  name: 'Tyler McGinnis',
  username: 'tylermcginnis',
  image: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460'
}

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
})

var ProfilePick = React.createClass({
  render: function(){
    return (
      <img src={this.props.imageUrl} style={{height:100, width:100}} />
    )
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href = {'https://github.com/' + this.props.userName}>
        {this.props.userName}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePick imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink userName={this.props.user.username} />
      </div>
    )
  }
})

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
)
