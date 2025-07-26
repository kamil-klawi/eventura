export interface ProfileProps {
  params: {
    id: string;
  };
}

export interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  roles: string[];
}

export interface TicketProps {
  id?: string;
  title: string;
  description: string;
  location: string;
  date: string;
}
