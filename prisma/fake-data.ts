import {  } from '@prisma/client';
import { faker } from '@faker-js/faker';
import Decimal from 'decimal.js';



export function fakeUser() {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    emailVerified: faker.date.anytime(),
    image: faker.image.avatar(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeUserComplete() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    emailVerified: faker.date.anytime(),
    image: faker.image.avatar(),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePost() {
  return {
    imageUrl: faker.image.url(),
    caption: faker.lorem.sentence(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakePostComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    imageUrl: faker.image.url(),
    caption: faker.lorem.sentence(),
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeProfile() {
  return {
    bio: faker.lorem.paragraph(),
    avatarUrl: faker.image.avatar(),
    location: faker.location.city(),
    updatedAt: faker.date.anytime(),
  };
}
export function fakeProfileComplete() {
  return {
    id: faker.string.uuid(),
    userId: faker.string.uuid(),
    bio: faker.lorem.paragraph(),
    avatarUrl: faker.image.avatar(),
    location: faker.location.city(),
    interests: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    createdAt: faker.date.anytime(),
    updatedAt: faker.date.anytime(),
  };
}
