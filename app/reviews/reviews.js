import '../globals.css';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee"; // Corrected import

const reviews = [
  {
    name: "Shoaib Salehmohammed",
    username: "KMIT",
    body: "Maargdarshak is a really helpful platform for students, it helps us stay on track.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Swara N Reddy",
    username: "CBIT",
    body: "Maargdarshak has been game-changing for me. All my resources are at one place and easier to manage",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "SIdharth Kulkarni",
    username: "IIT Hyderbad",
    body: "I love Maargdarshak, it is my go-to for anything college related",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Sudhanva B",
    username: "BITS Hyderabad",
    body: "Managing studies has never been easier and more convenient",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "PVS Abhiroop",
    username: "NIT Trichy",
    body: "The best LMS platform out there",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Sanjana R",
    username: "IIT Madras",
    body: "Clean UI, easy navigation and really helpful :) would recommend 10/10",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, Math.floor(reviews.length / 2));
const secondRow = reviews.slice(Math.floor(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function HomePage() {
  return (
    <div
      className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-[#FBEFE1] "
      style={{
        padding: "20px", // Add padding around the content
      }}
    >
      {/* Heading */}
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 'bold', color: '#3E2723', marginBottom: '37px' }}>
            What Our Students Say
          </h2>

      {/* Reviews Section */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard
            key={review.username}
            {...review}
            style={{
              backgroundColor: "#FFF2E0", // Soft cream background
              borderColor: "#D9A892", // Matches the parent
            }}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard
            key={review.username}
            {...review}
            style={{
              backgroundColor: "#FFF2E0", // Soft cream background
              borderColor: "#D9A892", // Matches the parent
            }}
          />
        ))}
      </Marquee>

      {/* Gradient Overlays */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
        style={{
          backgroundImage: "linear-gradient(to right, #FBEFE1, transparent)",
        }}
      ></div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3"
        style={{
          backgroundImage: "linear-gradient(to left, #FBEFE1, transparent)",
        }}
      ></div>
    </div>
  );
}
