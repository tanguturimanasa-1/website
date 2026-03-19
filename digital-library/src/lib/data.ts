export type Tier = "Free" | "Premium";
export type Category = "Novels" | "Study Materials" | "Textbooks" | "Children's Books" | "Comics";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: Category;
  tier: Tier;
  coverImage: string;
  description: string;
  rating: number;
  publishedYear: number;
  tags: string[];
}

export const CATEGORIES: Category[] = [
  "Novels", 
  "Study Materials", 
  "Textbooks", 
  "Children's Books", 
  "Comics"
];

export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "The Silent Echo",
    author: "Elena Rostov",
    category: "Novels",
    tier: "Premium",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    description: "A gripping mystery novel set in the heart of eastern Europe. Discover the secrets that have been hidden for generations.",
    rating: 4.8,
    publishedYear: 2023,
    tags: ["Mystery", "Thriller", "Fiction"]
  },
  {
    id: "2",
    title: "Advanced Calculus for Undergraduates",
    author: "Dr. Jonathan Smith",
    category: "Study Materials",
    tier: "Free",
    coverImage: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=600&auto=format&fit=crop",
    description: "Comprehensive notes and solved examples for university level calculus. Perfect for exam preparation.",
    rating: 4.5,
    publishedYear: 2021,
    tags: ["Math", "University", "Notes"]
  },
  {
    id: "3",
    title: "The Magic Treehouse Adventure",
    author: "Sarah Johnson",
    category: "Children's Books",
    tier: "Free",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop",
    description: "Join Timmy and Lily as they explore the magical worlds hidden within their backyard treehouse.",
    rating: 4.9,
    publishedYear: 2022,
    tags: ["Fantasy", "Ages 6-8", "Illustrated"]
  },
  {
    id: "4",
    title: "Physics Principles Book II",
    author: "Cambridge Press",
    category: "Textbooks",
    tier: "Premium",
    coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop",
    description: "The official textbook detailing electromagnetism and optics for high school seniors.",
    rating: 4.7,
    publishedYear: 2024,
    tags: ["High School", "Science", "Physics"]
  },
  {
    id: "5",
    title: "Galaxy Explorers",
    author: "Stan Lee Jr.",
    category: "Comics",
    tier: "Premium",
    coverImage: "https://images.unsplash.com/photo-1612036782180-6f0b6ce846ce?q=80&w=600&auto=format&fit=crop",
    description: "An educational comic series teaching kids about the solar system through exciting heroic adventures.",
    rating: 4.6,
    publishedYear: 2023,
    tags: ["Space", "Educational", "Heroes"]
  },
  {
    id: "6",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Novels",
    tier: "Free",
    coverImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=600&auto=format&fit=crop",
    description: "The classic tale of love and misunderstanding in class-conscious England.",
    rating: 4.9,
    publishedYear: 1813,
    tags: ["Classic", "Romance", "Public Domain"]
  },
  {
    id: "7",
    title: "Data Structures in Java",
    author: "Alan Turing",
    category: "Textbooks",
    tier: "Premium",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=600&auto=format&fit=crop",
    description: "Deep dive into trees, graphs, and algorithms using modern Java practices.",
    rating: 4.8,
    publishedYear: 2020,
    tags: ["Computer Science", "Programming", "Java"]
  },
  {
    id: "8",
    title: "Dinosaur Alphabet",
    author: "Kids Fun Learn",
    category: "Children's Books",
    tier: "Free",
    coverImage: "https://images.unsplash.com/photo-1569426986689-58b5bd438258?q=80&w=600&auto=format&fit=crop",
    description: "Learn the ABCs with fun, colorful dinosaur illustrations.",
    rating: 4.7,
    publishedYear: 2021,
    tags: ["Ages 3-5", "Alphabet", "Animals"]
  }
];

export const FEATURED_BOOKS = MOCK_BOOKS.filter(b => b.rating > 4.7);
export const RECENTLY_ADDED = MOCK_BOOKS.sort((a,b) => b.publishedYear - a.publishedYear).slice(0, 4);
