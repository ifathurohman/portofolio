import PageHeader from '../../components/PageHeader';
import React from 'react';
import './resume.css';

const Resume = ({brand}) => {
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>
      <a
        href="https://drive.google.com/file/d/1t-bVQIskRWZnv87K0QVE-vxNCvsCjyu0/view"
        target="_blank"
        rel="noreferrer">
        Preview
      </a>
    </section>
  );
};

export default Resume;
