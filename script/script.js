const wrapper = document.getElementById("projectWrapper");
const projects = document.querySelectorAll(".projects-1");
const totalProjects = projects.length;
const visibleProjects = 2;
let currentIndex = 0;


function updateSlide() {
    const projectWidth = projects[0].offsetWidth + 29;
    const offset = currentIndex * projectWidth;
    wrapper.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
    if (currentIndex < totalProjects - visibleProjects) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlide();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalProjects - visibleProjects;
    }
    updateSlide();
}

window.addEventListener("resize", updateSlide); // cập nhật khi thay đổi kích thước

function showPopup(message) {
  const popup = document.getElementById('popup');
  popup.querySelector('p').textContent = message;
  popup.classList.remove('hidden');
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
  }, 3000); // popup biến mất sau 3 giây
}


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showPopup('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  const subject = `Liên hệ từ ${name}`;
  const body = `Tên: ${name}%0AEmail: ${email}%0ANội dung:%0A${message}`;

  if (name&& email && message) {
    showPopup('Cảm ơn bạn đã gửi liên hệ!');
    setTimeout(() => {
        window.location.href = `mailto:tranphanminhthuan2674@gmail.com?subject=${subject}&body=${body}`;
    }, 2000); // Thời gian hiển thị popup
}else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
    this.reset(); // Reset form sau khi gửi
});
