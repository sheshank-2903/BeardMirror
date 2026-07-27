import { useMemo, useState } from 'react';

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  status: 'Saved' | 'Ready to apply' | 'Applied';
  url: string;
};

const initialJobs: Job[] = [
  {
    id: 1,
    title: 'Frontend Automation Engineer',
    company: 'Example Labs',
    location: 'Remote',
    status: 'Saved',
    url: 'https://www.linkedin.com/jobs/search/',
  },
  {
    id: 2,
    title: 'React Developer',
    company: 'BrowserFirst Co.',
    location: 'United States',
    status: 'Ready to apply',
    url: 'https://www.linkedin.com/jobs/search/',
  },
];

const coverLetterTemplate = `Hi {{company}} team,

I am excited to apply for the {{title}} role. My background in browser-first automation, React, TypeScript, and user-focused workflow design maps well to the needs of this position. I would welcome the opportunity to discuss how I can help {{company}} ship reliable, accessible products.

Best regards,`;

const fillTemplate = (template: string, job: Job) =>
  template.split('{{company}}').join(job.company).split('{{title}}').join(job.title);

export const App = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [selectedJobId, setSelectedJobId] = useState(initialJobs[0].id);
  const [profile, setProfile] = useState('React, TypeScript, browser automation, accessibility, workflow optimization');

  const selectedJob = useMemo(() => jobs.find((job) => job.id === selectedJobId) ?? jobs[0], [jobs, selectedJobId]);
  const draftedMessage = useMemo(() => fillTemplate(coverLetterTemplate, selectedJob), [selectedJob]);

  const updateStatus = (status: Job['status']) => {
    setJobs((currentJobs) => currentJobs.map((job) => (job.id === selectedJob.id ? { ...job, status } : job)));
  };

  const addManualJob = () => {
    const nextId = Math.max(...jobs.map((job) => job.id)) + 1;
    const newJob: Job = {
      id: nextId,
      title: 'New LinkedIn Role',
      company: 'Company name',
      location: 'Location',
      status: 'Saved',
      url: 'https://www.linkedin.com/jobs/search/',
    };
    setJobs((currentJobs) => [...currentJobs, newJob]);
    setSelectedJobId(nextId);
  };

  const updateSelectedJob = (field: keyof Job, value: string) => {
    setJobs((currentJobs) =>
      currentJobs.map((job) => (job.id === selectedJob.id ? { ...job, [field]: value } : job)),
    );
  };

  return (
    <main className="agent-shell">
      <section className="hero-card">
        <p className="eyebrow">Browser-only job workflow</p>
        <h1>LinkedIn Job Search Automation Agent</h1>
        <p>
          Plan searches, draft application text, track statuses, and open LinkedIn job pages in a new tab while you stay in
          control of every submission.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="https://www.linkedin.com/jobs/search/" target="_blank" rel="noreferrer">
            Open LinkedIn Jobs
          </a>
          <button type="button" onClick={addManualJob}>Add job</button>
        </div>
      </section>

      <section className="grid-layout">
        <aside className="panel">
          <div className="panel-heading">
            <h2>Pipeline</h2>
            <span>{jobs.length} roles</span>
          </div>
          <div className="job-list">
            {jobs.map((job) => (
              <button
                className={`job-card ${job.id === selectedJob.id ? 'active' : ''}`}
                key={job.id}
                onClick={() => setSelectedJobId(job.id)}
                type="button"
              >
                <strong>{job.title}</strong>
                <span>{job.company} · {job.location}</span>
                <small>{job.status}</small>
              </button>
            ))}
          </div>
        </aside>

        <section className="panel detail-panel">
          <div className="panel-heading">
            <h2>Application workspace</h2>
            <a href={selectedJob.url} target="_blank" rel="noreferrer">Open posting</a>
          </div>

          <div className="form-grid">
            <label>
              Role title
              <input value={selectedJob.title} onChange={(event) => updateSelectedJob('title', event.target.value)} />
            </label>
            <label>
              Company
              <input value={selectedJob.company} onChange={(event) => updateSelectedJob('company', event.target.value)} />
            </label>
            <label>
              Location
              <input value={selectedJob.location} onChange={(event) => updateSelectedJob('location', event.target.value)} />
            </label>
            <label>
              LinkedIn URL
              <input value={selectedJob.url} onChange={(event) => updateSelectedJob('url', event.target.value)} />
            </label>
          </div>

          <label className="profile-box">
            Your strengths / keywords
            <textarea value={profile} onChange={(event) => setProfile(event.target.value)} />
          </label>

          <div className="draft-card">
            <h3>Drafted message</h3>
            <textarea readOnly value={`${draftedMessage}\n\nRelevant strengths: ${profile}`} />
            <button type="button" onClick={() => navigator.clipboard.writeText(`${draftedMessage}\n\nRelevant strengths: ${profile}`)}>
              Copy draft
            </button>
          </div>

          <div className="status-actions" aria-label="Application status actions">
            <button type="button" onClick={() => updateStatus('Saved')}>Saved</button>
            <button type="button" onClick={() => updateStatus('Ready to apply')}>Ready to apply</button>
            <button type="button" onClick={() => updateStatus('Applied')}>Applied</button>
          </div>
        </section>
      </section>
    </main>
  );
};
