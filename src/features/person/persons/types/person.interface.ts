export interface Person {
  id?: number;
  registration: string;
  name: string;
  photo_url: string | null;
  status: string;
  admission_date: string;
  job?: Job;
  allocation?: PersonAllocation;
  incident?: Incident[];
}

export interface Incident {
  id: number;
  date: string;
  type: string;
  details: string;
}

export interface PersonAllocation {
  id: number;
  department_id: number;
  sector_id: number;
  start_time_in_alocation: string;
  end_time_in_alocation: string;
  status: string;
  department: Department;
  sector: Sector;
}

export interface Department {
  id: number;
  name: string;
  status: string;
  description: string;
}

export interface Sector {
  id: number;
  name: string;
  status: string;
  description: string;
}

export interface PersonJob {
  id: number;
  job_id: number;
  start_time_in_position: string;
  end_time_in_position: string | null;
}

export interface Job {
  id: number;
  job_id: number;
  name: string;
  description: string | null;
}
