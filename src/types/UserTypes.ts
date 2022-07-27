export type CreateUserParams = {
  email: string;
  plainPassword: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  jmbg: string;
  lbo: string;
  userType: UserType;
};

export type UserType = 'user' | 'responsible' | 'dispatcher';

export type User = {
  id: number;
  email?: string;
  roles: Array<UserRoles>;
  authenticationToken?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: string;
  phoneNumber: string;
  jmbg: string;
  lbo: string;
};

export type UserRoles = 'ROLE_USER' | 'ROLE_RESPONSIBLE' | 'ROLE_DISPATCHER' | 'ROLE_SUPER_ADMIN';
