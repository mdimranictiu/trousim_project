function sweet(){
    Swal.fire({
        position: 'middle',
        icon: 'success',
        title: 'Thanks for subscribe',
        showConfirmButton: false,
        timer: 1500
      })
};
function sweet1(){
  Swal.fire({
      position: 'middle',
      icon: 'success',
      title: 'Message Sent Successfully',
      showConfirmButton: true,
      timer: 150,
    })
};
new WOW().init();