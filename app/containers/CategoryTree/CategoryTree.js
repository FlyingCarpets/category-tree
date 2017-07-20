import React from 'react';
import './CategoryTree.scss';

class CategoryTree extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            categories: [],
            value: ''
        }
        // this.state = {
        //     categories:
        //     {
        //         bar: 'bar',
        //         foo: [
        //             {
        //                 ha: 'ha',
        //                 ba:'ba'
        //             }
        //         ],
        //         bla: 'bla'
        //     },
        //     value: ''
        // }
    }
    handleSubmit(e) {
        e.preventDefault();
        let categories = this.state.categories;
        let value = this.state.value;

        categories.push(value);

        this.setState({
            categories: categories,
            value: ''
        })
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handleSubcategoryAdd() {
        console.log('added');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text"
                               className="form-control mt-3"
                               placeholder="Add new category"
                               onChange={this.handleChange.bind(this)}
                               value={this.state.value}/>
                        <button className="btn btn-default mt-3" type="submit">Submit</button>
                    </div>
                </form>
                {/*<ul>
                    { Object.keys(this.state.categories).map((key) => {
                        return (
                            <li key={key}>
                                {this.state.categories[key] == key ?
                                    this.state.categories[key].toString()
                                    :
                                    <span>
                                        <strong>{key}</strong>
                                        <ul>
                                            <li>subcategory</li>
                                        </ul>
                                    </span>
                                }
                            </li>
                        );
                    }, this)}
                </ul>*/}
                <ul>
                    {this.state.categories.map((category, i)=>
                        <li key={i}>
                            <span>{category}</span>
                            <button type="button"
                                    className="btn"
                                    onClick={this.handleSubcategoryAdd.bind(this)}>
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CategoryTree;
