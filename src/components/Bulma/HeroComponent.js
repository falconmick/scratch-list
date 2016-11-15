import React, {PropTypes} from 'react';
import { Link } from 'react-router';

const HeroComponent = ({colorModifier, title, subtitle}) => {
    const sectionClass = `hero ${colorModifier || "is-primary"}`;

    return (
      <section className={sectionClass}>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              <Link to="/">
                {title}
              </Link>
            </h1>
            <h2 className="subtitle">
              {subtitle}
            </h2>
          </div>
        </div>
      </section>
    );
};

HeroComponent.propTypes = {
    colorModifier: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default HeroComponent;
