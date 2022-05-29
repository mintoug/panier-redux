import Cart from './containers/Cart';
import Products from './containers/ProductList'
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-md-12'>
          <h1>commencez le shopping</h1>
        </div>
      </div>
     <div className='row'>
       <div className='col-md-8'>
          <Products />
                   </div>
       <div className='col-md-4'>
          <Cart />
       </div>
     </div>
    </div>
  );
}

export default App;
