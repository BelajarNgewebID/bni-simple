<?php

$link = $isNotNested ? "./" : "../";

?>
<div class="menu">
    <div class="wrap">
        <div id="xMenu"><i class="fas fa-times"></i></div>
        <a href="<?= $link; ?>tentang"><li>Tentang</li></li></a>
        <a href="<?= $link; ?>kontribusi"><li>Berkontribusi</li></li></a>
        <a href="<?= $link; ?>faq"><li>FAQ</li></a>
        <a href="https://www.instagram.com/belajarngewebid">
            <button class="instagram teks-putih mt-4" style="width: 200px;height: 60px;">ke Instagram</button>
        </a>
    </div>
</div>