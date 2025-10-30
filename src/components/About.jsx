import React from "react";

export default function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`py-20 px-6 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Hakkımda</h2>
        <p
          className={`max-w-3xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Frontend geliştirme, React, Tailwind ve modern toolchain ile
          ilgileniyorum. Kullanıcı deneyimi ve performans odaklı çözümler
          üretmeyi seviyorum.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className={`p-6 rounded-lg shadow ${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <h3 className="font-semibold mb-2">React</h3>
            <p className="text-sm">
              Bileşen bazlı mimari ve state management tecrübem var.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow ${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <h3 className="font-semibold mb-2">Tailwind</h3>
            <p className="text-sm">
              Hızlı prototipleme ve tutarlı UI stilleri oluşturuyorum.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg shadow ${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            }`}
          >
            <h3 className="font-semibold mb-2">Performans</h3>
            <p className="text-sm">
              Ön yükleme, kod bölme ve optimizasyon konularına dikkat ediyorum.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">Projelerim</h3>
          <p
            className={`max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Çeşitli projelerde yer aldım, bunlar arasında web uygulamaları ve
            kullanıcı arayüzleri bulunmaktadır. Her projede kullanıcı geri
            bildirimlerini dikkate alarak sürekli iyileştirme yapmayı
            hedefliyorum.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-4">İlgi Alanlarım</h3>
          <p
            className={`max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Teknoloji, yapay zeka ve kullanıcı deneyimi tasarımı konularına ilgi
            duyuyorum. Sürekli öğrenme ve kendimi geliştirme motivasyonum var.
          </p>
        </div>
      </div>
    </section>
  );
}
