import '../home.css';
export const Info=()=>{
    return(
        <><div className="landing-caption">
        <h2>We provide best customer experiences</h2>
        <hr />
        <p>We ensure our customers have the best shopping experience</p>
      </div>

      <div className="cards">
        <div className="card">
          <i class="fa-solid fa-cloud-arrow-up"></i>
          <h4>Original Products</h4>
          <p>
            We provide money back guarantee if the product is not original.
          </p>
        </div>
        <div className="card">
          <i class="fa-solid fa-hand-holding-heart"></i>
          <h4>Satisfaction Guarantee</h4>
          <p>
            Exchange the product you have purchased if it doesn't fit on you.
          </p>
        </div>
        <div className="card">
          <i class="fa-solid fa-cart-flatbed-suitcase"></i>
          <h4>New Arrival Everyday</h4>
          <p>We update our collections almost everyday.</p>
        </div>
        <div className="card">
          <i class="fa-solid fa-truck-fast"></i>
          <h4>Fast & Free Shipping</h4>
          <p>We offer fast and free shipping for our loyal customers.</p>
        </div>
      </div>
      </>
    )
}