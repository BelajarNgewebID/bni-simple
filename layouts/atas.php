<?php
$imageSource = "./assets/images/iconsBni.png";
if(!file_exists($imageSource)) {
    $imageSource = "../assets/images/iconsBni.png";
}

$link = $isNotNested ? "./" : "../";
?>
<div class="atas">
    <a href="<?= $link; ?>">
        <img src="<?= $imageSource; ?>" alt="Belajar Ngeweb ID" class="icon" />
        <h1>Belajar Ngeweb ID</h1>
    </a>
    <div id="tblMenu" aksi="bkMenu"><i class="fas fa-bars"></i></div>
</div>