export const RENAME = "RENAME";

export const rename = (name) => ({
  type: RENAME,
  payload: {
    name
  }
});
