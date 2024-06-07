import '../featured/featured.css';

export const Featured=()=>{
    return(
        <>
        <h2>Products You May Like ✨</h2>
        <div className ="featured">       
            <div>
                <div class="product-card">
                    <i class="fa-regular fa-heart fa-lg add-wishlist" disabled=""></i>
                    <div><img src="https://res.cloudinary.com/shuchita/image/upload/v1717762446/Roadster_tshirt_209_qxuiz7.jpg" alt="T-shirt"/>
                        <h3>Roadster</h3>
                        <p class="product-title">Women Solid T-shirt</p>
                        <div class="price-rating">
                            <div class="price">
                                <h3>₹239</h3>
                                <p>₹299</p>
                            </div>
                            <p>4.1 ⭐</p>
                        </div>
                    </div>
                <button disabled=""><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                </div>
            </div>
            <div>
                <div class="product-card">
                    <i class="fa-regular fa-heart fa-lg add-wishlist" disabled=""></i>
                    <div><img src="https://res.cloudinary.com/shuchita/image/upload/v1717762446/women_solid_pure_cotton_top_sassafaras_lyjhth.jpg" alt="Pure Cotton Top"/>
                        <h3>Sassafras</h3>
                        <p class="product-title">Pure Cotton Top</p>
                        <div class="price-rating">
                            <div class="price">
                                <h3>₹639</h3>
                                <p>₹780</p>
                            </div>
                            <p>3.7 ⭐</p>
                        </div>
                    </div>
                <button disabled=""><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                </div>
            </div>
            <div>
                <div class="product-card">
                    <i class="fa-regular fa-heart fa-lg add-wishlist" disabled=""></i>
                    <div><img src="https://res.cloudinary.com/shuchita/image/upload/v1717762445/road._denim_skirt_699_mecoc7.jpg" alt="Denim Skirt"/>
                        <h3>Tokyo &amp; Talkies</h3>
                        <p class="product-title">Denim Skirt</p>
                        <div class="price-rating">
                            <div class="price">
                                <h3>₹1099</h3>
                                <p>₹1999</p>
                            </div>
                            <p>4.5 ⭐</p>
                        </div>
                    </div>
                <button disabled=""><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                </div>
            </div>
            <div>
                <div class="product-card">
                    <i class="fa-regular fa-heart fa-lg add-wishlist" disabled=""></i>
                    <div><img src="https://res.cloudinary.com/shuchita/image/upload/v1717762445/her_by_invictus_309_xwokdc.jpg" alt="D & G"/>
                        <h3>Dolce &amp; Gabbana</h3>
                        <p class="product-title">Designer Women Top </p>
                        <div class="price-rating">
                            <div class="price">
                                <h3>₹429</h3>
                                <p>₹499</p>
                            </div>
                            <p>4.1 ⭐</p>
                        </div>
                    </div>
                <button disabled=""><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                </div>
            </div>
            <div>
                <div class="product-card">
                    <i class="fa-regular fa-heart fa-lg add-wishlist" disabled=""></i>
                    <div><img src="https://res.cloudinary.com/shuchita/image/upload/v1717762445/Tokyo_Talkies_Peplum_Top_de1jnz.jpg" alt="Peplum Top"/>
                        <h3>Tokyo &amp; Talkies</h3>
                        <p class="product-title">Peplum Top</p>
                        <div class="price-rating">
                            <div class="price">
                                <h3>₹823</h3>
                                <p>₹899</p>
                            </div>
                            <p>4.9 ⭐</p>
                        </div>
                    </div>
                <button disabled=""><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                </div>
            </div>
        </div>
        </>
        
    )
}