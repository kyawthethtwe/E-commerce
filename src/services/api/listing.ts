// import axiosInstance from "../axios.config"
interface Listing {
  id: string;
  title: string;
  price: number;
  image: string;
  status: "active" | "sold" | "draft";
}

const listings: Listing[] = [
  {
    id: "1",
    title: "Classic Red Jogger Sweatpants",
    price: 98,
    image: "https://i.imgur.com/9LFjwpI.jpeg",
    status: "active",
  },
  {
    id: "2",
    title: "Magyar tej",
    price: 400000,
    image: "https://i.imgur.com/9LFjwpI.jpeg",
    status: "active",
  },
  {
    id: "3",
    title: "Classic Red Jogger Sweatpants",
    price: 98,
    image: "https://i.imgur.com/9LFjwpI.jpeg",
    status: "sold",
  },
];

export async function getListings() {
  // const response = await axiosInstance.get(`/api/listings/my-listings`)
  return listings;
}
