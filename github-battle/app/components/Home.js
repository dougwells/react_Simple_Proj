var React = require('react')
var styles = require('../styles/index')
var Link = require('react-router').Link

var Home = React.createClass({


  render: function(){
    return (
      <div style={styles.transparentBg} className="jumbotron col-sm-12 text-center">
        <h1>Github Battle!</h1>
        <p>Some fancy motto ...</p>
        <Link to={'/playerOne'}>
          <button type='button' className='btn btn-small btn-success'>
            Get Started
          </button>
        </Link>

      </div>
    )
  }
})

module.exports = Home;
