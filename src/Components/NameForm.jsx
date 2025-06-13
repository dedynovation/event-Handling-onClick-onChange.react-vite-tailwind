import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    setSubmittedName(name); // Menyimpan nama saat tombol diklik
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Formulir Nama</h1>

      <input
        type="text"
        placeholder="Masukkan nama Anda"
        value={name}
        onChange={handleChange}
        className="p-2 border border-gray-400 rounded mb-4 w-64 text-center"
      />

      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
      >
        Tampilkan Nama
      </button>

      {submittedName && (
        <p className="text-lg">
          Nama yang ditampilkan:{" "}
          <span className="font-semibold">{submittedName}</span>
        </p>
      )}
    </div>
  );
}

export default NameForm;
