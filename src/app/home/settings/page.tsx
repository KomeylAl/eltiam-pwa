"use client";

import { Modal } from "@/components/Modal";
import SecureForm from "@/components/SecureForm";
import { useModal } from "@/hooks/useModal";
import { useSyncWithServer } from "@/lib/dbActions";
import React from "react";

const Settings = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const { sync, allSynced, isLoading } = useSyncWithServer();
  return (
    <div className="bg-white min-h-screen">
      <div className="w-full bg-[#469173] flex flex-col items-center justify-center gap-3 h-44">
        <p className="text-3xl text-white font-bold">تنظیمات</p>
        <p className="text-xl text-white">
          انجام تنظیمات و پر کردن فرم های پیشفرض
        </p>
      </div>

      <div className="w-full flex flex-col space-y-3">
        <button
          className="bg-white p-4 rounded-lg mt-5 mx-5 border border-[#469173]"
          onClick={openModal}
        >
          <p className="text-center text-[#469173] font-vazir text-lg">
            ویرایش فرم اولیه
          </p>
        </button>

        <button
          className="bg-white p-4 rounded-lg mx-5 border border-[#469173]"
          onClick={() => sync()}
          disabled={isLoading}
        >
          <p className="text-center text-[#469173] text-lg">
            {isLoading ? "در حال همگام سازی..." : "همگام سازی اطلاعات با سرور"}
          </p>
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="min-h-[50%] max-h-[80%] rounded-lg bg-white">
          <SecureForm onSubmit={closeModal} />
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
