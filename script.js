function showSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.left = "0";
    sidebar.style.boxShadow = "10px 0 15px -5px rgba(0, 0, 0, 0.6)";
}
function hideSidebar(){
    const sidebar =document.querySelector('.sidebar')
    sidebar.style.left = "-412px";
    sidebar.style.boxShadow = "none";
}

class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="headerr">
        <nav class="phone-bar">
        <div onclick=showSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></div>
        </nav>
        
        <nav class="sidebar">
          <ul>
            <li onclick=hideSidebar() class="close"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a href="index.html">Sākums</a></li>
            <li><a href="rogainingi.html">Rogainingi</a></li>
            <li><a href="pargajieni.html">Pārgājieni</a></li>
            <li><a href="blogs.html">Blogs</a></li>
            <li><a href="parmums.html">Par mums</a></li>
            <li><a href="kontakti.html">Kontakti</a></li>
          </ul>
        </nav>
        <nav class="nav-bar">    
        
            <img src="images/logo.png" alt="logoleft" class="logoleft">
            <div class="middle">
          <div class="icons">
              <a href="https://www.facebook.com/bajaru.rogainings?_rdr" target="_blank" class="fa fa-facebook"></a>
              <a href="https://x.com/ElinaKreme66753" target="_blank" class="fa fa-twitter"></a>
              <a href="https://www.youtube.com/watch?v=KjEkBBVzEbA" target="_blank" class="fa fa-youtube"></a>
              <a href="https://www.instagram.com/bajaru.rogainings/" target="_blank" class="fa fa-instagram"></a>      
              <div class="language">
                <a href="#">LV</a>
                <a href="#">EN</a>
              </div>
            </div>
        
           <div class="menu">
                <ul>
                  <li class="nedr"><a class="lapa" href="index.html">Sākums</a></li>
        
                  <li class="dr"><a class="lapa" href="rogainingi.html">Rogainingi<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M480-360 280-560h400L480-360Z"/></svg></a>
                    <ul class="dropdown">
                      <li><a href="parmums.html">Bajāru Rogainings</a></li>
                      <li><a href="parmums.html">Arhīvs</a></li>
                    </ul>
                  </li>
        
                  <li class="dr"><a class="lapa" href="pargajieni.html">Pārgājieni<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M480-360 280-560h400L480-360Z"/></svg></a>
                    <ul class="dropdown">
                      <li><a href="parmums.html">100km pārgājiens</a></li>
                      <li><a href="parmums.html">Arhīvs</a></li>
                    </ul>
                  </li>
        
                  <li class="nedr"><a class="lapa" href="blogs.html">Blogs</a></li>
        
                  <li class="dr">
                    <a class="lapa" href="parmums.html">Par mums<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F19E39"><path d="M480-360 280-560h400L480-360Z"/></svg></a>
                    <ul class="dropdown">
                      <li><a href="parmums.html">Kas ir kpunkts?</a></li>
                      <li><a href="parmums.html">Komanda</a></li>
                      <li><a href="parmums.html">Iepriekšējā pieredze</a></li>
                    </ul>
                  </li>
        
                  <li class="nedr"><a class="lapa" href="kontakti.html">Kontakti</a></li>
        
                </ul>
              </div>
            </div>
            <img src="images/logo.png" alt="logoright" class="logoright">
        </nav>
        </header>
        `
    }
}

customElements.define('special-header', SpecialHeader)