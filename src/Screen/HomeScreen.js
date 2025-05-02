import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProductCard from '../Components/ProductCard';
import '../styles/HomeScreen.css';

import banner1 from '../images/banner_1.png';
import banner2 from '../images/banner_2.png';
import banner3 from '../images/banner_3.png';
import banner4 from '../images/banner_4.png';
import banner5 from '../images/banner_5.png';
import banner6 from '../images/banner_6.png';
import { Link } from 'react-router-dom';


const HomeScreen = () => {
  const trendingProducts = [
    { id: 1, name: 'Seven Chakra Chips Stone Tree (100-300 Beads)',discountprice:'₹450 – ₹800', price: '₹350 – ₹700',photo: '/images/sevenchakratree.png',description:'About the Seven Chakra Points - Chakras are well known, with the popularity of yoga, people are giving more interest to the seven chakras. The chakras refer to energy points, which stores and regulates energy. Each of the chakra points is responsible for various activites. The seven chakras namely, root chakra (muladhara), sacral chakra (swadhisthana), solar plexus chakra (manipura), heart chakra (anahata), throat chakra (vishuddha), third-eye chakra (ajna), crown chakra (sahasrara).Uses of Feng Shui Money Tree - Being a feng shui bonsai tree, the crystal tree of life can be used for multiple purposes. One of the main purposes is that the crystal tree can be used for seven chakra healing. Also known as the good luck money tree, the seven chakra tree can be used to manifest good luck, wealth, prosperity, and success. The divine tree can also be said as the tree of life, feng shui money tree, good luck tree, spiritual tree.Money tree brings good luck, prosperity, provides protection against Negative energies and In Vastu and Feng Shui, Gemstones Tree is used to enhance the energies in the surrounding and balance the external influences, Great decorative statue to put in office, Entrance Hall and living room, It is a wonderful gift for any special occasion & your loved ones.' },
    { id: 2, name: '7 CHAKRA ENERGY BRACELETS 8MM', discountprice:'₹999',price: '₹499' ,photo: '../images/sevenchakrabraclet.png',description:'The Chakra Energy Bracelet is a must-have for those looking to restore their natural energy and balance.The bracelet comes with 7 gemstone bracelets that are perfectly suitable to balance your chakras, ornaments.The bracelets are made up of different kind of healing powers like Amethyst, Sodalite, Lapis lazuli, Green Jade Aventurine, Tiger Eye, Carnelian and Red Jasper.Each bracelet is strung on a durable stretchy cord.The crystals in this product are 100% natural and have been handled with love by our team of expert crafters who cut them right from the earth.'},
    { id: 3, name: 'ROSE QUARTZ ENERGY BRACELET 8MM', discountprice:'₹399',price: '₹199' ,photo: '../images/rosebracelet.png',description:'The beauty and healing power of the Rose Quartz energy bracelet is unsurprising given its ancient history. The pale pink hue of a Rose Quartz, has long been a love token, often slipped in the hands of a chosen beloved as far back as 600 B.c. But beyond being a symbol of ardent adoration, the Rose Quartz is all about bringing gentle, positive vibes and plenty of self-love into the beat of your own heart. If you have been holding on to old hurts and feeling rooted to the spot, wearing a Rose Quartz Energy Bracelet can softly open your heart, bring back the warm glow of trust, and help you to step forward in tenderness.Rose Quartz Energy Bracelet is ideal for those who have been holding on to old hurts, feeling rooted to the spot and need some gentle loving vibes. Unsurprising, it is well-connected to the Heart Chakra, but its positive vibrations run from tip-to-toe, keeping you feeling calm and stable in your core no matter what chaos is around you. Along with gifting self-radiance, Rose Quartz also invites accelerated physical healing. Rumored to be the blood of Adonis and Aphrodite mingled, Rose Quartz is beauty, love, and deepest desire!.This energising rose quartz crystal bracelet will gently open your heart, bringing back the warm glow of trust and help you step forward in tenderness. Along with gifting self-radiance, this crystal also invites accelerated physical healing. Rumored to be the blood of Adonis and Aphrodite mingled, rose quartz is beauty, love, and deepest desire. Love and beauty, desire and deep longing: Rose Quartz is all of these things, as well as a stone of healing. If you\’ve been holding back from love or uncertainty, place a Rose Quartz Energy Bracelet on your wrist to open your heart, relieve anxiety and bring self-love back into the rhythm of your day.Rose Quartz is known as the stone of unconditional love and infinite peace. It is able to heal emotional wounds and mend broken hearts, allowing the wearer to open their heart and do loving deeds without worry.'},
    { id: 4, name: 'Money Magnet Bracelet – 8mm Gemstone Beads', discountprice:'₹799',price: '₹450' ,photo: '../images/moneymagnet.png',description:'The Money Magnet Bracelet is made up of a combination of five different stones that manifest abundance.Each stone has a unique purpose and is known to be a powerhouse of favourable properties.It is made of five stones, each adding a brilliant shade to the mix. Citrine is called the stone of wealth. Green Aventurine is known as the stone of luck, Haematite is Grounding and Protection stone.'},
    { id: 5, name: 'GREEN AVENTURINE ENERGY BRACELET 8MM',discountprice:'₹499', price: '₹250',photo: '/images/greenaevntures.png',description:'The Green Aventurine Energy Bracelet is made from genuine Green Aventurine gemstones, hand-weaved with a satin cord. This bracelet brings out your natural confidence, while helping enhance your leadership skills.Energize yourself with our gorgeous Green Aventurine Energy Bracelet. Known as the lucky chance stone, this little glimmer of light brings opportunity knocking at your door.The green of this stone is said to aid in opening the heart chakra, which can increase compassion and empathy. Green Aventurine also promotes creativity and harmony, and its believed that wearing one of our Green Aventurine Energy Bracelets will bring opportunity knocking at your door.Green Aventurine is known as a luck stone, bringing good fortune and prosperity to those who wear it! This 8mm green stone is also said to bring calm and ease angry attitudes, making it a perfect Blue Moonstone alternative.' },
    { id: 6, name: 'Dhvani Laxmi Yantra Pyramid', discountprice:'₹999',price: '₹599' ,photo: '../images/laxmipyrmind.png',description:'DHVANI Gomti Chakra Orgonite Pyramid is a powerful crystal healing tool designed to promote positive energy and balance in your living space. Crafted with precision, this pyramid harnesses the metaphysical properties of orgonite, a unique blend of resin, metal shavings, and gemstones. Infused with the energies of the Gomti Chakra, this orgonite pyramid is believed to enhance spiritual awareness, clarity, and emotional well-being. Ideal for Reiki practitioners, feng shui enthusiasts, and those seeking a harmonious environment, this pyramid can be placed in your home, office, or meditation space. With its sleek design and intricate details, the OrgoniteShop Gomti Chakra Orgonite Pyramid not only serves as a potent energy tool but also adds a touch of elegance to your surroundings. Embrace the power of crystal healing and invite positive vibrations into your life with this remarkable orgonite creation. Dimensions: Approximately (3 inch) in height.'},
    { id: 7, name: 'Amethyst Crystal Bracelet', discountprice:'₹699',price: '₹399' ,photo: '../images/ametcbraclet.png',description:'Experience the natural healing power of the Amethyst Crystal Bracelet, crafted with genuine 8mm amethyst beads known for their calming and spiritual properties. This elegant and unisex bracelet promotes emotional balance, reduces stress, and enhances intuition, making it ideal for daily wear, meditation, or spiritual practice. Comfortable with its stretchable design, its perfect for anyone seeking peace, clarity, and positive energy in their life or as a thoughtful gift for a loved one.'},
    { id: 8, name: 'Pyrite, Green Aventurine Bracelet', discountprice:'₹899',price: '₹350' ,photo: '../images/pyritebrcelet.png',description:'Elevate your energy and attract abundance with this powerful multi-crystal bracelet featuring Pyrite, Green Aventurine, Citrine, Golden Crystal, Tiger’s Eye, 7 Chakra beads, Clear Quartz, and Agate—all carefully combined to enhance prosperity, confidence, balance, and spiritual alignment. Each stone carries unique benefits: Pyrite for wealth, Aventurine for luck, Citrine for success, Tiger’s Eye for courage, Clear Quartz for clarity, and Agate for grounding, while the 7 Chakra stones harmonize your energy centers. Stylish, unisex, and stretchable, this bracelet is perfect for daily wear, meditation, or as a meaningful gift for anyone seeking positive energy, focus, and holistic well-being.'},
  ];

  const bestSellerProducts = [
    { id: 1, name: 'Seven Chakra Chips Stone Tree (100-300 Beads)',discountprice:'₹450 – ₹800', price: '₹350 – ₹700',photo: '/images/sevenchakratree.png',description:'About the Seven Chakra Points - Chakras are well known, with the popularity of yoga, people are giving more interest to the seven chakras. The chakras refer to energy points, which stores and regulates energy. Each of the chakra points is responsible for various activites. The seven chakras namely, root chakra (muladhara), sacral chakra (swadhisthana), solar plexus chakra (manipura), heart chakra (anahata), throat chakra (vishuddha), third-eye chakra (ajna), crown chakra (sahasrara).Uses of Feng Shui Money Tree - Being a feng shui bonsai tree, the crystal tree of life can be used for multiple purposes. One of the main purposes is that the crystal tree can be used for seven chakra healing. Also known as the good luck money tree, the seven chakra tree can be used to manifest good luck, wealth, prosperity, and success. The divine tree can also be said as the tree of life, feng shui money tree, good luck tree, spiritual tree.Money tree brings good luck, prosperity, provides protection against Negative energies and In Vastu and Feng Shui, Gemstones Tree is used to enhance the energies in the surrounding and balance the external influences, Great decorative statue to put in office, Entrance Hall and living room, It is a wonderful gift for any special occasion & your loved ones.' },
    { id: 2, name: '7 CHAKRA ENERGY BRACELETS 8MM', discountprice:'₹999',price: '₹499' ,photo: '../images/sevenchakrabraclet.png',description:'The Chakra Energy Bracelet is a must-have for those looking to restore their natural energy and balance.The bracelet comes with 7 gemstone bracelets that are perfectly suitable to balance your chakras, ornaments.The bracelets are made up of different kind of healing powers like Amethyst, Sodalite, Lapis lazuli, Green Jade Aventurine, Tiger Eye, Carnelian and Red Jasper.Each bracelet is strung on a durable stretchy cord.The crystals in this product are 100% natural and have been handled with love by our team of expert crafters who cut them right from the earth.'},
    { id: 3, name: 'ROSE QUARTZ ENERGY BRACELET 8MM', discountprice:'₹399',price: '₹199' ,photo: '../images/rosebracelet.png',description:'The beauty and healing power of the Rose Quartz energy bracelet is unsurprising given its ancient history. The pale pink hue of a Rose Quartz, has long been a love token, often slipped in the hands of a chosen beloved as far back as 600 B.c. But beyond being a symbol of ardent adoration, the Rose Quartz is all about bringing gentle, positive vibes and plenty of self-love into the beat of your own heart. If you have been holding on to old hurts and feeling rooted to the spot, wearing a Rose Quartz Energy Bracelet can softly open your heart, bring back the warm glow of trust, and help you to step forward in tenderness.Rose Quartz Energy Bracelet is ideal for those who have been holding on to old hurts, feeling rooted to the spot and need some gentle loving vibes. Unsurprising, it is well-connected to the Heart Chakra, but its positive vibrations run from tip-to-toe, keeping you feeling calm and stable in your core no matter what chaos is around you. Along with gifting self-radiance, Rose Quartz also invites accelerated physical healing. Rumored to be the blood of Adonis and Aphrodite mingled, Rose Quartz is beauty, love, and deepest desire!.This energising rose quartz crystal bracelet will gently open your heart, bringing back the warm glow of trust and help you step forward in tenderness. Along with gifting self-radiance, this crystal also invites accelerated physical healing. Rumored to be the blood of Adonis and Aphrodite mingled, rose quartz is beauty, love, and deepest desire. Love and beauty, desire and deep longing: Rose Quartz is all of these things, as well as a stone of healing. If you\’ve been holding back from love or uncertainty, place a Rose Quartz Energy Bracelet on your wrist to open your heart, relieve anxiety and bring self-love back into the rhythm of your day.Rose Quartz is known as the stone of unconditional love and infinite peace. It is able to heal emotional wounds and mend broken hearts, allowing the wearer to open their heart and do loving deeds without worry.'},
    { id: 4, name: 'Money Magnet Bracelet – 8mm Gemstone Beads', discountprice:'₹799',price: '₹450' ,photo: '../images/moneymagnet.png',description:'The Money Magnet Bracelet is made up of a combination of five different stones that manifest abundance.Each stone has a unique purpose and is known to be a powerhouse of favourable properties.It is made of five stones, each adding a brilliant shade to the mix. Citrine is called the stone of wealth. Green Aventurine is known as the stone of luck, Haematite is Grounding and Protection stone.'},
  ];
  return (
    <>
      {/* 🛍️ Big Banner Carousel */}
      <div id="bannerCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="custom-banner" alt="Banner 1"/>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={banner4} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={banner5} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={banner6} className="d-block w-100" alt="Banner 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* 🔥 Trending Products Section */}
      <section className="container mb-5">
        <h2 className="text-center mb-4">🔥 Trending Products</h2>
        <div className="row">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="container mb-5">
        <h2 className="text-center mb-4">🛒🏆 Best Sellers</h2>
        <div className="row">
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

 {/* Wholesaler Div */}
     <div 
        style={{
          flex: 1,
          width: '100%',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <img
        src={banner2} // Replace with your actual image URL
        alt="About Us"
        style={{ width: '100%',  height: 'auto', borderRadius: '10px' }}
      />


        <h2 style={{ fontSize: '18px', color: '#555', marginTop: '20px', lineHeight: '1.6' }}>Bulk Sales</h2>
        <h3 style={{ fontSize: '18px', color: '#555', marginTop: '20px', lineHeight: '1.6' }}>Wholesale Program</h3>
        <p style={{ fontSize: '18px', color: '#555', marginTop: '20px', lineHeight: '1.6' }}>Our wholesale program offers competitive wholesale pricing and bulk pricing on crystals of up to 50% OFF, super-simple online ordering, and fast delivery.</p>
        <Link
          to="/contact"
          className="btn custom-btn"
          style={{
            backgroundColor: '#A4663B',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            marginTop: '20px',
            display: 'inline-block',
            textAlign: 'center',
            textDecoration: 'none', // Remove underline
          }}
        >
          Shop Wholesale
        </Link>
      </div>

{/*Our Mission  */}
      <div
      style={{
        display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A4663B',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    height: 'auto',
    minHeight: '300px',
    maxHeight: '300px',
    marginTop: '60px'
      }}
      >
     <p style={{ fontSize: '26px', fontWeight: 'bold', margin: 0 }}>
    Our Mission: To Provide Top-Quality Stones and Crystals
  </p>
  <p style={{ fontSize: '18px', fontWeight: 'normal', marginTop: '10px' }}>
  We are committed to delivering premium-grade stones and crystals that embody beauty, <br />
  durability, and energy. Our passion lies in sourcing the finest materials to bring you products that inspire and endure.
</p>
    </div>

    </>
  );
};

export default HomeScreen;
