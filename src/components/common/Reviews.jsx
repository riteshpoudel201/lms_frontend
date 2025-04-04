import React from "react";
import Star from "./Star";
import { getRelativeTime } from "@utils/time";

const bookReviews = [
    {
      "title": "The Great Adventure",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod, ipsam odio doloribus obcaecati omnis iste officia vero atque provident sed nobis consequatur rem distinctio minima minus.",
      "reviewedBy": "Alice Johnson",
      "rating": "3.8",
      "createdAt": "2024-08-14T10:15:32Z"
    },
    {
      "title": "Mystery of the Lost Kingdom",
      "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      "reviewedBy": "John Doe",
      "rating": "4.9",
      "createdAt": "2025-01-22T08:45:11Z"
    },
    {
      "title": "Fascinating Journey",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer maximus, nisi at volutpat elementum, nulla ipsum iaculis enim, eu tincidunt tortor erat vel odio.",
      "reviewedBy": "Sarah Parker",
      "rating": "4.2",
      "createdAt": "2025-03-09T14:32:22Z"
    },
    {
      "title": "Secrets Unveiled",
      "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet magna in nulla volutpat vestibulum.",
      "reviewedBy": "Mark Taylor",
      "rating": "4.5",
      "createdAt": "2024-11-30T18:00:05Z"
    },
    {
      "title": "Escape to Paradise",
      "description": "Quisque hendrerit mi et velit sodales, ut lobortis nulla congue. Ut feugiat orci sit amet arcu mollis, id lacinia lorem feugiat.",
      "reviewedBy": "Emma Roberts",
      "rating": "5.0",
      "createdAt": "2025-04-02T16:10:40Z"
    },
    {
      "title": "Journey Beyond the Stars",
      "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tincidunt risus sed neque cursus, a dignissim ipsum iaculis.",
      "reviewedBy": "David Lee",
      "rating": "4.7",
      "createdAt": "2025-02-13T12:21:45Z"
    },
    {
      "title": "Whispers in the Dark",
      "description": "Donec mollis risus eget dui consequat, vel tincidunt ipsum placerat. Sed vitae orci euismod, sollicitudin risus a, scelerisque lorem.",
      "reviewedBy": "Sophie Williams",
      "rating": "3.6",
      "createdAt": "2024-12-05T09:40:25Z"
    }
  ];
  

const Reviews = ({ bookRef }) => {
  return (
    <div
      className="d-flex flex-column gap-4 overflow-y-auto overflow-x-hidden px-2 py-3"
      style={{ height: "80vh" }}
      ref={bookRef}
    >
      {bookReviews?.map((review, index) => {
        const initials =
          review.reviewedBy
            .split(" ")
            .map((name) => name[0])
            .join("")
            .toUpperCase();

        return (
          <div
            key={index}
            className="d-flex flex-row gap-3 p-3 align-items-start"
            style={{
              borderRadius: "1rem",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {/* Avatar */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
                color: "white",
                borderRadius: "50%",
                width: "64px",
                height: "64px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                flexShrink: 0,
              }}
            >
              {initials}
            </div>

            {/* Content */}
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{review.title}</h5>
              </div>

              <div className="d-flex gap-3 align-items-center">
                <Star rating={review?.rating} />
                <span className="text-muted small">{getRelativeTime(review?.createdAt)}</span>
              </div>

              <p style={{ marginBottom: "0.5rem" }}>{review.description}</p>

              <div className="text-end text-muted small">
                — {review.reviewedBy}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
