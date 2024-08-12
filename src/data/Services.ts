type ServiceData = {
  desc1: string;
  desc2: string;
  image: string;
  title: string;
  pos: "left" | "right";
  highlights: string[];
};
export const Services: ServiceData[] = [
  {
    image: "./service1.jpg",
    title: "Rent your favorite book fairly easy on Lidia!",
    desc1:
      "Viewing, rent, and organize your favorite books has never been easier. An integrated digital library rent that's simple to use, Lidia lets you spend less time managing your work and more time actually doing it!",
    desc2:
      "Effortless rentals, personalized shelves—Lidia transforms book management, enhancing your reading experience~",
    pos: "left",
    highlights: ["Rent", "Lidia!"],
  },
  {
    image: "./service2.jpg",
    title: "Quick Book Rentals: Dive into Reading Instantly",
    desc1:
      "Discover instant literary delight. Access a vast library, borrow your favorite reads, and dive into captivating stories within minutes. Reading made quick and easy, just a click away!",
    desc2:
      "Unlock a world of stories effortlessly. Browse genres, choose, rent in minutes. Seamlessly manage your reading adventures with our intuitive platform~",
    pos: "right",
    highlights: ["Dive", "Reading"],
  },
];
