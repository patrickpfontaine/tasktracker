import React from "react";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/button";

const TaskPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4A4771] to-[#8AAAE5] flex flex-col p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Task Tracker</h1>
      </header>
      <div className="flex justify-between mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md text-center flex-1 mx-2">
          <h2 className="text-xl font-semibold text-gray-700">Total Tasks</h2>
          <p className="text-3xl font-bold text-gray-900">10</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center flex-1 mx-2">
          <h2 className="text-xl font-semibold text-gray-700">
            Total Time ETA
          </h2>
          <p className="text-3xl font-bold text-gray-900">5h 30m</p>
        </div>
      </div>
      <div className="flex h-[600px]">
        <div className="bg-white rounded-lg shadow-md flex-1 mx-2 p-4 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">To Do</h2>
          {/* Task items will go here */}
          <Button className="mt-auto" variant="default">
            <PlusIcon className="mr-2 h-4 w-4" /> Add Task
          </Button>
        </div>
        <div className="bg-white rounded-lg shadow-md flex-1 mx-2 p-4">
          <h2 className="text-xl font-semibold mb-4">In Progress</h2>
          {/* Task items will go here */}
        </div>
        <div className="bg-white rounded-lg shadow-md flex-1 mx-2 p-4">
          <h2 className="text-xl font-semibold mb-4">Done</h2>
          {/* Task items will go here */}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
