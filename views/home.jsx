const React = require('react');
const Modal = require('./modal.jsx');

const myCss = `
    .name-div{ color:red;}
`;

const homeview = React.createClass({
    render: function (){
        return (
            <html>
            <head>
                <title>Hello world!</title>
                <link rel="stylesheet" type="text/css" href="../public/CSS/styles.css"/>
            </head>
            <body>
                <div>
                    <h1>MUCHACHO</h1>
                    <Modal name={this.props.name} surname="onob"/>
                </div>
            </body>
            </html>
        );
    }
});

module.exports = homeview;