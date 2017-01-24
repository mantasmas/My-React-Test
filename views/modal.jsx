const React = require('react');

const modal = React.createClass({
    render: function(){
        return (
            <div>
                <div>{this.props.name}</div>
            </div>
        );
    }
});

module.exports = modal;

