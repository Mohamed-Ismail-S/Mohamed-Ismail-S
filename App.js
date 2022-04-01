import React, {Component} from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='App'>
          <div className='container'>
          <div className="row m-4">
            <div className="col-4 border">
              <img className="product-image" src='https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg' />
              <h2>SHIRT</h2>
            </div>
            <div className="col-4 border">
            <img className="product-image" src='https://5.imimg.com/data5/AN/YP/MY-10139824/cotton-pant-500x500.jpg' />
            <h2>TROUSER</h2>
            </div>
            <div className="col-4 border">
            <img className="product-image" src='https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' />
            <h2>SHOES</h2>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
