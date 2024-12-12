import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    name: undefined,
    email: faker.internet.email(),
    emailVerified: undefined,
    image: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    name: undefined,
    email: faker.internet.email(),
    emailVerified: undefined,
    image: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePost() {
  return {
    imageUrl: faker.lorem.words(5),
    caption: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakePostComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    imageUrl: faker.lorem.words(5),
    caption: undefined,
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeProfile() {
  return {
    bio: undefined,
    avatarUrl: undefined,
    location: undefined,
    updatedAt: faker.date.anytime(),
  };
}
export function fakeProfileComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    bio: undefined,
    avatarUrl: undefined,
    location: undefined,
    interests: [],
    createdAt: new Date(),
    updatedAt: faker.date.anytime(),
  };
}
