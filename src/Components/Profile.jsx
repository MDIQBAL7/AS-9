import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext);

useEffect(() => {
    document.title = "Profile | ToyTopia";
  }, []);
    return (
         <section className="py-12 bg-yellow-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Avatar */}
          <div className="flex-shrink-0">
            <img
              src={user.photoURL ? `${user.photoURL}` : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKfj6RsyRZqO4nnWkPFrYMmgrzDmyG31pFQ&s'}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-0"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">{user.displayName}</h2>
    

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
              <div>
                <span className="font-medium">Email:</span> {user.email}
              </div>
              <div>
                
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button className="btn btn-primary w-full sm:w-auto">
                Edit Profile
              </button>
              <button className="btn btn-outline w-full sm:w-auto">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Profile;