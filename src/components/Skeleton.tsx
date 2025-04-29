import React from "react";

interface SkeletonProps {
  isLoading: boolean;
  // Controls whether the skeleton or actual content is shown
  className?: string;
  // Tailwind classes to style the skeleton container
  placeholder?: React.ReactNode;
  // Placeholder content (e.g., lorem ipsum)
  children?: React.ReactNode;
  // Actual data content
};

const Skeleton: React.FC<SkeletonProps> = ({ isLoading, className = "", placeholder, children }) => {
  if (isLoading) {
    return (
      <div className={`bg-skeleton animate-skeleton rounded w-fit ${className}`}>
        {placeholder && (
          <p className="opacity-0 ">{placeholder}</p>
          /* Zero-opacity placeholder for skeleton structure */
        )}
      </div>
    );
  }

  // Render the actual content if not loading
  return <>{children}</>;
};

export default Skeleton;