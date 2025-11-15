document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "RS UNHAS", img: "1.jpg", 
        price: "1. Nama Kegiatan ; Penyuluhan Kesehatan dan Tanya Jawab Interaktif Dalam Rangka World Cancer Day",
        price2: "2. Waktu kegiatan ; 4 Februari 2023 ",
        price3: "3. Tempat Kegiatan ; Ruang tunggu RS Universitas Hasanuddin",
        price4: "4. Bentuk kegiatan ; Penyuluhan tentang Deteksi Dini Kanker Bagian THT",
        price5: "5. Penanggung jawab kegiatan ; Dr. dr. Nova A. L. Pieter, Sp. T.H.T.B.K.L, Subsp.Onko.(K), FICS",
        price6: "6. Kerjasama dengan ; PKRS RS. Unhas,  Dep. IK. T.H.T.B.K.L Fakultas Kedokteran Unhas",
        price7: "7. Hasil Kegiatan ; Peserta adalah para pasien dan pengantar pasien yang sementara mendaftar untuk berobat di ruang tunggu. Kepada mereka dibagikan leflet tentang Deteksi Dini Kanker, selanjutnya diberikan penyuluhan dan tanya jawab. Jumlah peserta 40-50 orang."
      
      },
      { id: 2, name: "RS Akademis", img: "2.jpg", 
        price: "1. Nama kegiatan ; Penyuluhan Kanker Nasofaring",
        price2: "2. Waktu kegiatan ; 4 Februari, 10.00 WITA",
        price3: "3. Tempat Kegiatan ; Poliklinik RS Akademis",
        price4: "4. Bentuk kegiatan ; Penyuluhan",
        price5: "5. Penanggung jawab kegiatan ; Dr.dr. Masyita Gaffar, Sp.THTBKL(K)",
        price6: "6. Kerjasama dengan ; RS Akademis",
        price7: "7. Hasil Kegiatan ; Terlaksananya penyuluhan Kanker Nasofaring",
      },
        { id: 3, name: "RS Elim Rantepao Tana Toraja", img: "3.jpg", price:"1. Nama Kegiatan ; Penyuluhan Kesehatan Rumah Sakit" ,
        price2:"2. Waktu kegiatan ; 4 Pebruari 2023" ,
        price3:"3. Tempat Kegiatan ; Ruang tunggu pendaftaran RS. Elim. Rantepao. TORAJA UTARA" ,
        price4:"4. Bentuk kegiatan ; Penyuluhan DETEKSI DINI KANKER THT  dan Tanya jawab " ,
        price5:"5. Penanggung jawab kegiatan ; dr. Tjandra Manukbua. Sp. THT-KL, MH" ,
        price6:"6. Kerjasama dengan ; Team PKRS RS. Elim Rantepao" ,
        price7:"7. Hasil Kegiatan ; telah dilakukan penyuluhan tentang Deteksi Dini Kanker di  Bidang THT kepada para pasien yang mendaftar bersama keluarga pasien yang mengantar. Setelah penyuluhan dilanjutkan dengan tanya jawab dari para audience. Jumlah peserta kurang lebih 100 orang" ,
        },
        { id: 4, name: "RSUD Nabire", img: "4.jpg",
           price: "1. Nama Kegiatan ; Penyuluhan Kesehatan Rumah Sakit",
           price2: "2. Waktu kegiatan ; 6 Pebruari 2023",
           price3: "3. Tempat Kegiatan ; Ruang tunggu pendaftaran RSUD Nabire, Papua Tengah",
           price4: "4. Bentuk kegiatan ; Penyuluhan DETEKSI DINI KANKER THT  dan Tanya jawab ",
           price5: "5. Penanggung jawab kegiatan ; dr. Imelda G. Agus, M.Kes  Sp.THTBKL, dan dr. Semuel B. Patiung, M.Kes, Sp.THTBKL",
           price6: "6. Kerjasama dengan ; Team PKRS RSUD Nabire",
           price7: "7. Hasil Kegiatan ; telah dilakukan penyuluhan tentang Deteksi Dini Kanker di  Bidang THT kepada para pasien yang mendaftar bersama keluarga pasien yang mengantar.Setelah penyuluhan dilanjutkan dengan tanya jawab dari para audience. Jumlah peserta kurang lebih 100 orang",
          },
      { id: 5, name: "RS Enrekang", img: "1.jpg",
         price: "1. Nama Kegiatan ; Penyuluhan dalam rangka WCD", 
         price2: "2. Waktu kegiatan ; Senin, 6 Feb 2023", 
         price3: "3. Tempat Kegiatan ; Rgn tunggu pendaftaran RS Enrekang", 
         price4: "4. Bentuk kegiatan ; penyuluhan", 
         price5: "5. Penanggung jawab kegiatan ; dr. Hasriyanto, Sp.THT", 
         price6: "6. Kerjasama dengan ; SMF Bedah, internship dokter gigi", 
         price7: "7. Hasil : telah dilakukan penyuluhan tentang Deteksi Dini Kanker di  Bidang THT kepada para pasien yang mendaftar bersama keluarga pasien yang mengantar.Setelah penyuluhan dilanjutkan dengan tanya jawab dari paraaudienceJumlah peserta kurang lebih 100 orang", 
      },
      { id: 6, name: "RS Pelamonia", img: "1.jpg",
         price: "1. Nama Kegiatan : Penyuluhan dengan materi waspada kanker THT-KL sejak dini", 
         price2: "2. Waktu kegiatan : Senin 6 Feb 2023", 
         price3: "3. Tempat Kegiatan : Ruang tunggu Poliklinik RS TK II Pelamonia", 
         price4: "4. Bentuk kegiatan : Penyuluhan dengan materi waspada kanker THT-kepala leher sejak dini", 
         price5: "5. Penanggung jawab kegiatan : Dr.dr. Nani I. Djufri, Sp.THTBKL SubSp.Onk (K), FICS", 
         price6: "6. Kerjasama dengan : tim PKRS TK II Pelamonia Makassar", 
         price7: "7. Hasil Kegiatan : telah dilakukan penyuluhan mengenai waspada kanker THT- Kepala Leher sejak dini kepada para Tenaga medis, Pasien serta keluarga pasien yang berada di Ruang tunggu Poliklinik RS TK II Pelamonia, dan dilanjutkan dengan sesi tanya jawab dan diskusi mengenai kapan sebaiknya memeriksakan diri ke dokter dan kapan waktu terbaik dilakukan kontrol dan follow up untuk penderita kanker THT- Kepala Leher", 
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek aoakah ada barang yg sama
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada /cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }

    },


    


    remove(id) {
        const cartItem =  this.items.find((item) => item.id === id);

        // jika item lebih dari 1
        if(cartItem.quantity > 1) {
            // telusuri 1-1
            this.items = this.items.map ((item) => {
                if (item.id !== id) {
                    return item;
                } else {
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;
                }
            })
        } else if (cartItem.quantity === 1) {
            this.items = this.items.filter((item) => item.id !== id);
            this.quantity--;
            this.total -= cartItem.price;
        }
    }
  });
});


// form validation 

const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.disabled = true;

const form = document.querySelector('#checkoutForm');
form.addEventListener('keyup', function() {
for(let i = 0; i < form.elements.length; i++) {
  if(form.elements[i].value.length !== 0) {
    checkoutButton.classList.remove('disabled');
    checkoutButton.classList.add('disabled');
  } else{
    return false;
  }
}
checkoutButton.disabled = false;
checkoutButton.classList.remove('disabled');
});


// kirim data ketika tombol checkout di klik

checkoutButton.addEventListener('click', function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  console.log(objData);
  const message = formatMessage(objData);
  window.open('http://wa.me/+6282129756949?text=' + encodeURIComponent(message));
});


// format pesan whatapp

const formatMessage = (obj) => {
 return `Data customer 
Nama : ${obj.name}
Email : ${obj.email}
No HP : ${obj.phone}
Data pesanan 
${JSON.parse(obj.items).map((item) => `${item.name} (${item.quantity} x ${rupiah(item.total)}) \n`)}
TOTAL : ${rupiah(obj.total)};
Terima kasih.`;
};


// konversi rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};


