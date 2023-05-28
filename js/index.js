$('.slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev">&#8249</button>',
  nextArrow: '<button type="button" class="slick-next">&#8250</button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

function changeBackgroundColor() {
  let body = document.getElementsByTagName('body')[0];
  let currentBackgroundColor = body.style.backgroundColor;


  if (currentBackgroundColor === 'rgb(37, 35, 35)') {
    body.style.backgroundColor = 'rgb(252, 192, 192)';
  } else {
    body.style.backgroundColor = 'rgb(37, 35, 35)';

  }
}


// Инициализация
AOS.init();


// Модальное окно SweetAlert
// function submitForm(event) {
//   event.preventDefault();
//   Swal.fire({
//     icon: 'success',
//     title: 'Данные успешно отправлены',
//     showConfirmButton: false,
//     position: 'top-right',
//   },2000)

// }
let form = document.getElementById('myForm');
let modal = document.getElementById('modal');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  modal.classList.add('animate__animated', 'animate__jackInTheBox')
  // Показываем окно
  modal.style.display = 'block';
  setTimeout(function () {
    modal.style.display = 'none';
    document.getElementById('myForm').submit();
  }, 2500)

})

let closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none'
})

