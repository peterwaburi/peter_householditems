import PageHeader from "./common/PageHeader";
import ProductCategory from "./ProductCategory";
import "../styles/shop.css";

function Shop() {

    const products = [

        {
            image:"https://picsum.photos/600/400?random=101",
            name:"Premium Car Shampoo",
            price:"KES 950",
            category:"Cleaning Chemicals",
            description:"High foam pH neutral shampoo."
        },

        {
            image:"https://picsum.photos/600/400?random=102",
            name:"Dashboard Polish",
            price:"KES 700",
            category:"Vehicle Care",
            description:"Restores dashboard shine."
        },

        {
            image:"https://picsum.photos/600/400?random=103",
            name:"Air Freshener",
            price:"KES 450",
            category:"Accessories",
            description:"Long lasting fragrance."
        },

        {
            image:"https://picsum.photos/600/400?random=104",
            name:"Brake Fluid",
            price:"KES 1200",
            category:"Fluids",
            description:"Premium DOT4 brake fluid."
        },

        {
            image:"https://picsum.photos/600/400?random=105",
            name:"Tyre Shine",
            price:"KES 800",
            category:"Tyre & Wheel",
            description:"Deep black tyre finish."
        },

        {
            image:"https://picsum.photos/600/400?random=106",
            name:"Jump Starter",
            price:"KES 8500",
            category:"Emergency",
            description:"Portable jump starter."
        },

        {
            image:"https://picsum.photos/600/400?random=107",
            name:"Pressure Gun",
            price:"KES 3500",
            category:"Car Care Tools",
            description:"Professional pressure washer gun."
        },

        {
            image:"https://picsum.photos/600/400?random=108",
            name:"LED Headlights",
            price:"KES 4500",
            category:"Electrical",
            description:"High brightness LED bulbs."
        }

    ];

    return (

        <>

            <PageHeader
                title="BlueWave Shop"
                subtitle="Premium products for vehicle care."
            />

            <ProductCategory
                title="Featured Products"
                products={products}
            />

        </>

    );

}

export default Shop;