import CategoryList from './components/CategoryList'
import Nav from './components/Nav'
import ProductList from './components/ProductList'
import { Col, Container, Row } from 'reactstrap'
import { Component } from 'react'
import Navi from './components/Nav'
import alertify from 'alertifyjs'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './components/NotFound'
import CartList from './components/CartList'
import FormDemo1 from './components/FormDemo1'
import FormDemo2 from './components/FormDemo2'

class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  }


  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    console.log(category)

    // change category tıklayınca getProducts çalışıyor. getProducts çağırılınca product statesi değişir ve product list yeniden render edilecek
    this.getProducts(category.id)
  }


  getProducts = (categoryId) => {

    let url = "http://localhost:3004/products"
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  addToCart = (product) => {
    let newCart = this.state.cart
    var addedItem = newCart.find(c => c.product.id === product.id)
    if (addedItem) {
      addedItem.quantity += 1
    } else {
      newCart.push({ product: product, quantity: 1 })
    }

    this.setState({ cart: newCart })
    alertify.success(product.productName + "<br/>" + "Ürün Sepete Eklendi", 2)
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + "<br/>" + "Ürün Sepetten Çıkarıldı", 2)
  }

  render() {
    let productInfo = { title: "Product List" }
    let categoryInfo = { title: "Category List" }

    return (
      <Router>
        <div>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart} />

          <Container>
            <Row>
              <Col xs="3">
                <CategoryList
                  currentCategory={this.state.currentCategory}
                  changeCategory={this.changeCategory}
                  info={categoryInfo} />
              </Col>

              <Col xs="9">
                <Switch>
                  <Route exact path="/" render={props => (
                    <ProductList
                    {...props}
                    products={this.state.products}
                    addToCart={this.addToCart}
                    currentCategory={this.state.currentCategory}
                    info={productInfo} />
                  )
                  }>
                  </Route>

                  <Route path="/cart" render={props => (
                    <CartList 
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                    />
                  )
                  }>
                  </Route>

                  <Route path="/form1">
                    <FormDemo1/>
                  </Route>

                  <Route path="/form2">
                    <FormDemo2/>
                  </Route>

                  <Route>
                    <NotFound />
                  </Route>

                </Switch>
              </Col>

            </Row>
          </Container>


        </div>
      </Router>
    );
  }
}

export default App;
