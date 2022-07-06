import React from "react";
import {
  XIcon,
} from '@heroicons/react/outline'

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="w-full flex items-center justify-center px-4 py-2 shadow-sm text-base font-medium text-smart bg-yellow hover:bg-white hover:text-smart ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Admin
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
                <div className="flex items-start justify-between p-5 border-b border-solid border-smart rounded-t">
                  <h3 className="text-xl font-bold text-smart">
                    Daftar Kelas
                  </h3>
                  <button
                    className="p-1 ml-auto bg-smartred border-0 text-black rounded-md hover:bg-smart float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <XIcon className="text-white h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-black font-regular text-md leading-relaxed">
                    Belum ada kelas yang dibuka. Follow <a className="font-semibold text-smartred" href="https://instagram.com/bpsprovsultra">instagram BPS Provinsi Sulawesi Tenggara (@bpsprovsultra)</a> untuk mendapat info terkini terkait Smart Sharing BPS Provinsi Sulawesi Tenggara
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-smartred font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Tutup
                  </button>
                  <button
                    className="bg-smart text-white active:bg-emerald-600 font-bold text-sm px-6 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Daftar (Belum Tersedia)
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