import { schema } from 'normalizr';

// User
export const user = new schema.Entity(
  'users',
  {},
  {
    idAttribute: 'userId'
  }
);
export const users = [user];

// ADD YOUR SCHEMA HERE...