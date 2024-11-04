import React from "react";

const ProfileForm = ({ profile, setProfile }) => {
  if (!profile) {
    return null;
  }

  const handleChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={profile.username || ''}
            onChange={(e) => handleChange('username', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={profile.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Bio</label>
          <textarea
            value={profile.bio || ''}
            onChange={(e) => handleChange('bio', e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;