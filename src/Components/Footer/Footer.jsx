import React from 'react'
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">React News</h1>
        
    <h2>Contact</h2>
    
    <address>
      55 Calle Reina Valencia Spain 46006 <br></br>
          
      <a class="footer__btn" href="mailto:reactnews@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Online</a>
        </li>

        <li>
          <a href="#">Print</a>
        </li>
            
        <li>
          <a href="#">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
    
    
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2022 ReactNews. All rights reserved.</p>
    
    <div class="legal__links">
    </div>
  </div>
</footer>
    </div>
  );
}

export default Footer