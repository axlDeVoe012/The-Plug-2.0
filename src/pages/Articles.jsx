import '../styles/Articles.css';
import '../index.css';

const Articles = () => (
  <div className="articles-container" id='art-container'>
    <h1 className="articles-title">Articles</h1>
    <p className="articles-subtitle">
      Explore the latest tips, events, and promotions from our cannabis and sneaker care sections.
    </p>

    {/* Cannabis Section */}
    <section>
      <h2 className="section-title">Cannabis Shop Articles</h2>
      <div className="article-grid">
        <div className="article-card">
          <h3>Cannabis 101: A Beginner’s Guide</h3>
          <p>
            Discover the basics of cannabis strains, effects, and how to choose the right product for you.
          </p>
        </div>
        <div className="article-card">
          <h3>This Week’s Deal: 20% Off All Edibles</h3>
          <p>
            Enjoy delicious cannabis edibles at a discount—only available this week.
          </p>
        </div>
        <div className="article-card">
          <h3>Event Highlight: Bud & Chill Friday</h3>
          <p>
            Don’t miss our Friday community sessions with music, giveaways, and product sampling.
          </p>
        </div>
      </div>
    </section>

    {/* Sneaker Section */}
    <section>
      <h2 className="section-title sneaker-section-title">Sneaker Care Articles</h2>
      <div className="article-grid">
        <div className="article-card">
          <h3>How to Keep Your Sneakers Fresh</h3>
          <p>
            Tips on cleaning, storing, and protecting your sneakers to keep them looking new.
          </p>
        </div>
        <div className="article-card">
          <h3>Sneaker Cleaning: Step-by-Step</h3>
          <p>
            Learn how we professionally deep clean sneakers and bring them back to life.
          </p>
        </div>
        <div className="article-card">
          <h3>Best Products for Sneaker Care</h3>
          <p>
            Discover our recommended cleaning kits and protectors for at-home sneaker maintenance.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Articles;
