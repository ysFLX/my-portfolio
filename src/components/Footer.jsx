import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center border-t">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} ysFLX. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
