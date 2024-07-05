"use client";

import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 flex justify-center items-center h-[200px]">
        INI MERUPAKAN LATIHAN TABEL CRUD
      </div>
      <div className="bg-gradient-to-br from-violet-700 flex justify-center">
        <button
          onClick={() => (window.location.href = "/kontak")}
          className="bg-red-500 rounded-md flex justify-center"
        >
          Klik tombol ini untuk melanjutkan ke table
        </button>
      </div>
    </>
  );
}
