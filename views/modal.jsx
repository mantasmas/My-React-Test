const React = require('react');

const modal = React.createClass({
    render: function(){
        return (
            <div>
                <div className="name-div">{this.props.name}</div>
                <div className="name-div">{this.props.surname}</div>
            </div>
        );
    }
});

module.exports = modal;

