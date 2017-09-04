import React from 'react';
import { connect } from 'react-redux';
import { addName, addSurname } from '../../actions/nameActions';
import Description from '../../components/Description/Description';
import './User.scss';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameAdd = this.handleNameAdd.bind(this);
        this.handleSurnameAdd = this.handleSurnameAdd.bind(this);
    }
    handleNameAdd(e) {
        this.setState({
            firstName: e.target.value
        })
    }
    handleSurnameAdd(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();

        this.props.addName(this.state.firstName);
        this.props.addSurname(this.state.lastName);

        this.setState({
            firstName: '',
            lastName: ''
        })
    }
    render() {
        const { name, surname } = this.props.userData;
        const { firstName, lastName } = this.state;

        return (
            <div className="test-container">
                <form onSubmit={ this.handleSubmit }>
                    Enter user first name
                    <div className="form-group">
                        <input
                            onChange={ this.handleNameAdd }
                            value={ firstName }
                            type="text"
                            className="form-control"/>
                    </div>
                    Enter user last name
                    <div className="form-group">
                        <input
                            onChange={ this.handleSurnameAdd }
                            value={ lastName }
                            type="text"
                            className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-default">
                        Submit
                    </button>
                </form>

                <div>
                    First name:
                    <strong>{ name }</strong>
                </div>
                <div>
                    Last name:
                    <strong>{ surname }</strong>
                </div>

                <Description/>

            </div>
        )
    }
}

export default connect(
    (state) => ({ userData: state.userData }),
    { addName, addSurname }
)(User);
