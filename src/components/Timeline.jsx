import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkIcon = () => <></>;

export default function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Mar 2023 - Aug 2023"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          MERN Fullstack - Internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Yogyakarta, ID</h4>
        <p>
          Developed a full-stack E-commerce application and achieved an 80%
          feature completion rate for 6 weeks using MERN Stack (MongoDB,
          Express.js, React, Node.js) and RESTful API
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: 'rgb(97 255 184)',
          color: 'var(--text-color',
        }}
        contentArrowStyle={{borderRight: '7px solid  rgb(97 255 184)'}}
        date="Jan 2022 - Present"
        iconStyle={{background: 'rgb(97 255 184)', color: 'var(--text-color'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Quality Assurance & Devsecops - Fulltime
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Testing whether the modules created are under the needs of partners to
          increase data accuracy by 90% which is contained in the test
          attachment and also the log results as evidence that testing has been
          carried out on the module using the application that has been made by
          collaborating with the developer, partner and then operation division.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Aug 2021 - Dec 2021"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer Bangsisfo Jaskug - Fulltime
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Develop a system for internal purposes for 5 months using PHP
          CodeIgniter technology, SQL Server, JavaScript, REST API and web
          socket.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Aug 2021 - Dec 2021"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Backend Developer - Freelance
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jakarta, ID</h4>
        <p>
          Build an edatabasecv to manage employee data, tender archives and also
          CV using the PHP Codeigniter programming language, CSS, MySQL and
          Microsoft Office.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Mar 2021 - Aug 2021"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer Bangsisfo Kurlog - Fulltime
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Build an internal website in accordance with the needs of vendors to
          reconcile partner or internal data using php codeigniter, SQL server,
          javascript, CSS and bootstrap by collaborating with business teams and
          fellow developers in the design process.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Mar 2020 - Nov 2020"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Frontend Developer & SEO Specialist - Fulltime
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jakarta, ID</h4>
        <p>
          Develop and improve the website to appear in organic search results
          and get attention from users using Ahrefs as a tool to conduct keyword
          research then create an SEO-friendly article structure using short
          paragraphs including titles, articles must be original based on the
          results of keyword research that has been done by including internal
          and external links in the article.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Nov 2019 - Feb 2020"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer - Fulltime
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Jakarta, ID</h4>
        <p>
          Develop an existing Point Of Sales website for 4 months using Laravel,
          CSS, Javascript and MySQL.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Sep 2018 - Oct 2019"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Web Developer - Fulltime
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Develop and design the system for 11 months consisting of landing
          pages, timeline management and mini ERP using PHP programming language
          with Codeigniter, Javascript, CSS, MySQL, Firebase and Node
          frameworks.js
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{background: 'var(--bg-color)', color: '#424649'}}
        contentArrowStyle={{borderRight: '7px solid  var(--bg-color)'}}
        date="Mar 2016 - May 2016"
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          UI/UX Designer - Internship
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bandung, ID</h4>
        <p>
          Creating a UI/UX design for an android application to solve a user
          problem according to the results of user persona research so that
          users get a better experience in using the application using figma in
          the design process and collaborating with researchers and developers.
        </p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
        icon={<WorkIcon />}>
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement> */}
      <VerticalTimelineElement
        iconStyle={{background: 'var(--bg-color)', color: '#424649'}}
        icon={<WorkIcon />}
      />
    </VerticalTimeline>
  );
}
