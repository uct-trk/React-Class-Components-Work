import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'

class CategoryList extends Component {

    state= {
        categories: []
    }

    // alınan apı nın çalıştırılması
    componentDidMount(){
        this.getCategories();
    }
    // category alınması
    getCategories = () => {
        fetch("http://localhost:3004/categories")
        .then(response => response.json())
        .then(data => this.setState({categories:data}))
    }

    render() {
        return (
            <div>
                <h3 className="text-center">{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map((category) => (
                            <ListGroupItem
                                active={category.categoryName === this.props.currentCategory ? true : false } 
                                onClick={() => this.props.changeCategory(category)} 
                                key={category.id}>{category.categoryName}</ListGroupItem>
                        ))
                    }  
                </ListGroup>
            </div>
        )
    }
}
export default CategoryList