import React, { useState } from 'react';
import '../styles/Education.css';

const educationTopics = [
  {
    title: 'What is Cannabis?',
    content:
      "Cannabis is a naturally growing plant that contains powerful compounds called cannabinoids. These compounds interact with your body to produce a range of effects from relaxation and pain relief to creative boosts and deep sleep.",
  },
  {
    title: 'THC vs. CBD',
    content:
      "THC: (Tetrahydrocannabinol) is the compound responsible for the psychoactive effects of cannabis what most people call the high. CBD is non-psychoactive and promotes calmness and relief from inflammation, anxiety, and pain. Effects of THC: Euphoria or a feel-good buzz Enhanced. senses and creativity. CBD(Cannabidiol) is non-psychoactive, meaning it won’t get you high. It’s popular for promoting relaxation, focus, and relief without the buzz. Effects of CBD: Calming and soothing, Reduces anxiety and tension.",
  },
  {
    title: 'Ways to Use Cannabis',
    content:
      'You can smoke, vape, eat, or apply cannabis. Edibles take longer to kick in, while vaping and smoking work quickly. Each method affects the body differently.',
  },
  {
    title: 'Responsible Use',
    content:
      "Start low, go slow. Especially with edibles and new strains, it's important to begin with a small dose and wait before consuming more. Always follow local laws and avoid driving or operating machinery while under the influence.",
  },
  {
    title: 'Is Cannabis Legal?',
    content:
      'In South Africa, adults may use cannabis privately. However, commercial sale is restricted unless licensed. Always stay up to date with changing laws.',
  },
  {
    title: 'Benefits of Cannabis',
    content:
      "Cannabis may relieve pain, anxiety, stress, nausea, and insomnia. It's also being studied for epilepsy, PTSD, and chronic illness management.",
  },
  {
    title: 'Risks and Side Effects',
    content:
      'Cannabis can cause dry mouth, dizziness, impaired memory, anxiety, or paranoia—especially in high doses. Long-term overuse can affect motivation or focus.',
  },
  {
    title: 'Different Cannabis Strains',
    content:
      'Indica strains are relaxing and sedative—great for nighttime. Sativa strains are energizing and social. Hybrids combine traits of both.',
  },
  {
    title: 'Terpenes and Their Effects',
    content:
      'Terpenes give cannabis its flavor and scent. Limonene is citrusy and mood-boosting. Myrcene is calming. Pinene helps with alertness.',
  },
  {
    title: 'Medical Use of Cannabis',
    content:
      'Doctors may prescribe cannabis for pain, seizures, sleep disorders, and more. CBD-rich products are common for medical relief without the high.',
  },
  {
    title: 'The Endocannabinoid System',
    content:
      'This system in your body helps regulate sleep, appetite, mood, and memory. Cannabinoids like THC and CBD interact with it to create various effects.',
  },
];

const strains = [
  {
    name: '🌿 Pitbull',
    description:
      'Pitbull is a potent indica-dominant hybrid created by crossing P-91 with Sugar Plum. Known for its fast-acting sedative effects, it delivers strong body relaxation, making it ideal for nighttime use. Its aroma is fruity, piney, and slightly skunky, and it’s popular for relieving insomnia, chronic pain, and stress.',
  },
  {
    name: '🌿 Heli Jelly',
    description:
      'Heli Jelly is a sativa-dominant strain bred from Hella Jelly and other unknown genetics. It’s celebrated for its energetic, euphoric high and vibrant sweet berry flavors. Users enjoy it for boosting creativity and mood, often used in social or active settings.',
  },
  {
    name: '🌿 Dutch Magic',
    description:
      'Dutch Magic is a well-balanced hybrid that blends uplifting cerebral effects with mild body relaxation. Its lineage is often linked to Dutch genetics, offering a sweet, earthy aroma with hints of citrus. Ideal for daytime use, it may help with mood enhancement and mild pain relief.',
  },
  {
    name: '🌿 Money Grape',
    description:
      'Money Grape is an indica-dominant strain known for its sweet, grape-like flavor and relaxing body effects. It typically offers a calm, euphoric experience that helps reduce stress and aid sleep. Its fruity, earthy profile makes it a flavorful choice for evening unwinding.',
  },
  {
    name: '🌿 Pop Tarts',
    description:
      'Pop Tarts is a hybrid strain made by crossing Lemon Cake and Triangle Kush. It features a sweet, pastry-like flavor with hints of citrus and diesel. This strain produces a balanced high—initially euphoric and uplifting, followed by mellow relaxation—making it great for creative sessions or chilling out.',
  },
  {
    name: '🌿 Purple Grape',
    description:
      'Purple Grape is an indica-heavy strain known for its deep grape aroma, dark purple hues, and powerful calming effects. It often promotes a sense of full-body relaxation and is commonly used to manage pain, anxiety, and insomnia. The flavor is sweet and fruity with a smooth finish.',
  },
  {
    name: '🌿 Loud Cake',
    description:
      'Loud Cake is a hybrid strain that combines the creamy, dessert-like notes of Wedding Cake with the gassy intensity of Loud OG. Expect a rich, sweet aroma with a pungent diesel undertone. It delivers a balanced high that eases stress while keeping the mind alert and upbeat.',
  },
  {
    name: '🌿 Dead Jack',
    description:
      'Dead Jack is a hybrid created by crossing Deadhead OG and Jack Herer. It inherits the cerebral buzz and spicy herbal notes of Jack Herer along with the heavy relaxation and earthiness of Deadhead OG. Users report mental clarity paired with body ease, making it great for afternoon or evening use.',
  },
  {
    name: '🌿 Rancouche',
    description:
      'Rancouche is a rare and exotic strain known for its intense gassy, skunky aroma and heavy-hitting effects. Likely indica-dominant, it delivers deep relaxation, couchlock, and a mellow mood shift. It’s ideal for experienced users looking to manage pain, stress, or sleep issues.',
  },
  {
    name: '🌿 Lava Cake',
    description:
      'Lava Cake is a delicious indica-dominant hybrid made from GSC (Thin Mint) and Grape Pie. Known for its dessert-like chocolate and minty flavor, it offers deeply relaxing effects that calm the body and uplift the mind. It’s often used for stress relief, anxiety, and insomnia.',
  },
  {
    name: '🌿 Mimosa',
    description:
      'Mimosa is a sativa-leaning hybrid bred from Clementine and Purple Punch. It boasts a tropical citrus flavor and delivers an energetic, euphoric high that promotes focus and sociability. Perfect for daytime use, Mimosa is often used to combat fatigue, depression, and low mood.',
  },
  {
    name: '🌿 OG Kush',
    description:
      'OG Kush is a legendary hybrid with mysterious West Coast origins, often attributed to Chemdawg, Hindu Kush, and Lemon Thai. It features a pungent aroma of earth, pine, and citrus. Its balanced high combines mental euphoria with physical relaxation—ideal for stress, anxiety, and chronic pain.',
  },
  {
    name: '🌿 Purple Haze',
    description:
      'Purple Haze is a classic sativa strain made famous by Jimi Hendrix’s song. A cross of Purple Thai and Haze, it offers a psychedelic, uplifting high with sweet berry and spice flavors. It’s loved for creative inspiration, social energy, and nostalgic vibes.',
  },
  {
    name: '🌿 Cheese',
    description:
      'Cheese is a pungent hybrid strain originating from the UK. It’s a Skunk #1 phenotype known for its sharp, savory aroma and mellow, happy high. With balanced effects, it helps relieve stress, pain, and depression while keeping the user functional and upbeat.',
  },
];

const Education = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="education-container">
      <header className="header">
        <h1 className="title">Cannabis Education</h1>
        <p className="subtitle">
          Learn about cannabis, its uses, effects, and how to consume responsibly. Whether you're new or experienced, this page helps you make informed, mindful choices.
        </p>
      </header>

      <section aria-label="Educational Topics">
        {educationTopics.map((topic, index) => (
          <div key={index}>
            <button
              type="button"
              className="collapsible-trigger"
              aria-expanded={openIndex === index}
              onClick={() => toggleSection(index)}
            >
              {topic.title}
            </button>
            <div
              className={`collapsible-content ${openIndex === index ? 'active' : ''}`}
            >
              <p>{topic.content}</p>
            </div>
          </div>
        ))}
      </section>

      <section aria-label="Cannabis Strains" style={{ marginTop: '2rem' }}>
        <h2 className="section-heading">Our Strains</h2>
        {strains.map((strain, index) => (
          <div key={index}>
            <button
              type="button"
              className="collapsible-trigger"
              aria-expanded={openIndex === `strain-${index}`}
              onClick={() => toggleSection(`strain-${index}`)}
            >
              {strain.name}
            </button>
            <div
              className={`collapsible-content ${openIndex === `strain-${index}` ? 'active' : ''}`}
            >
              <p>{strain.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Education;
