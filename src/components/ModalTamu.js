import React from "react";
import {
  XIcon,
} from '@heroicons/react/outline'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="items-center justify-center px-4 py-4 rounded-xl shadow-sm text-md font-bold text-white bg-pst hover:bg-blue hover:text-white ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Daftar Antrian
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-400 rounded-t">
                  <h3 className="text-xl font-bold text-smart">
                    Daftar Antrian
                  </h3>
                  <button
                    className="p-1 ml-auto bg-smartred border-0 text-black rounded-md hover:bg-smart float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <XIcon className="text-white h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/*input nama*/}
                <div className="relative p-6 flex-auto">
                  <form>
                    <div className="relative w-full mt-3 mb-3">
                      <input
                      type="text"
                      className="border px-3 py-3 placeholder-gray-400 text-gray-900 bg-white rounded-lg text-sm shadow border-gray-900 focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Nama Lengkap"
                      />
                    </div>
                  </form>
                </div>
                {/*pilih layanan*/}
                <div className="items-center text-left px-6 rounded-b">
                  <p>Pilih Layanan:</p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-indigo-700 font-bold px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Perpustakaan Cetak/Digital
                  </button>
                  <button
                    className="text-white bg-green font-bold px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Konsultasi Statistik
                  </button>
                  <button
                    className="text-white bg-red font-bold px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Rekomendasi Statistik
                  </button>
                  <button
                    className="text-white bg-orange font-bold px-6 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Penjualan Produk Statistik
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}