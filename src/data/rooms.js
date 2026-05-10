const rooms = [
  {
    id: 1,
    type: "1 RK",
    location: "Whitefield",
    rent: 6000,
    deposit: 25000,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    type: "1BHK",
    location: "Marathahalli",
    rent: 12000,
    deposit: 50000,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    type: "2BHK",
    location: "Bellandur",
    rent: 18000,
    deposit: 70000,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "3BHK",
    location: "Electronic City",
    rent: 25000,
    deposit: 100000,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  },
];

const moreRooms = Array.from({ length: 32 }, (_, i) => ({
  id: i + 5,
  type: ["1 RK", "1BHK", "2BHK", "3BHK"][i % 4],
  location: [
    "Whitefield",
    "Marathahalli",
    "Bellandur",
    "Electronic City",
  ][i % 4],
  rent: [7000, 12000, 18000, 26000][i % 4],
  deposit: [30000, 50000, 70000, 120000][i % 4],
  image: `https://picsum.photos/400/300?random=${i + 1}`,
}));

const allRooms = [...rooms, ...moreRooms];

export default allRooms;