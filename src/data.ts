export type Theme = 'light' | 'dark';
export type GalleryTheme = Theme | 'all';
export type Screenshot = { id: string; title: string; description: string; src: string; theme: Theme; alt: string };

export const screenshots: Screenshot[] = [
  { id: 'home-light', title: 'Your Yaari home', description: 'Friends, requests, and activity at a glance.', src: '/assets/screens/home-light.webp', theme: 'light', alt: 'Yaari24 light-mode home screen showing online and offline friends' },
  { id: 'rooms-light', title: 'Rooms with a pulse', description: 'Find a room and jump straight into the conversation.', src: '/assets/screens/rooms-light.webp', theme: 'light', alt: 'Yaari24 light-mode rooms screen with popular and favourite rooms' },
  { id: 'dm-light', title: 'Chats that feel close', description: 'Message, react, and send thoughtful gifts.', src: '/assets/screens/dm-light.webp', theme: 'light', alt: 'Yaari24 light-mode direct message conversation with a virtual gift' },
  { id: 'profile', title: 'Make it yours', description: 'Your profile, friends, gifts, and settings.', src: '/assets/screens/profile.webp', theme: 'light', alt: 'Yaari24 profile screen showing avatar, friend count, gifts, and Yaari-Coin balance' },
  { id: 'store', title: 'Gifts with personality', description: 'Tiny gestures that turn into memorable moments.', src: '/assets/screens/store.webp', theme: 'light', alt: 'Yaari24 store screen showing Yaari-Coin balance and virtual gifts' },
  { id: 'open-chats', title: 'Every chat, one tap away', description: 'Move between active conversations without losing the vibe.', src: '/assets/screens/openchats.webp', theme: 'light', alt: 'Yaari24 open chats panel listing rooms and a direct message' },
  { id: 'home-dark', title: 'Home after dark', description: 'The same friendly experience in a calm navy theme.', src: '/assets/screens/home-dark.webp', theme: 'dark', alt: 'Yaari24 dark-mode home screen showing online and offline friends' },
  { id: 'rooms-dark', title: 'Late-night rooms', description: 'Browse and join rooms in a deep navy interface.', src: '/assets/screens/rooms-dark.webp', theme: 'dark', alt: 'Yaari24 dark-mode rooms screen with room cards and join buttons' },
  { id: 'dm-dark', title: 'Chats after dark', description: 'Comfortable conversations, day or night.', src: '/assets/screens/dm-dark.webp', theme: 'dark', alt: 'Yaari24 dark-mode direct message conversation with a virtual gift' },
  { id: 'splash', title: 'A warm hello', description: 'A distinctly Yaari24 welcome before every conversation.', src: '/assets/screens/splash.webp', theme: 'dark', alt: 'Yaari24 navy splash screen with the Yaari24 logo' },
];

export const featureStories = [
  { id: 'friends', kicker: 'Your circle', title: 'Know who is around.', copy: 'See who is online, discover the mood, and start a private chat without the awkward setup.', icon: '/assets/app-icons/friends.webp', screen: '/assets/screens/home-light.webp', alt: 'Yaari24 home screen with friends online', accent: 'blue', tag: 'Online now' },
  { id: 'rooms', kicker: 'Open doors', title: 'Walk into a live room.', copy: 'Find a topic, enter the room, and become part of the moment. Bas tap karo—conversation already chal rahi hai.', icon: '/assets/app-icons/rooms.webp', screen: '/assets/screens/rooms-dark.webp', alt: 'Yaari24 rooms screen in dark mode', accent: 'orange', tag: '24 people live' },
  { id: 'chats', kicker: 'One-to-one', title: 'Make a message feel more.', copy: 'Text, stickers, images, voice, and virtual gifts give every conversation its own personality.', icon: '/assets/app-icons/chats.webp', screen: '/assets/screens/dm-light.webp', alt: 'Yaari24 direct message screen with a sent gift', accent: 'violet', tag: 'Gift sent' },
  { id: 'gifts', kicker: 'Little gestures', title: 'Send the feeling.', copy: 'A rose, a coffee, or a private jet—use Yaari-Coin to turn ordinary chats into shared memories.', icon: '/assets/app-icons/gifts.webp', screen: '/assets/screens/store.webp', alt: 'Yaari24 gift store with Yaari-Coin prices', accent: 'gold', tag: '9,322 YC' },
] as const;
