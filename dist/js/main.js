// создание яндекс-карты
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938635, 30.323118],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш магазин',
            balloonContent: 'Вход с торца'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/dist/img/location-icon.svg',
            // Размеры метки.
            iconImageSize: [80, 140],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
});

//создание слайдера

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

});

var mySwiper = new Swiper('.swiper-container-fon', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
    },

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    // },

});

// валидация формы

$(".modal__form").validate({
    errorClass: "invalid",
    rules: {
        // simple rule, converted to {required:true}
        userName: {
            required: true,
            minlength: 2
        },
        // compound rule
        userEmail: {
            required: true,
            email: true
        }
    },
    messages: {
        userName: {
            required: "Имя и Фамилия обязательны",
            minlength: "Имя не короче двух букв"
        },
        userEmail: {
            required: "Обязательно введите email",
            email: "Введите в формате name@domain.com"
        }
    }
});

$(".commercial__feedback").validate({
    errorClass: "invalid",
    rules: {
        // compound rule
        userEmail: {
            required: true,
            email: true
        }
    },
    messages: {
        userEmail: {
            required: "Обязательно введите email",
            email: "Введите в формате name@domain.com"
        }
    }
});

$(".nav__form").validate({
    errorClass: "invalid",
    rules: {
        // compound rule
        userEmail: {
            required: true,
            email: true
        },
        password: {
            required: true
        }
    },
    messages: {
        userEmail: {
            required: "Обязательно введите email",
            email: "Введите в формате name@domain.com"
        },
        password: {
            required: "Пароль обязателен"
        }
    }
});

// подключение форм

let navForm = document.querySelector('.nav__form');
document.querySelector('.nav__inter').addEventListener('click', ()=>{
    navForm.style.display = 'block';
});

let modalForm = document.querySelector('.modal');

modalForm.querySelector('.modal__close').addEventListener('click', ()=>{
   modalForm.style.display = 'none';
});

document.querySelector('#map-btn').addEventListener('click', ()=>{
    console.log(modalForm);
    modalForm.style.display = 'block';
});
