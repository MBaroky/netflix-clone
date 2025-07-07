import React, { useState, ReactNode } from 'react';

interface DropUpProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

const DropUp: React.FC<DropUpProps> = ({ trigger, children, className }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <div className={className + ' relative'}>
      <span onClick={handleToggle} style={{ cursor: 'pointer' }}>
        {trigger}
      </span>
      {open && (
        <div className="absolute bottom-full mb-2 right-0 z-50">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropUp;
