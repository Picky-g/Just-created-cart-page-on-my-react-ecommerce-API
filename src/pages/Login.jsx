import React from 'react';
import Layout from '../components/Layout';

const Login = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col gap-4 w-full max-w-md p-8 bg-gray-700 shadow-lg rounded">
                    <h1 className="text-2xl font-bold text-white">LOGIN FORM</h1>
                    <p className=" text-white">
                        You need to provide required information to log in with us
                    </p>

                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label  className="text-sm font-medium text-white">  Email address </label>
                            <input type="email"  className="p-2 border border-gray-300 rounded-md" />     
                           
                        </div>

                        <div className="flex flex-col ">
                            <label className="text-sm font-medium text-white"> Password </label>
                            <input  type="password" className="p-2 border border-gray-300 rounded-md "  />   
                          
                        </div>

                        <button  type="submit" className="w-full p-2 bg-blue-500 text-white rounded">LOGIN </button>
                        
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;