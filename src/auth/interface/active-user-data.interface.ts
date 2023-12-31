import { Role } from 'src/users/enums/role.enum';

export interface ActiveUserData {
  /**
   * The "subject" of token. The value of this property is the user ID
   * that granted the token.
   */
  sub: number;

  email: string;

  role: Role;
}
