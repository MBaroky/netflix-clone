// Define a User entity
interface User {
  id: string;
  name: string;
  email: string;
  profileId: string;
  hashedPassword: string;
}

// Define a UserProfile entity
interface UserProfile {
  id: string;
  userId: string;
  avatarUrl: string;
  bio: string;
}
