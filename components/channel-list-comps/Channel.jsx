'use client';

const CollapsibleSection = ({ title, children, isOpen, setIsOpen }) => {

  console.log(isOpen);
  
  return (
    <div>
      {/* 헤더 영역 */}
      <div
        className="flex items-center cursor-pointer text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)} // 상태 변경
      >
        {/* 화살표 */}
        <span
          className={`mr-1 transform ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          style={{ fontSize: '12px', lineHeight: '1' }}
        >
          ▶
        </span>
        {/* 제목 */}
        <span className="text-xs font-medium" style={{ lineHeight: '1.2' }}>
          {title}
        </span>
      </div>

      {/* 콘텐츠 영역 */}
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
