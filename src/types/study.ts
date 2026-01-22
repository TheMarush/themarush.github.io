export interface Subject {
  code: string;
  name: string;
  description: string;
}

export interface Semester {
  id: string;
  name: string;
  note: string;
  subjects: Subject[];
}
