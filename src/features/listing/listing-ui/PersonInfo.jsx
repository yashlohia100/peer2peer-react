import {
  HiMapPin,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlinePhone,
} from 'react-icons/hi2';
import Button from '../../../ui/Button';

export default function PersonInfo({ user, location }) {
  const { name, photo } = user;
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-7">
      <div>
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}/users/${photo}`}
          alt="profile-picture"
          className="w-28 rounded-full"
        />

        <h3 className="mt-2 text-center text-lg font-medium text-gray-600 lg:text-xl">
          {name}
        </h3>
      </div>

      <div className="space-x-5">
        <Button variant="small">
          <span className="flex items-center gap-2">
            <HiOutlinePhone />
            <span>Call</span>
          </span>
        </Button>

        <Button variant="small">
          <span className="flex items-center gap-2">
            <HiOutlineChatBubbleOvalLeftEllipsis className="text-lg" />
            <span>Chat</span>
          </span>
        </Button>
      </div>

      <p className="flex items-center gap-1 text-sm text-gray-500">
        <span className="text-base">
          <HiMapPin />
        </span>
        <span>{location}</span>
      </p>
    </div>
  );
}
