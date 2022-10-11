import './scss/style.scss';

function App() {

  const handlerChecker = (e) => {

    let basicH2 = document.getElementsByClassName('basicH2')[0];
    let activecH2 = document.getElementsByClassName('activeH2')[0];
    let masterH2 = document.getElementsByClassName('masterH2')[0];
    
    if (e.target.checked) {
      basicH2.textContent = "$ 199.99";
      activecH2.textContent = "$ 249.99";
      masterH2.textContent = "$ 399.99";
    }
    else {
      basicH2.textContent = "$ 19.99";
      activecH2.textContent = "$ 24.99";
      masterH2.textContent = "$ 39.99";

    }

    return

  }

  return (
    <div className='container'>
      <h1>Our Pricing</h1>
      <div className='price-switch'>
        <span>Annualy</span>
        <label className='switch'>
          <input type="checkbox" id='checker' onChange={handlerChecker} />
          <span className='slider'>
          </span>
        </label>
        <span>Monthy</span>
      </div>
      <div className='subscription-items-holder'>
        <div className="subscription-item basic">
          <h3>Basic</h3>
          <h2 className='basicH2'>$ 19.99</h2>
          <hr></hr>
          <span>500 GB Storage</span>
          <hr></hr>
          <span>2 Users Allowed </span>
          <hr></hr>
          <span>Send us to 3GB</span>
          <hr></hr>
          <button className='btn-sub'> Learn More</button>
        </div>
        <div className="subscription-item active">
          <h3>Professional</h3>
          <h2 className='activeH2'>$ 24.99</h2>
          <hr></hr>
          <span>1 TB Storage</span>
          <hr></hr>
          <span>5 Users Allowed </span>
          <hr></hr>
          <span>Send us to 10GB</span>
          <hr></hr>
          <button className='active-btn'> Learn More</button>
        </div>
        <div className="subscription-item master">
          <h3>Master</h3>
          <h2 className='masterH2'>$ 39.99</h2>
          <hr></hr>
          <span>2 TB Storage</span>
          <hr></hr>
          <span>10 Users Allowed </span>
          <hr></hr>
          <span>Send us to 20GB</span>
          <hr></hr>
          <button className='btn-sub'> Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
