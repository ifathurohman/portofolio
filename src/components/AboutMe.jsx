import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {NavLink} from 'react-router-dom';
import Button from './Button';
import aboutMeImg from '../images/about-me.png';
import TagCloud from './TechStack';
import Timeline from './Timeline';

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({name}) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: {opacity: 0},
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: {y: 20, opacity: 0},
    animate: {y: 0, opacity: 1},
  };

  return (
    <div>
      <section className="about">
        <div className="aboutContainer container">
          <div className="row">
            <motion.div
              className="personalImage col-12 col-lg-6"
              ref={ref}
              initial={{x: '-10vw', opacity: 0, scale: 0.5}}
              animate={
                inView
                  ? {x: 0, opacity: 1, scale: 1}
                  : {x: '-10vw', opacity: 0, scale: 0.5}
              }
              transition={{duration: 0.4, ease: 'easeInOut'}}
              whileHover={{scale: 1.05}}>
              {/* Display the personal image */}
              <motion.img src={aboutMeImg} alt={name} />
            </motion.div>
            <div className="personalInfo col-12 col-lg-6">
              <motion.div
                className="contentContainer"
                variants={staggerVariants}>
                {/* Display greeting and job title with animation */}
                <motion.h4 variants={paragraphVariants}>
                  Nice to meet you! 👋🏻
                </motion.h4>
                <motion.h5 variants={paragraphVariants}>
                  I'm a Quality Assurance at POS Indonesia.
                </motion.h5>

                {/* Display content description with animation */}
                <motion.div
                  className="contentDescription"
                  variants={staggerVariants}
                  initial="initial"
                  animate={inView ? 'animate' : 'initial'}>
                  {/* Paragraphs with animation */}
                  <motion.p variants={paragraphVariants}>
                    I have been working in the IT/consulting, startup, and
                    state-owned enterprises (BUMN) sectors for over five years.
                    I have experience in various fields such as{' '}
                    <span style={{color: 'var(--hl-color)'}}>
                      {' '}
                      UI/Design, Web Developer, Frontend Developer, SEO
                      Specialist, Backend Developer, and Quality Assurance{' '}
                    </span>
                  </motion.p>
                  <br />
                  <motion.p variants={paragraphVariants}>
                    I used to work as a{' '}
                    <span style={{color: 'var(--hl-color)'}}>
                      {' '}
                      website developer{' '}
                    </span>
                    about four years ago, and my last position was as a Quality
                    Assurance professional at one of the state-owned companies
                    for the past two years.
                  </motion.p>
                  <br />
                  <motion.p variants={paragraphVariants}>
                    In addition to my work, I am also actively involved in
                    self-development, such as participating in bootcamps and
                    online mini courses. Currently, I am actively exploring
                    modern programming, specifically the{' '}
                    <span style={{color: 'var(--hl-color)'}}>
                      {' '}
                      MERN Fullstack (MongoDB, Express.js, React.js, and
                      Node.js) stack.{' '}
                    </span>{' '}
                    Recently, I completed a bootcamp at one of the institutions.
                    With my knowledge and experience, I am currently seeking
                    opportunities as a{' '}
                    <span style={{color: 'var(--hl-color)'}}>
                      {' '}
                      MERN Fullstack Developer, Fullstack Developer, Backend
                      Developer, and Frontend Developer.{' '}
                    </span>
                  </motion.p>
                </motion.div>

                {/* Button to view the portfolio */}
                <NavLink to="/portfolio">
                  <Button name="View Portfolio" />
                </NavLink>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="aboutContainer container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <motion.div
                className="contentContainer"
                variants={staggerVariants}>
                {/* Display greeting and job title with animation */}
                <motion.h4 variants={paragraphVariants}>
                  My TechStack 💡
                </motion.h4>
                <motion.h5 variants={paragraphVariants}>MERN Stack</motion.h5>

                {/* Display content description with animation */}
                <motion.div
                  className="contentDescription"
                  variants={staggerVariants}
                  initial="initial"
                  animate={inView ? 'animate' : 'initial'}>
                  {/* Paragraphs with animation */}
                  <motion.p variants={paragraphVariants}>
                    As an{' '}
                    <span style={{color: 'var(--hl-color)'}}>
                      application developer
                    </span>
                    , the combination of these technologies allows you to build
                    dynamic, secure, and easily manageable web applications with
                    a variety of diverse features and functions
                  </motion.p>
                  <br />
                  <motion.p variants={paragraphVariants}>
                    By using the following combination of{' '}
                    <span style={{color: 'var(--hl-color)'}}>technologies </span>
                    to develop efficient and responsive{' '}
                    <span style={{color: 'var(--hl-color)'}}>
                      JavaScript-based web applications
                    </span>
                    , each component in this combination has a specific role in
                    the application development process. These components allow
                    developers to build complex web applications. This
                    technology stack leverages JavaScript as the programming
                    language throughout the stack, making integration and
                    collaboration among the development team easier.
                  </motion.p>
                </motion.div>

                {/* Button to view the portfolio */}
                <NavLink to="/portfolio">
                  <Button name="View Portfolio" />
                </NavLink>
              </motion.div>
            </div>
            <div className="col-12 col-lg-6">
              <TagCloud />
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="aboutContainer container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <motion.div
                className="contentContainer"
                variants={staggerVariants}>
                {/* Display greeting and job title with animation */}
                <motion.h4 variants={paragraphVariants}>
                  My Experience 💼
                </motion.h4>
                <motion.h5 variants={paragraphVariants}>
                  Here is my career journey at several companies with various
                  positions :
                </motion.h5>
              </motion.div>
              <Timeline />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
