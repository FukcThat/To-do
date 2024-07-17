export const checkStorageAvailabily = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExeededError" &&
      storage &&
      storage.length !== 0
    );
  }
};
