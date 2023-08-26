export type Teacher = {
  id: string;
  avatar_url: string;
  lessons_done: number;
  rating: number;
  price_per_hour: number;
  name: string;
  surname: string;
  languages: string[];
  lesson_info: string;
  conditions: string[];
  experience: string;
  reviews: {
    reviewer_name: string;
    avatar_url: string;
    reviewer_rating: number;
    comment: string;
  }[];
  levels: string[];
};
