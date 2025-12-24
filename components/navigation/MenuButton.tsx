import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface MenuButtonProps {
  onClick: () => void;
  icon: IconDefinition;
  className?: string;
}

export default function MenuButton({ onClick, icon, className = '' }: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-center rounded-md p-3 hover:bg-gray-700 ${className}`}
    >
      <FontAwesomeIcon icon={icon} className="fa-2x" />
    </button>
  );
}
