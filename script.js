document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.search-bar button').addEventListener('click', function () {
        const keyword = document.querySelector('.search-bar input').value.trim().toLowerCase();
        const products = document.querySelectorAll('.product');

        if (keyword) {
            products.forEach(product => {
                const title = product.querySelector('.product-title').innerText.toLowerCase();
                if (title.includes(keyword)) {
                    product.style.display = 'flex'; 
                } else {
                    product.style.display = 'none'; 
                }
            });
        } else {
            products.forEach(product => {
                product.style.display = 'flex'; 
            });
            alert("Vui lòng nhập từ khóa tìm kiếm!");
        }
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.closest('.product');
            const title = product.querySelector('.product-title').innerText;
            const price = product.querySelector('.product-price').innerText;
            const image = product.querySelector('img').src;

            const item = { title, price, image };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });

    const products = document.querySelectorAll('.product');
    function showOnScroll() {
        products.forEach(p => {
            const rect = p.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                p.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', showOnScroll);
    showOnScroll();
});
let products = [];

document.addEventListener("DOMContentLoaded", function () {
    products = document.querySelectorAll(".product");

    function showOnScroll() {
        products.forEach(p => {
            const rect = p.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                p.classList.add('show');
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);

    showOnScroll();
});
