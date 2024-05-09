import whiteBoardImg from "../img/whiteboarding.png";
import socialmediaImg from "../img/socialmedia.jpg";
import chatImg from "../img/chat.png";
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const services = [
  {
    imgSrc: whiteBoardImg,
    title: "Analytics Service",
    description: "lore",
    slug: generateSlug("Analytics Service"),
    price: "$99/month",
  },
  {
    imgSrc: chatImg,
    title: "Chat Service",
    description:
      "LA chat service is an application, software, or website-based service that customer service representatives use to communicate with consumers. While some chat services use asynchronous SMS texting, others utilize live instant messaging  tools or online chat windows that mimic social  Helpshift provides the tools and technology to hook up a live chat experience for your customers. Helpshift’s chat services technology enables you to add a web chat widget right to your website, which enables conversations between customers and both agents and bots. The industry standard typing indicator is used so that customers can see when an agent or bot is responding.media platforms.",
    slug: generateSlug("Chat Service"),
    price: "$49/month",
  },
  {
    imgSrc: whiteBoardImg,
    title: "Social Media Service",
    description: "Description 4",
    slug: generateSlug("Social Media Service"),
    price: "$29/month",
  },
  {
    imgSrc: whiteBoardImg,
    title: "Payment Service",
    description: "Description 5",
    slug: generateSlug("Payment Service"),
    price: "$19/month",
  },
  {
    imgSrc: whiteBoardImg,
    title: "Link Tree Service",
    description: "Description 6",
    slug: generateSlug("Link Tree Service"),
    price: "$39/month",
  },
  {
    imgSrc: whiteBoardImg,
    title: "Register,Login Service",
    description: "Description 7",
    slug: generateSlug("Register,Login Service"),
    price: "$59/month",
  },
  {
    imgSrc: whiteBoardImg,
    title: "ShortLink &Ads Service",
    description: "Description 8",
    slug: generateSlug("ShortLink &Ads Service"),
    price: "$79/month",
  },
  {
    imgSrc: whiteBoardImg,
    title: "Bucket Service",
    description: "Description 9",
    slug: generateSlug("Bucket Service"),
    price: "$69/month",
  },
  {
    imgSrc: socialmediaImg,
    title: "Whiteboard Service",
    description: "Lorem ipsum...",
    slug: generateSlug("Whiteboard Service"),
    price: "$89/month",
  },
];

export default services;
