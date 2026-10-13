
async function getData() {

    const main = document.querySelector("#main");
    const message = document.querySelector("#message");
    const loader = document.querySelector("#loader");

    main.innerHTML = "";
    message.innerHTML = "";
    loader.style.display = "block";

    try {

        let response = await fetch("https://dummyjson.com/products?limit=20");

        let data = await response.json();

        let products = data.products;

        setTimeout(() => {

            hideLoader();

            for (let i = 0; i < products.length; i++) {

                console.log(products[i]);

                let product = products[i];

                main.innerHTML += `
                    <div class="col-md-4 col-lg-3 mb-4">

                        <section class="card h-100">

                            <img src="${product.thumbnail}"
                                 class="card-img-top product-image"
                                 alt="${product.title}">

                            <div class="card-body">

                                <h4 class="card-title">
                                    ${product.title}
                                </h4>

                                <p class="card-text">
                                    ${product.description}
                                </p>

                                <p class="product-price">
                                    $${product.price}
                                </p>

                            </div>

                        </section>

                    </div>
                `;
            }

        }, 1000);

    } catch (error) {

        hideLoader();

        message.innerHTML = "Products load nahi ho sake. Please try again.";

        console.log(error);

    }
}

function hideLoader() {

    let loader = document.querySelector("#loader");

    loader.style.display = "none";
}

getData();
