import React from 'react'

const products = [
    {
        name: "Watch Yellow",
        subtitle: "For Man & Woman",
        price: "$335",
        img: "assets/images/mydrone3.png",
        specs: {
            Brand: "Apple",
            Color: "Black",
            "Compatible with": "Android 4.0 iOS7 and above",
            "Item Dimensions": "9 x 3.01 x 0.79 in",
            "Item Weight": "0.7 lb",
            "Operating System": "iOS",
            "Battery Capacity": "670mAh",
        },
    },
    {
        name: "Watch Black",
        subtitle: "For Man & Woman",
        price: "$424",
        img: "assets/images/mydrone4.png",
        specs: {
            Brand: "Applee",
            Color: "White",
            "Compatible with": "Android 5.0, iOS8 and above",
            "Item Dimensions": "7 x 5.03 x 0.63 in",
            "Item Weight": "2.4 ounces",
            "Operating System": "iOS, Android",
            "Battery Capacity": "780mAh",
        },
    },
    {
        name: "Watch Grey",
        subtitle: "For Man & Woman",
        price: "$579",
        img: "assets/images/mydrone5.png",
        specs: {
            Brand: "Apple",
            Color: "Blue",
            "Compatible with": "Android 6.0, iOS9 and above",
            "Item Dimensions": "10 x 2.01 x 0.21 in",
            "Item Weight": "0.9 lb",
            "Operating System": "Android",
            "Battery Capacity": "890mAh",
        },
    },
];

// Extract all unique specification keys (rows)
const specKeys = Object.keys(products[0].specs);


const Compare = () => {
    return (
        <section id="feature" className="py-5 text-center bg-white">
            <div className="container">
                <div className="mb-5">
                    <h1 className="fw-bold">Compare Similar Products</h1>
                    <p className="text-muted">
                        Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs<br /> do ye admire. His secure called esteem praise.
                    </p>
                </div>

                <div className="table-responsive">
                    <table className="compare-table table table-bordered table-striped table-responsive-lg" data-aos="fade-up">
                        <thead>
                            <tr>
                                <th></th>
                                {products.map((p, i) => (
                                    <th key={i} className="text-center">
                                        <div className="product-image">
                                            <img src={p.img} alt={p.name} width="100" />
                                        </div>
                                        <h3 className="product-title">{p.name}</h3>
                                        <p className="product-subtitle">{p.subtitle}</p>
                                    </th>
                                ))}
                            </tr>
                            <tr>
                                <th>Price</th>
                                {products.map((p, i) => (
                                    <th key={i} className="price text-center">
                                        {p.price}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {specKeys.map((key, index) => (
                                <tr key={index}>
                                    <th>{key}</th>
                                    {products.map((p, i) => (
                                        <td key={i} className="text-center">
                                            {p.specs[key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>

                        <tfoot>
                            <tr>
                                <th></th>
                                {products.map((p, i) => (
                                    <td key={i} className="text-center">
                                        <a href="#" className="mybtn1">
                                            <span>Buy Now</span>
                                        </a>
                                    </td>
                                ))}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Compare;