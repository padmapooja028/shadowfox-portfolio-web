  
    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener('click', function(e){
        const targetId = this.getAttribute('href');
        if(targetId.length>1){
          e.preventDefault();
          document.querySelector(targetId).scrollIntoView({ behavior:'smooth', block:'start' });
        }
      });
    });

    function validateForm(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msgBox = document.getElementById('formMsg');

      if(name.length < 2){ msgBox.textContent = 'Please enter your full name.'; return false; }
      if(!email.includes('@') || email.length < 6){ msgBox.textContent = 'Please enter a valid email.'; return false; }
      if(message.length < 10){ msgBox.textContent = 'Message should be at least 10 characters.'; return false; }

      msgBox.style.color = 'green';
      msgBox.textContent = 'Thanks! Your message was received (demo).';

      setTimeout(()=>{
        document.getElementById('contactForm').reset();
        msgBox.textContent = '';
        msgBox.style.color = '';
      }, 1400);

      return false;
    }
  