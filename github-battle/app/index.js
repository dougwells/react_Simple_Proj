var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');

var userData = {
  name: "Doug Wells",
  userName: "dougwells",
  image: "https://avatars1.githubusercontent.com/u/11793504?v=3&u=cdbaad2d59d94deaef3947e8e523fd0fd6d3b774&s=400"
}

var ProfilePicture = React.createClass({
  render: function(){
    return (
      <img src={this.props.imageURL} />
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Link = React.createClass({

  openLink: function(){
    window.location.replace(this.props.href)
  },

  render: function(){
    return(
      <span
        style = {{color: 'blue', cursor: 'pointer'}}
        onClick = {this.openLink}
      >
        {this.props.children}
      </span>
          )
    }
});

  var ProfileLink = React.createClass({
    render: function() {
      return (
        <div>
          <Link href={"https://www.github.com/" + this.props.userName}>
            {this.props.userName}
          </Link>
        </div>
    )
  }
})

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePicture imageURL={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink userName={this.props.user.userName}/>
      </div>
    )
  }
});


ReactDom.render(
  routes,
  document.getElementById('app')
);
