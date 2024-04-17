export const getFilms = async () => {
  const result = await fetch(
    "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json"
  );

  const data = await result.json();

  return data;
};
