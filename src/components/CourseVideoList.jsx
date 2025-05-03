import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const CourseVideoList = ({ course, selectedVideo, onVideoSelect }) => {
  const { courseId } = useParams(); // Mendapatkan parameter dari URL
  const [activeVideoId, setActiveVideoId] = useState(selectedVideo); // State untuk menyimpan ID video aktif
  const navigate = useNavigate();

  // Efek untuk memantau perubahan pada courseVideoId dari URL
  useEffect(() => {
    setActiveVideoId(selectedVideo);
  }, [selectedVideo]);

  const handleVideoClick = (videoId) => {
    onVideoSelect(videoId);
    navigate(`/course/${courseId}/learn/${videoId}`);
  };

  if (!course || !course.course_videos) {
    return <div>Daftar video tidak tersedia.</div>;
  }

  return (
    <>
      <div>
        <Link
          to={`/course/${courseId}/details`}
          className="flex items-center justify-start gap-2 text-gray-200 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-book-open w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            <path d="M12 13h6" />
            <path d="M12 17h6" />
          </svg>
          <p className="font-semibold">Course Trailer</p>
        </Link>
      </div>
      {course.course_videos.map((video) => (
        <button
          key={video.id}
          onClick={() => handleVideoClick(video.id)}
          className={`w-full flex items-center justify-start gap-2 text-gray-200 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md ${
            activeVideoId === video.id ? "bg-gray-700 text-white" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-play-circle w-4 h-4"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m10 8 6 4-6 4V8z" />
          </svg>
          <Link
            to={`/course/${courseId}/learn/${video.id}`}
            className="font-semibold"
          >
            {video.name}
          </Link>
        </button>
      ))}
    </>
  );
};

export default CourseVideoList;
