import React from 'react';
//capital F means it will be react component and on the other hand redux form is a function
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
            <h3>Create a Stream</h3>
            <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};


export default connect(null, {createStream})(StreamCreate);