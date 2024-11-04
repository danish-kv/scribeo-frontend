import React from "react";
import { Edit3 } from "lucide-react";

const ProfileHeader = ({ isEditing, onEdit, onCancel, onSave }) => {
  return (
    <div className="absolute top-4 right-4 space-x-2">
      {isEditing ? (
        <>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </>
      ) : (
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow hover:bg-gray-50 transition-colors"
        >
          <Edit3 className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ProfileHeader;
