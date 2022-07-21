// A mock function to mimic making an async request for data
export const fetchUser = (data) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data }), 500)
  );
}
