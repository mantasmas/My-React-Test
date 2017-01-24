const React = require('react');
const Modal = require('./modal.jsx');

const homeview = React.createClass({
    render: function (){
        return (
            <html>
            <head>
                <title>Hello world!</title>
            </head>
            <body>
                <div>
                    <h1>MUCHACHO</h1>
                    <Modal name={this.props.name}/>
                </div>
            </body>
            </html>
        );
    }
});

module.exports = homeview;