import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper core styles
import 'swiper/css';

// Swiper modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/servicecarousel.css'; // your custom CSS




const services = [
    {
        title: "Confirm the Pregnancy",
        price: "$60/ each additional baby $20",
        timing: "6-14 weeks, 15 minutes",
        offer: "Confirm pregnancy, view baby heartbeat, discover baby size, and provide due date estimate.",
        extra: "Optional Blood Test: Add for $129 (2-3 days) or $149 (next day)",
    },
    {
        title: "BIG DEAL GENDER REVEAL",
        price: "$110 / each additional fetus $20",
        timing: "15-39 weeks, 10-minute scan",
        offer: "Find out your baby's gender",
        list: [
            "Heartbeat stuffed animal"
        ],
    },
    {
        title: "Let's Take a Peek",
        price: "$160.00",
        timing: "14 weeks and beyond, 30 minutes",
        list: [
            "Confirm baby's gender", 
            "Listen to the heartbeat and allow recording", 
            "Includes printouts"
        ],
        extra: "Additional Baby: $30 each",
    },
    {
        title: "Wrap It Up in a Package!",
        price: "$399.00",
        list: [
            "1st trimester scan (6-13 weeks)", 
            "18-32 week scan (Gender if available)", 
            "Late trimester scan (32-38 weeks)",
            "Momma swag bag"
        ],
        extraList: [
            "Recording of the heartbeat",
            "Unlimited printouts"
        ],
        extra: "Additional Baby: $25 each",
    },
    {
        title: "Last Look!",
        price: "Pricing upon request",
        timing: "38 weeks and beyond (no rescans offered)",
        offer: "A final look at your baby's position, heartbeat, and an attempt at 3D/4D images.",
    }
];

const ServiceCarousel = () => {
    return (
        <section className="service-carousel">
            <h2 className="carousel-heading">Our Ultrasound Services</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={true}
                modules={[ Navigation]}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="carousel-card">
                            <h3>{service.title}</h3>
                            <p className="price">{service.price}</p>
                            {service.timing && <p><strong>Timing:</strong> {service.timing}</p>}
                            {service.offer && <p><strong>What We Offer:</strong> {service.offer}</p>}
                            {service.list && (
                                <ul>
                                    {service.list.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            )}
                            {service.extraList && (
                                <>
                                    <p><strong>What We Offer:</strong></p>
                                    <ul>
                                        {service.extraList.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                </>
                            )}
                            {service.extra && <p>{service.extra}</p>}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
export default ServiceCarousel;
