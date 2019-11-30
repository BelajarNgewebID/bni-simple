<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="Belajar Ngeweb ID, itu tempat buat kamu nambah wawasan soal seluk-beluk website. Mulai dari teknologi, pemrograman, SEO, sampai ke security, semuanya ada.">
    <meta name="keyword" content="tutorial belajar pemrograman website">
    <title>Belajar Ngeweb ID</title>
    <link href="./manifest.json" rel="manifest" />
    <link rel="apple-mobile-web-app-capable" content="yes">
    <link rel="apple-mobile-web-app-status-bar-style" content="default">
    <link rel="apple-mobile-web-app-title" content="Belajar Ngeweb ID">
    <link rel="apple-touch-icon" href="assets/images/icons/120.png">
    <link rel="shortcut icon" href="assets/images/iconsBni.png" type="image/png">
    <link rel="stylesheet" href="assets/fw/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/styles/style.css">
    <link rel="stylesheet" href="assets/styles/index.css">
    <link rel="stylesheet" href="assets/styles/style-mobile.css">
    <style>
        body {
            -webkit-tap-highlight-color: transparent;
            -webkit-touch-callout: none;
        }
    </style>
</head>
<body>
    
<?php
$isNotNested = true;
include './layouts/atas.php';
?>

<div class="container">
    <div class="ilustrasi">
        <img src="./assets/images/webdev.png" alt="Web Developer">
    </div>
    <div class="konten">
        <h2>Semua Tentang Ngeweb Berbahasa ID</h2>
        <div class="action">
            <button id="cta" class="instagram" onclick="cta(this)">ke Instagram</button>
            <div class="ket">
                <div>atau</div>
                <a href="#toAbout" scroll>Lihat selengkapnya</a>
            </div>
        </div>
    </div>
</div>

<div id="toAbout"></div>

<div class="bawah">
    <div class="wrap mt-5 mb-3 about section" id="about">
        <div class="bagi bagi-2 rata-tengah">
            <div class="wrap">
                <h2>Ini apa?</h2>
            </div>
        </div>
        <div class="bagi bagi-2 bg-putih rounded bayangan-5">
            <p class="wrap p-0">
                Belajar Ngeweb ID, itu tempat buat kamu nambah wawasan soal seluk-beluk website. Mulai dari teknologi, pemrograman, SEO, sampai ke security, semuanya ada.
                <br /><br />
                Tak hanya itu, kamu juga bisa berkontribusi membantu sesama pelajar untuk mendapatkan insight baru melalui mengirimkan ide/konsep/topik tentang apa yang ingin kamu bagikan.
            </p>
        </div>
    </div>
    <div class="wraps mt-5 mb-3 toDo section" id="whatYouCanDo">
        <div class="bagi bagi-1 rata-tengah">
            <div class="wrap">
                <h2>Yang bisa kamu lakukan...</h2>
                <div class="bagi bagi-4 detailTodo" onclick="detailTodo(this)" id="todoBelajar">
                    <div class="wrap">
                        <div class="bg-putih rounded bayangan-5 p-2 mt-4 cursorPointer">
                            <div class="ilustrasi bagi lebar-100">
                                <div class="image">
                                    <img src="./assets/images/belajar.png" alt="Belajar" title="Belajar">
                                </div>
                                <h3>Belajar</h3>
                            </div>
                            <div class="keterangan bagi lebar-70 rata-kiri">
                                <h3>Belajar</h3>
                                <p style="line-height: 36px;">
                                    Kamu bisa belajar untuk menambah wawasan kamu di dunia pemrograman web dengan cara mengikuti akun instagram @belajarngewebid.
                                    Di sana akan ada banyak informasi mengenai website yang akan berguna bagi kamu.
                                    <span class="teks-transparan">(klik lagi untuk tutup)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bagi bagi-4 detailTodo" onclick="detailTodo(this)" id="todoKontribusi">
                    <div class="wrap">
                        <div class="bg-putih rounded bayangan-5 p-2 mt-4 cursorPointer">
                            <div class="ilustrasi bagi lebar-100">
                                <div class="image">
                                    <img src="./assets/images/kontribusi.png" alt="Berkontribusi" title="Berkontribusi">
                                </div>
                                <h3>Berkontribusi</h3>
                            </div>
                            <div class="keterangan bagi lebar-70 rata-kiri">
                                <h3>Berkontribusi</h3>
                                <p style="line-height: 36px;">
                                    Agar konten Belajar Ngeweb ID lebih aktif lagi, kamu bisa membantu dan berkontribusi untuk membuat konten yang akan dipublikasikan di Instagram.
                                    <span class="teks-transparan">(klik lagi untuk tutup)</span>
                                </p>
                                <a href="./kontribusi/">Info Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bagi bagi-4 detailTodo" onclick="detailTodo(this)" id="todoBerbagi">
                    <div class="wrap">
                        <div class="bg-putih rounded bayangan-5 p-2 mt-4 cursorPointer">
                            <div class="ilustrasi bagi lebar-100">
                                <div class="image">
                                    <img src="./assets/images/sharing.png" alt="Berbagi" title="Berbagi">
                                </div>
                                <h3>Berbagi</h3>
                            </div>
                            <div class="keterangan bagi lebar-70 rata-kiri">
                                <h3>Berbagi</h3>
                                <p style="line-height: 36px;">
                                    Menemukan konten yang bermanfaat? Kenapa tidak kamu bagikan ke teman-temanmu? Jadilah bermanfaat bagi orang-orang di sekitarmu dengan membagikan konten yang menurut kamu bagus
                                    <span class="teks-transparan">(klik lagi untuk tutup)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bagi bagi-4 detailTodo" onclick="detailTodo(this)" id="todoDonasi">
                    <div class="wrap">
                        <div class="bg-putih rounded bayangan-5 p-2 mt-4 cursorPointer">
                            <div class="ilustrasi bagi lebar-100">
                                <div class="image">
                                    <img src="./assets/images/donasi.png" alt="Donasi" title="Donasi">
                                </div>
                                <h3>Donasi</h3>
                            </div>
                            <div class="keterangan bagi lebar-70 rata-kiri">
                                <h3>Donasi</h3>
                                <p style="line-height: 36px;">
                                    Tidak bisa berkontribusi dengan konten? Kamu bisa membantu para pembuat konten dengan cara memberikan semangat kepada mereka dengan menghargai jerih payahnya membuat konten
                                    <span class="teks-transparan">(klik lagi untuk tutup)</span>
                                </p>
                                <a href="./kontribusi/#donasi">Info Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-oren mt-5 p-1" id="websiteService">
        <div class="wrap">
            <h1>Perlu website untuk menunjang kebutuhanmu?</h1>
            <p>
                Ga pake ngoding-ngoding lagi. Serahkan ke tim BNID. Semua keperluanmu untuk urusan website akan tertangani dengan sempurna.
                <a href="./bikin-website/">
                    <button class="mt-3 putih lebar-100">Selengkapnya</button>
                </a>
            </p>
        </div>
    </div>
    <?php include './layouts/footer.php'; ?>
</div>

<?php include './layouts/menu.php'; ?>

<script src="assets/scripts/scrollKe.js"></script>
<script src="assets/scripts/embo.js"></script>
<script src="assets/scripts/script.js"></script>
<script>
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
        .then(reg => {
            console.log('service worker aktif')
        })
    }
</script>

</body>
</html>