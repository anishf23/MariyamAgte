import React from 'react';
import banner6 from '../images/banner_2.png';
const AboutPage = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Image */}
      <img
        src={banner6} // Replace with your actual image URL
        alt="About Us"
        style={{ width: '100%',  height: 'auto', borderRadius: '10px' }}
      />

      {/* Big Text Below Image */}
      <h1 style={{ fontSize: '36px', marginTop: '30px', color: '#333' }}>
        Welcome to Mariyam Agate
      </h1>

      <p style={{ fontSize: '18px', color: '#555', marginTop: '20px', lineHeight: '1.6' }}>
        We are passionate about delivering top-quality products and services to our customers. Our mission is to
        create lasting relationships and exceed expectations through innovation and dedication.
      </p>
      <p style={{ fontSize: '18px', color: '#555', marginTop: '20px', lineHeight: '1.6' }}>
      <b>Stone and Crystal Manufacturing: Crafting Excellence Since the 16th Century</b>
      <br />For centuries, the art of stone and crystal crafting has been passed down through generations, evolving to meet the changing needs of the world. Our journey begins in the 16th century, a time when skilled artisans first harnessed the beauty and energy of stones and crystals to create timeless treasures.

      <br /><br /><b>A Legacy of Craftsmanship</b>
      <br />The production of stones and crystals isn't merely a modern industry—it is a craft deeply rooted in history. Since the 1500s, artisans across the world have honed their skills, perfecting the delicate process of shaping, polishing, and transforming raw minerals into exquisite products. These early craftsmen knew the secrets of the earth, carefully selecting stones that held unique properties and spiritual significance.

<br /><b>From the Earth to Your Hands</b>
<br /><br />Each piece of stone or crystal that we craft tells a story. Our artisans continue to employ traditional techniques alongside modern technology to ensure that every product is both a work of art and a testament to centuries of expertise. The process begins with the careful extraction of high-quality stones from natural sources. Once the stone is sourced, it is then expertly shaped and polished, preserving its natural beauty while adding a touch of elegance and refinement.

<br /><br /><b>The Spiritual Significance of Stones and Crystals</b>
<br />Stones and crystals have been revered throughout history not just for their beauty, but also for their metaphysical properties. Ancient cultures believed that these natural elements possessed healing energy, capable of bringing balance, clarity, and protection. Our products continue this legacy by offering stones and crystals that not only enhance the aesthetic of any space but also carry the energy and wisdom of the ages.

<br /><br /><b>Continuing the Tradition in the Modern World</b>
<br />While the methods may have evolved, our commitment to excellence has remained unchanged. Today, we offer a vast range of meticulously crafted stone and crystal products, from decorative items to jewelry and healing stones. Each piece is infused with the same passion, care, and expertise that has defined our work since the 16th century.

<br />Our mission is to keep this rich tradition alive, delivering top-quality stone and crystal products to our customers while honoring the craftsmanship of the past. Whether you're seeking a piece of history for your home, a gift for a loved one, or a meaningful token of positive energy, our stones and crystals are sure to leave a lasting impression.

<br /><br /><b>A Timeless Craft for the Modern World</b>
<br />From the 16th century to today, the timeless allure of stone and crystal products continues to captivate hearts around the world. We invite you to join us on this journey, exploring the unique beauty and power of these natural treasures. Let the legacy of centuries of craftsmanship inspire you and bring the magic of the earth into your life.
      </p>
    </div>
  );
};

export default AboutPage;
