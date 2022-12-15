export async function fetchCategory() {
  const res = await fetch("https://api.publicapis.org/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } else {
    const data = await res.json();
    console.log("Categories fetched!");
    return { status: true, data: data.categories };
  }
}

export async function fetchEntry() {
  const res = await fetch("https://api.publicapis.org/entries");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  } else {
    const data = await res.json();
    console.log("Entries fetched!");
    return { status: true, data: data.entries };
  }
}
