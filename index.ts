import fs from 'fs';
import { fakeUser, fakePost, fakeProfile } from './prisma/fake-data';

const usersWithRelations = [];

for (let i = 0; i < 10; i++) {
  const user = fakeUser();
  // Ensure the user has a valid id
  // If fakeUser() doesn't generate one automatically, 
  // consider adding something like: user.id = crypto.randomUUID() or similar.
  // For example:
  if (!user.id) {
    user.id = crypto.randomUUID(); 
  }

  // Create a profile for the user
  const profile = fakeProfile();
  if (!profile.id) {
    profile.id = crypto.randomUUID(); 
  }
  profile.userId = user.id;

  // Create 3 posts for the user
  const posts = [];
  for (let j = 0; j < 3; j++) {
    const post = fakePost();
    // Ensure post has an id and link it to the user
    if (!post.id) {
      post.id = crypto.randomUUID();
    }
    post.userId = user.id;
    posts.push(post);
  }

  usersWithRelations.push({
    ...user,
    profile,
    posts
  });
}

// Write data to a file
fs.writeFileSync('seed-data.json', JSON.stringify(usersWithRelations, null, 2));
console.log('Seed data generated in seed-data.json');
