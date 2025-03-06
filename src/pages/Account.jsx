import React from 'react';
import Layout from '../components/Layout';

const Account = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center min-h-screen ">
                <div className="flex flex-col space-y-6 w-full max-w-md p-8 bg-gray-700 shadow-lg rounded-lg">
                    <h1 className="text-2xl font-bold text-white">Account Registration</h1>
                    <p className=" text-white">
                        You need to provide required information to create your account.
                    </p>

                    <form className="flex flex-col space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-white"> First name</label>
                            <input type="text"  className="p-2 border border-gray-300 rounded"  />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-white"> Last name</label>
                            <input type="text"  className="p-2 border border-gray-300 rounded"  />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-white"> Email Address</label>
                            <input type="email"  className="p-2 border border-gray-300 rounded"  />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-white"> Password</label>
                            <input type="text"  className="p-2 border border-gray-300 rounded"  />
                        </div>

                        <button type="submit"   className="w-full p-2 bg-blue-500 text-white rounded-md">Submit</button>
                        
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Account;