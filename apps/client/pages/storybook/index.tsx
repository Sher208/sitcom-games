import { Button } from '@library/storybook';

export function StoryBook() {
  return (
    <div>
      <Button className="border-indigo-500 bg-indigo-500 hover:bg-indigo-600 ">
        Primary
      </Button>
      <Button className="border-green-500 bg-green-500 hover:bg-green-600">
        Success
      </Button>
      <Button className="border-red-500 bg-red-500 hover:bg-red-600">
        Error
      </Button>
      <Button className="border-yellow-500 bg-yellow-500 hover:bg-yellow-600">
        Info
      </Button>
      <Button className="border-teal-500 bg-teal-500 hover:bg-teal-600">
        Warning
      </Button>
    </div>
  );
}

export default StoryBook;
