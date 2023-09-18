import PageHeader from "../../components/PageHeader";
import React from 'react';

import GoogleDocsViewer from 'react-google-docs-viewer';

const Resume = () => {
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <GoogleDocsViewer
        width="600px"
        height="780px"
        fileUrl="https://docs.google.com/document/d/e/2PACX-1vSasQDbzNl6zCgP3zTXrmQ5CIo3IRoGMSpKB6Sk7SBQ8FvjkQnLOn1_foYGgG4He8IkEjhjA3chMYtS/pub"
      />
    </section>
  );
};

export default Resume;
