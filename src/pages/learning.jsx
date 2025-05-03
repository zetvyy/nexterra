import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import CourseVideoList from "../components/CourseVideoList";

const dummyCourses = [
  {
    id: 1,
    title: "The Ultimate Guide to React Fundamentals",
    slug: "react-fundamentals",
    description:
      "Master the core concepts of React.js and build interactive user interfaces.",
    instructor: "Alice Wonderland",
    thumbnail: "https://via.placeholder.com/300/FFC107/000000?Text=React",
    totalLessons: 10,
    course_videos: [
      {
        id: 101,
        name: "Introduction to React",
        path_video: "SqcY0GlETPk", // Replace with actual YouTube ID
      },
      {
        id: 102,
        name: "JSX in Depth",
        path_video: "your_youtube_embed_id_2", // Replace with actual YouTube ID
      },
      {
        id: 103,
        name: "Components and Props",
        path_video: "your_youtube_embed_id_3", // Replace with actual YouTube ID
      },
      {
        id: 104,
        name: "State Management Basics",
        path_video: "your_youtube_embed_id_4", // Replace with actual YouTube ID
      },
      {
        id: 105,
        name: "Handling Events",
        path_video: "your_youtube_embed_id_5", // Replace with actual YouTube ID
      },
      {
        id: 106,
        name: "Conditional Rendering",
        path_video: "your_youtube_embed_id_6", // Replace with actual YouTube ID
      },
      {
        id: 107,
        name: "List and Keys",
        path_video: "your_youtube_embed_id_7", // Replace with actual YouTube ID
      },
      {
        id: 108,
        name: "Forms in React",
        path_video: "your_youtube_embed_id_8", // Replace with actual YouTube ID
      },
      {
        id: 109,
        name: "Introduction to Hooks",
        path_video: "your_youtube_embed_id_9", // Replace with actual YouTube ID
      },
      {
        id: 110,
        name: "useEffect Explained",
        path_video: "your_youtube_embed_id_10", // Replace with actual YouTube ID
      },
    ],
  },
  {
    id: 2,
    title: "Mastering JavaScript",
    slug: "mastering-javascript",
    description: "Go from beginner to advanced in JavaScript.",
    instructor: "Jane Smith",
    thumbnail: "https://via.placeholder.com/300/80CBC4/000000?Text=JS",
    totalLessons: 12,
    course_videos: [
      { id: 201, name: "JS Basics", path_video: "video_id_11" },
      { id: 202, name: "Functions", path_video: "video_id_12" },
      { id: 203, name: "Objects", path_video: "video_id_13" },
    ],
  },
  {
    id: 3,
    title: "CSS Styling",
    slug: "css-styling",
    description: "Learn how to style websites.",
    instructor: "David Lee",
    thumbnail: "https://via.placeholder.com/300/F06292/FFFFFF?Text=CSS",
    totalLessons: 8,
    course_videos: [
      { id: 301, name: "CSS Intro", path_video: "css_video_1" },
      { id: 302, name: "Selectors", path_video: "css_video_2" },
    ],
  },
];

const LearningPath = () => {
  const { courseId, courseVideoId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCourse, setSelectedCourse] = useState(dummyCourses[0] || null);
  const [isCourseListOpen, setIsCourseListOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(courseVideoId || null);

  const handleCourseSelect = () => {
    setSelectedCourse(course);
    setIsCourseListOpen(false); // Close dropdown on select
  };

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
    // Tidak perlu window.location.replace di sini.
  };

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Use the dummyCourses data to find the course
        const foundCourse = dummyCourses.find(
          (c) => c.id === parseInt(courseId)
        );

        if (course && !selectedVideo && course.course_videos.length > 0) {
          setSelectedVideo(course.course_videos[0].path_video); // Set video pertama setelah course dimuat
        }

        if (!foundCourse) {
          throw new Error("Course not found");
        }

        setCourse(foundCourse);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [courseId, course, selectedVideo]);

  if (loading) {
    return <div>Loading course data...</div>;
  }

  if (error) {
    return <div>Error loading course: {error.message}</div>;
  }

  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-purple-800 to-gray-600 text-white p-4 md:p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-300 text-transparent bg-clip-text">
            My Learning Page
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Video Player Section */}
            <div className="flex-grow">
              <div className="bg-black/50 shadow-lg rounded-lg border border-white/10 backdrop-blur-md">
                <div className="p-4">
                  <h2 className="text-lg md:text-xl text-white">
                    {selectedCourse.title}
                  </h2>
                  <p className="text-gray-300">{selectedCourse.description}</p>
                </div>
                <div className="p-4">
                  <div
                    className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
                    style={{ height: "400px" }}
                  >
                    {selectedVideo ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${selectedVideo}`}
                        title="Course Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex items-center justify-center bg-gray-700 h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-play-circle text-gray-400"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="m10 8 6 4-6 4V8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-gray-200">
                    Currently viewing:{" "}
                    {/* <span className="font-semibold text-white">
                      {course?.course_videos?.find(
                        (v) => v.path_video === selectedVideo
                      )?.name || "No Video Selected"}
                    </span> */}
                    <span className="font-semibold text-white">
                      {course &&
                      course.course_videos &&
                      course.course_videos.length > 0
                        ? course.course_videos.name
                        : "No Video Selected"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Course Selection Section */}
            <div className="w-full md:w-80">
              <div className="bg-black/50 shadow-lg rounded-lg border border-white/10 backdrop-blur-md">
                <div className="p-4">
                  <h2 className="text-lg md:text-xl text-white flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-book-open w-5 h-5"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      <path d="M12 13h6" />
                      <path d="M12 17h6" />
                    </svg>
                    Course List
                  </h2>
                  <div className="relative inline-block text-left w-full mt-2">
                    {isCourseListOpen && (
                      <div className="absolute z-10 mt-2 w-full bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {dummyCourses.map((mappedCourse) => (
                            <button
                              key={mappedCourse.id}
                              onClick={() => handleCourseSelect(mappedCourse)}
                              className={`block px-4 py-2 text-sm text-gray-200 w-full text-left hover:bg-gray-700 hover:text-white ${
                                mappedCourse.id === selectedCourse.id
                                  ? "bg-gray-700 text-white"
                                  : ""
                              }`}
                              role="menuitem"
                            >
                              {mappedCourse.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {course && (
                    <CourseVideoList
                      course={course}
                      selectedVideo={selectedVideo}
                      onVideoSelect={handleVideoSelect}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 bg-gray-800">
        <p>&copy; 2025 Nexterra. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LearningPath;
