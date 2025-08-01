document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      const target = this.getAttribute('target');

      // Nếu link không hợp lệ
      if (!href || href === '#' || href === 'javascript:void(0)') {
        event.preventDefault();
        window.location.href = 'page404.html';
        return;
      }

      // Nếu là link ngoài (http/https) hoặc có target="_blank" thì để mặc định
      if (href.startsWith('http://') || href.startsWith('https://')) {
        return; // Đừng can thiệp vào
      }

      // Link nội bộ thì kiểm tra tồn tại
      event.preventDefault();

      fetch(href, { method: 'HEAD' })
        .then(res => {
          if (!res.ok) {
            window.location.href = 'page404.html';
          } else {
            window.location.href = href;
          }
        })
        .catch(err => {
          console.error('Lỗi khi kiểm tra link:', err);
          window.location.href = 'page404.html';
        });
    });
  });
});
