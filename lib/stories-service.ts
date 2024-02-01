import { topStories } from "./data";
export const getTopStoriesById = (id: string) => {
  const story = topStories[Number(id)];
  if (!story) throw new Error("Story not found");
  return story;
};
