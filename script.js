// Hiệu ứng fade cho các phần tử chung
document.addEventListener('scroll', () => {
  const fadeElements = document.querySelectorAll(
    '.animate-fadeIn, .animate-slideUp'
  );
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
      el.classList.add('show');
    } else {
      el.classList.remove('show'); // reset khi ra khỏi màn hình
    }
  });
});

// render members
const members = [
  {
    name: 'Đinh Đức Thiện',
    role: 'Nhân vật chính',
    image: './assets/member1.jpg',
    back: 'Sinh viên năm nhất từ Thanh Hóa, giọng nói đặc trưng, chăm chỉ, nhiệt tình nhưng hay bị trêu vì quê quán.',
  },
  {
    name: 'Phạm Chí Thuần',
    role: 'Trưởng nhóm dự án',
    image: './assets/member2.jpg',
    back: 'Trưởng nhóm dự án, ban đầu có định kiến với Thiện nhưng dần thay đổi, trở thành bạn tốt.',
  },
  {
    name: 'Võ Khắc Thiện',
    role: 'Nhân vật phụ',
    image: './assets/member3.jpg',
    back: 'Bạn cùng nhóm, hay trêu chọc Thiện, nhưng không ác ý, chỉ theo thói quen.',
  },
  {
    name: 'Nguyễn Văn Hải',
    role: 'Nhân vật phụ',
    image: './assets/member4.jpg',
    back: 'Bạn cùng nhóm, cởi mở, luôn động viên Thiện và giúp hòa giải mọi người.',
  },
  {
    name: 'Phan Văn Tài',
    role: 'Giảng viên (vai phụ)',
    image: './assets/member5.jpg',
    back: 'Giảng viên, vai phụ hỗ trợ nhóm, góp phần đẩy mạnh kịch bản.',
  },
  {
    name: 'Nguyễn Văn Huy',
    role: 'Đạo diễn, biên kịch, editor',
    image: './assets/member6.jpg',
    back: 'Đạo diễn, biên kịch, editor của phim, đảm nhận khâu hậu trường.',
  },
];

const container = document.getElementById('members-container');

members.forEach((m) => {
  container.innerHTML += `
      <div class="flip-card glow-hover w-full h-[400px] member-card opacity-0 scale-90 transition-all duration-700">
        <div class="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d">

          <!-- Mặt trước -->
          <div class="flip-card-front absolute inset-0 bg-gray-800 rounded-2xl overflow-hidden shadow-lg backface-hidden flex flex-col">
            <img src="${m.image}" alt="${m.name}"
                 class="w-full h-[320px] object-cover">
            <div class="p-4 text-center">
              <h3 class="text-xl font-semibold text-white">${m.name}</h3>
              <p class="text-gray-300">${m.role}</p>
            </div>
          </div>

          <!-- Mặt sau -->
          <div class="flip-card-back absolute inset-0 bg-red-600 rounded-2xl p-6 text-center text-white backface-hidden rotate-y-180 flex flex-col items-center justify-center">
            <h3 class="text-2xl font-bold">${m.name}</h3>
            <p class="mt-2 leading-relaxed">${m.back}</p>
          </div>
        </div>
      </div>
    `;
});

// Hiệu ứng cho card thành viên
const cards = document.querySelectorAll('.member-card');

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'scale-90');
        entry.target.classList.add('opacity-100', 'scale-100');
      } else {
        // reset để có hiệu ứng khi lướt lại
        entry.target.classList.add('opacity-0', 'scale-90');
        entry.target.classList.remove('opacity-100', 'scale-100');
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => cardObserver.observe(card));

// Hiệu ứng cho Hậu trường
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('#behind-the-scenes .group');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        } else {
          // reset animation khi ra khỏi màn hình
          entry.target.classList.remove('animate-fadeInUp');
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));
});

var swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 5000, // 5 giây đổi slide
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade', // hiệu ứng fade mượt
  speed: 1000, // tốc độ chuyển 1s
});

function toggleVideo(button) {
  const video = button.parentElement.querySelector('video');
  if (video.paused) {
    video.play();
    video.setAttribute('controls', true); // bật controls khi play
    button.textContent = '⏸️';
  } else {
    video.pause();
    button.textContent = '▶️';
  }
}
