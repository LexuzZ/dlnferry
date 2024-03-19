import Pagination from "@/Components/Pagination";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import React from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const Informasi = ({ jadwals }) => {
    const { flash, errors } = usePage().props;

    const { data, setData, reset } = useForm({
        nama_kapal: "",
    });
    const storeInfo = (e) => {
        e.preventDefault();
        router.post("/informasi", data, {
            onSuccess: () => {
                reset();
            },
        });
    };
    return (
        <AdminLayout>
            <div className="text-center text-2xl font-bold py-4">
                Informasi Jadwal
            </div>
            {flash.message && (
                <div
                    class="flex items-center p-4 mb-4 text-sm text-midnight rounded-lg bg-green dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                >
                    <svg
                        class="flex-shrink-0 inline w-4 h-4 me-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                        <span class="font-medium">Success alert!</span>{" "}
                        {flash.message}
                    </div>
                </div>
            )}
            <div className="flex items-center justify-center">
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form class="max-w-md mx-auto" onSubmit={storeInfo}>
                        <label
                            for="default-search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Nama Kapal
                            </label>
                            <input
                                type="text"
                                // id="default-search"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="enter ..."
                                // required
                                onChange={(e) =>
                                    setData("nama_kapal", e.target.value)
                                }
                                value={data.nama_kapal}
                            />
                            <p className="text-red text-sm mt-2">
                                {errors.nama_kapal}
                            </p>
                        </div>
                        <button
                            type="submit"
                            class="mt-4 text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Save
                        </button>
                    </form>
                    {/* {errors.nama_kapal && (
                    <p className="text-red-800 text-sm mt-2">
                        {errors.nama_kapal}
                    </p>
                )} */}
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <table class="w-full text-sm text-center rtl:text-right text-midnight">
                    <thead class="text-xs text-midnight uppercase bg-purple font-bold">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nama Kapal
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jadwals.data.map((jadwal, i) => {
                            return (
                                <tr
                                    key={i}
                                    className="  border-b "
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                                    >
                                        {jadwal.nama_kapal}
                                    </th>
                                    <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                                        {jadwal.is_complete}
                                    </td>
                                    <td class="px-6 py-4 flex justify-center gap-2">
                                        <div
                                            className="inline-flex rounded-md shadow-sm"
                                            role="group"
                                        >
                                            <Link className="inline-flex items-center px-4 py-2    border border-gray-200 rounded-s-lg hover:bg-red focus:z-10 focus:ring-2   border-gray-900   hover:bg-red-600 ">
                                                <FaTrash size={20} />
                                            </Link>

                                            <Link className="inline-flex items-center px-4 py-2    border border-gray-200 rounded-e-lg hover:bg-yellow-600  focus:z-10 focus:ring-2     dark:hover:bg-yellow-500 ">
                                                <BsPencilSquare size={20} />
                                            </Link>
                                        </div>

                                        {/* <Link>
                                            
                                        </Link>
                                        <Link>
                                            
                                        </Link> */}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-center">
                {" "}
                <Pagination jadwals={jadwals} />
            </div>
        </AdminLayout>
    );
};
export default Informasi;
