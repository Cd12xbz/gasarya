const btnNo = document.getElementById('btnNo');
const body = document.querySelector('body');

btnNo.addEventListener('mouseover', function() {
    // Mendapatkan ukuran body dan tombol
    const bodyWidth = body.clientWidth;
    const bodyHeight = body.clientHeight;
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;

    // Menghitung posisi baru yang acak
    const newLeft = Math.random() * (bodyWidth - btnWidth);
    const newTop = Math.random() * (bodyHeight - btnHeight);

    // Memindahkan tombol ke posisi baru
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
});