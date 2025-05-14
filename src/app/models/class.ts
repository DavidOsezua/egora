export class User {
  id?: number;
  fullName: string;
  email: string;
  username: string;
  password: string;
  mobilePhone: string;
  status: string;
  branch: string;
  superUser: boolean;
  address: string;
  roles: string;
  profilePicture?: string;

  constructor() {
    this.fullName = '';
    this.email = '';
    this.username = '';
    this.password = '';
    this.mobilePhone = '';
    this.status = '';
    this.branch = '';
    this.superUser = false;
    this.address = '';
    this.roles = '';
    this.profilePicture = '';
  }
}
