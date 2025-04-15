function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-lang-fa], [data-lang-en]');

  elements.forEach(element => {
    const faText = element.getAttribute('data-lang-fa');
    const enText = element.getAttribute('data-lang-en');

    if (element.querySelector('a')) {
      // اگر داخل عنصر، تگ a وجود دارد، فقط متن a را تغییر بده
      const link = element.querySelector('a');
      if (lang === 'FA') {
        link.textContent = faText;
      } else if (lang === 'EN') {
        link.textContent = enText;
      }
    } else {
      // در غیر این صورت، کل متن عنصر را تغییر بده
      if (lang === 'FA') {
        element.textContent = faText;
      } else if (lang === 'EN') {
        element.textContent = enText;
      }
    }
  });

  // بروزرسانی متن دکمه تغییر زبان
  document.getElementById('current-lang').textContent = lang;
}


  // تابع باز و بسته کردن منوی زبان
  function toggleDropdown() {
    document.getElementById('dropdown').classList.toggle('show');
  }

  // بستن منوی زبان با کلیک در بیرون از آن
  window.onclick = function(event) {
    if (!event.target.matches('.lang-switcher, .lang-switcher *')) {
      const dropdown = document.getElementById('dropdown');
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
  }

  // تابع برای نمایش یا مخفی کردن منوی کشویی و تغییر جهت آیکون
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    const arrowIcon = document.getElementById('arrow-icon');

    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
        arrowIcon.src = 'assets/img/icon-first/down-arrow-5-svgrepo-com (1).svg';
    } else {
        dropdown.style.display = 'none';
        arrowIcon.src = 'assets/img/icon-first/down-arrow-5-svgrepo-com.svg';
    }
}

function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    // Toggle answer visibility with animation
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.textContent = '+';
    } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '-';
    }
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}