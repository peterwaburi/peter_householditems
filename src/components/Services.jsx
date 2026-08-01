import PageHeader from "./common/PageHeader";
import ServiceCategory from "./ServiceCategory";
import "../styles/services.css";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";

function Services() {

  const carServices = [
    {
      image: "https://picsum.photos/600/400?random=1",
      title: "Exterior Wash",
      price: "KES 500",
      duration: "30 min",
      description: "Complete exterior wash and rinse."
    },
    {
      image: "https://picsum.photos/600/400?random=2",
      title: "Interior Cleaning",
      price: "KES 1,000",
      duration: "1 Hour",
      description: "Vacuuming, dashboard and interior detailing."
    },
    {
      image: "https://picsum.photos/600/400?random=3",
      title: "Full Detailing",
      price: "KES 3,500",
      duration: "4 Hours",
      description: "Premium detailing inside and outside."
    },
    {
      image: "https://picsum.photos/600/400?random=4",
      title: "Polishing",
      price: "KES 2,000",
      duration: "2 Hours",
      description: "Restore paint shine."
    },
    {
      image: "https://picsum.photos/600/400?random=5",
      title: "Engine Cleaning",
      price: "KES 1,500",
      duration: "1 Hour",
      description: "Professional engine bay cleaning."
    },
    {
      image: "https://picsum.photos/600/400?random=6",
      title: "Ceramic Coating",
      price: "KES 15,000",
      duration: "1 Day",
      description: "Long-lasting paint protection."
    }
  ];

  const homeServices = [
    {
      image: "https://picsum.photos/600/400?random=7",
      title: "Carpet Cleaning",
      price: "KES 2,500",
      duration: "2 Hours",
      description: "Deep carpet cleaning."
    },
    {
      image: "https://picsum.photos/600/400?random=8",
      title: "Sofa Cleaning",
      price: "KES 3,000",
      duration: "2 Hours",
      description: "Fabric and leather sofa cleaning."
    },
    {
      image: "https://picsum.photos/600/400?random=9",
      title: "Mattress Cleaning",
      price: "KES 2,000",
      duration: "90 min",
      description: "Steam mattress cleaning."
    }
  ];

  const emergencyServices = [
    {
      image: "https://picsum.photos/600/400?random=10",
      title: "Battery Jump Start",
      price: "KES 1,000",
      duration: "20 min",
      description: "Emergency battery assistance."
    },
    {
      image: "https://picsum.photos/600/400?random=11",
      title: "Fuel Delivery",
      price: "KES 800",
      duration: "30 min",
      description: "Fuel delivered to your location."
    },
    {
      image: "https://picsum.photos/600/400?random=12",
      title: "Tyre Assistance",
      price: "KES 1,200",
      duration: "30 min",
      description: "Flat tyre replacement."
    }
  ];

  return (
    <>

      <PageHeader
        title="Our Services"
        subtitle="Professional Car Wash, Auto Detailing and Home Cleaning Services"
      />

      <ServiceCategory
        title="Car Services"
        services={carServices}
      />

      <ServiceCategory
        title="Home Services"
        services={homeServices}
      />

      <ServiceCategory
        title="Emergency Services"
        services={emergencyServices}
      />


      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Services;