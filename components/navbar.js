const inner = () => {
    return `<div id="top">
    <div id="sec1">
        <marquee behavior="scroll" direction="up" scrollamount="3">Grand Festive Sale is LIve - Up To 50% Off</marquee>
    </div>
    <div id="sec2">
        <div id="it">
            <i class="fa-solid fa-mobile-screen-button"></i>
            <h4>Get App | </h4>
        </div>
        <div>
            <i class="fa-solid fa-location-dot"></i>
            <h4> Store & Events | </h4>
        </div>
        <div>
            <i class="fa-regular fa-credit-card"></i>
            <h4 id="goGift">Gift Card |</h4>
        </div>
        <div>
            <i class="fa-solid fa-circle-question"></i>
            <h4>Help</h4>
        </div>
    </div>
</div>`
}



const navbar = () => {

    return `<nav>
        <div class="wrapper">
            <div id="logo">
                <a href="index.html">
                    <img src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.png" alt="nykaa-logo">
                </a>
            </div>
        <input type="radio" name="slider" id="menu-btn">
        <input type="radio" name="slider" id="close-btn">
        <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
            <li>
                <a href="#" class="desktop-item">Categories</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">Categories</label>
            </li>
            <li>
                <a href="#" class="desktop-item">Brand</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">Brand</label>
            </li>
            <li>
                <a href="#" class="desktop-item">Luxe</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">Luxe</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <header>Makeup Collection</header>
                            <ul class="mega-links">
                            <li><a href="#">Face</a></li>
                            <li><a href="#">Foundation</a></li>
                            <li><a href="#">Compact</a></li>
                            <li><a href="#">Highlighter</a></li>
                            <li><a href="#">Setting Spray</a></li>
                            <li><a href="#">Primer</a></li>
                            <li><a href="#">Concealer</a></li>
                            <li><a href="#">Blush</a></li>
                            <li><a href="#">Loose Powder</a></li>
                            <li><a href="#">Bronzer</a></li>
                            <li><a href="#">Makeup Remover</a></li>
                            <li><a href="#">Tinted Moisturizer</a></li>
                            <li><a href="#">Contouring</a></li>
                            <li><a href="#">BB & CC Cream</a></li>
                            <li><a href="#">Face Palette</a></li>
                            </ul>
                        </div>    
                        <div class="row">
                            <header>Eyes</header>
                            <ul class="mega-links">
                            <li><a href="#">Eye Shadow</a></li>
                            <li><a href="#">Mascara</a></li>
                            <li><a href="#">Eyeliner & Kajal</a></li>
                            <li><a href="#">Brows</a></li>
                            <li><a href="#">Eye Primer</a></li>
                            <li><a href="#">Concealer</a></li>
                            <li><a href="#">Lashes</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Lips</header>
                            <ul class="mega-links">
                            <li><a href="#">Lipstick</a></li>
                            <li><a href="#">Liquid Lipstick</a></li>
                            <li><a href="#">Lip Balm</a></li>
                            <li><a href="#">Lip Plumper</a></li>
                            <li><a href="#">Lip Liner</a></li>
                            <li><a href="#">Lip Tint</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Tools & Brushes</header>
                            <ul class="mega-links">
                            <li><a href="#">Face Brush</a></li>
                            <li><a href="#">Eye Brush</a></li>
                            <li><a href="#">Applicators</a></li>
                            <li><a href="#">Lip Brush</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Tools & Brushes</header>
                            <ul class="mega-links">
                            <li><a href="#">Face Brush</a></li>
                            <li><a href="#">Eye Brush</a></li>
                            <li><a href="#">Applicators</a></li>
                            <li><a href="#">Lip Brush</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">Nykaa Fashion</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">Nykaa Fashion</label>
                <div class="mega-box">
                    <div class="content">
                        <div class="row">
                            <header>Women</header>
                            <ul class="mega-links">
                            <li><a href="#">Indianwear</a></li>
                            <li><a href="#">Westernwear</a></li>
                            <li><a href="#">Footwear</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Lingerie</a></li>
                            <li><a href="#">Sportswear</a></li>
                            <li><a href="#">Sleep & Lounge</a></li>
                            <li><a href="#">Jewellery</a></li>
                            <li><a href="#">Watches</a></li>
                            <li><a href="#">Accessories</a></li>
                            </ul>
                        </div>    
                        <div class="row">
                            <header>Men</header>
                            <ul class="mega-links">
                            <li><a href="mens.html">Topwear</a></li>
                            <li><a href="mens.html">Bottomwear</a></li>
                            <li><a href="mens.html">Ethnicwear</a></li>
                            <li><a href="mens.html">Footwear</a></li>
                            <li><a href="mens.html">Athleisure</a></li>
                            <li><a href="mens.html">Watches</a></li>
                            <li><a href="mens.html">Accessories</a></li>
                            <li><a href="mens.html">Bags</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Tech</header>
                            <ul class="mega-links">
                            <li><a href="#">Smart Watches</a></li>
                            <li><a href="#">Headphones</a></li>
                            <li><a href="#">Spekers</a></li>
                            <li><a href="#">Chargers & Cables</a></li>
                            <li><a href="#">Power Banks</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Kids</header>
                            <ul class="mega-links">
                            <li><a href="#">Westernwear</a></li>
                            <li><a href="#">Indianwear</a></li>
                            <li><a href="#">Winterwear</a></li>
                            <li><a href="#">Footwear</a></li>
                            <li><a href="#">Toys & Games</a></li>
                            <li><a href="#">Feeding</a></li>
                            <li><a href="#">Sportswear</a></li>
                            <li><a href="#">Sleep & Lounge</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Home</header>
                            <ul class="mega-links">
                            <li><a href="#">Kitchen & Dining</a></li>
                            <li><a href="#">Decor</a></li>
                            <li><a href="#">Bedding</a></li>
                            <li><a href="#">Bath</a></li>
                            <li><a href="#">Storage</a></li>
                            <li><a href="#">Floor Coverings</a></li>
                            <li><a href="#">Kitchen Appliances</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>House of Nykaa</header>
                            <ul class="mega-links">
                            <li><a href="#">Twenty Dresses by Nykaa Fashion</a></li>
                            <li><a href="#">RSVP By Nykaa Fashion</a></li>
                            <li><a href="#">Gajra Gang</a></li>
                            <li><a href="#">Pipa Bella</a></li>
                            <li><a href="#">IYKYK By Nykaa Fashion</a></li>
                            <li><a href="#">Kica</a></li>
                            <li><a href="#">Twig</a></li>
                            <li><a href="#">Likha By Nykaa Fashion</a></li>
                            </ul>
                        </div>
                        <div class="row">
                            <header>Top Brands</header>
                            <ul class="mega-links">
                            <li><a href="#">Vera Moda</a></li>
                            <li><a href="#">W</a></li>
                            <li><a href="#">Fabindia</a></li>
                            <li><a href="#">Na-Kd</a></li>
                            <li><a href="#">Koton</a></li>
                            <li><a href="#">I Saw It First</a></li>
                            <li><a href="#">Swatantra</a></li>
                            <li><a href="#">Biba</a></li>
                            <li><a href="#">Forever New</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <a href="#" class="desktop-item">Beauty Advice</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">Beauty Advice</label>
            </li>
        </ul>
        
        <div id="ac">
            <i class="fa-regular fa-user"></i>
            <h4>Account</h4>
        </div>
        <div id="cr">
        <a href="cart.html"><i class="fa-solid fa-bag-shopping"></i><span id="items_count">0</span></a>
            
        </div>
    </nav>`
}







export { inner, navbar }