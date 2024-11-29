import '../globals.css';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee"; // Corrected import

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
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
