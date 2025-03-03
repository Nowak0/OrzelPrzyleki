document.addEventListener("DOMContentLoaded", function () {
    const header = document.createElement("header");
    header.innerHTML = `
      <a href="index.html" class="logo">
        <img src="pics/png_czysty_orzel_logo.png" alt="logo orzel przyleki">
      </a>
      <div class="menuToggle"></div>
      <nav>
        <ul>
          <li><a href="#">SENIORZY &#x2335;</a>
            <ul>
              <li><a href="team.html">DRUŻYNA</a></li>
            </ul>
          </li>
          <li><a href="#">AKADEMIA &#x2335;</a>
            <ul>
              <li><a href="academy.html">ORLĘTA</a></li>
              <li><a href="galleryAcademy.html">GALERIA</a></li>
            </ul>
          </li>
          <li><a href="#">WSPARCIE &#x2335;</a>
            <ul>
              <li><a href="sponsors.html">SPONSORZY</a></li>
              <li><a href="biale_blota.html">BIAŁE BŁOTA</a></li>
            </ul>
          </li>
          <li><a href="#">KONTAKT &#x2335;</a>
            <ul>
              <li><a href="contact.html">NAPISZ DO NAS</a></li>
              <li><a href="https://www.facebook.com/OrzelPrzyleki" target="_blank">NASZ FACEBOOK</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    `;
    
    document.body.insertAdjacentElement("afterbegin", header);
  });
  