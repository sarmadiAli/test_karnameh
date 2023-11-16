type comment = {
  full_name: string;
  body: number;
  create_at: string | number;
  like: string;
  dislike: string;
};
export type questionType = {
  id: number;
  subject: string;
  body: string;
  create_at: string | number;
  img?: string;
  comments: comment[];
};
