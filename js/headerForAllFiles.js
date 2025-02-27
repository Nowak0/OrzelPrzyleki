function createHeader() {
    const header = document.createElement('header');
  
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo');
    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    const logoImage = document.createElement('img');
    logoImage.src = 'pics/svg_czysty_orzel_logo.svg';
    logoImage.alt = 'logo Orzeł Przyłęki';
    logoLink.appendChild(logoImage);
    logoContainer.appendChild(logoLink);
  
    const nav = document.createElement('nav');
    nav.classList.add('topnav');
    const ul = document.createElement('ul');
  
    const navItems = [
      {
        title: 'SENIORZY &#x2335;',
        links: [
          { text: 'Drużyna', href: 'team.html' },
          { text: 'Galeria', href: 'galleryAcademy.html'}
        ]
      },
      {
        title: 'AKADEMIA &#x2335;',
        links: [
          { text: 'Orlęta', href: 'academy.html' },
          { text: 'Galeria', href: 'galleryAcademy.html'}
        ]
      },
      {
        title: 'WSPARCIE &#x2335;',
        links: [
          { text: 'Sponsorzy', href: 'sponsors.html' },
          { text: 'Gmina Białe Błota', href: 'biale_blota.html' }
        ]
      },
      {
        title: 'KONTAKT &#x2335;',
        links: [
          { text: 'Napisz do nas', href: 'contact.html' },
          { text: 'Nasz Facebook', href: 'https://www.facebook.com/OrzelPrzyleki', target: '_blank' }
        ]
      }
    ];
  
    navItems.forEach(item => {
      const li = document.createElement('li');
      const subnav = document.createElement('div');
      subnav.classList.add('subnav');
      const subnavHeader = document.createElement('a');
      subnavHeader.classList.add('subnavHeader');
      subnavHeader.innerHTML = item.title;
      const subnavContent = document.createElement('div');
      subnavContent.classList.add('subnavContent');
      
      item.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        if (link.target) a.target = link.target;
        a.innerText = link.text;
        subnavContent.appendChild(a);
      });
  
      subnav.appendChild(subnavHeader);
      subnav.appendChild(subnavContent);
      li.appendChild(subnav);
      ul.appendChild(li);
    });

    const mobileLi = document.createElement('li');
    const mobileSubnav = document.createElement('div');
    mobileSubnav.classList.add('subnav');
    const mobileIcon = document.createElement('a');
    mobileIcon.href = 'javascript:void(0);';
    mobileIcon.classList.add('subnavHeader', 'icon');
    mobileIcon.innerHTML = '<i class="fa fa-bars"></i>';
    mobileIcon.onclick = function () { mobileResponsiveMenu(); };
    mobileSubnav.appendChild(mobileIcon);
    mobileLi.appendChild(mobileSubnav);
    ul.appendChild(mobileLi);

    nav.appendChild(ul);
    header.appendChild(logoContainer);
    header.appendChild(nav);

    document.body.prepend(header);
  }
  
  document.addEventListener('DOMContentLoaded', createHeader);
  