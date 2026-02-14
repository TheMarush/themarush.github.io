export interface SubjectLink {
  url: string;
  label: string;
}

export interface Subject {
  code: string;
  name: string;
  description: string;
  externalLink?: SubjectLink;
  projectLink?: SubjectLink;
}

export interface Semester {
  id: string;
  name: string;
  note: string;
  credits: number;
  subjects: Subject[];
}
