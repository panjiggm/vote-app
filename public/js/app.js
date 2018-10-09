let vote1 = "name=paslon-satu";
let vote2 = "name=paslon-dua";
let vote3 = "name=paslon-tiga";
let vote4 = "name=paslon-empat";

// play sound


document.querySelector('.btn1').addEventListener('click', function(){
  fetch('http://192.168.43.176:5432/vote/', {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: vote1
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

  setTimeout(function() {
      window.location="http://localhost:4321/success";
  }, 4000);
});

document.querySelector('.btn2').addEventListener('click', function(){
  fetch('http://192.168.43.176:5432/vote/', {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: vote2
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

  setTimeout(function() {
      window.location="http://localhost:4321/success";
  }, 4000);
});

document.querySelector('.btn3').addEventListener('click', function(){
  fetch('http://192.168.43.176:5432/vote/', {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: vote3
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

  setTimeout(function() {
      window.location="http://localhost:4321/success";
  }, 4000);
});

document.querySelector('.btn4').addEventListener('click', function(){
  fetch('http://192.168.43.176:5432/vote/', {
    method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    },
    body: vote4
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });

  setTimeout(function() {
      window.location="http://localhost:4321/success";
  }, 4000);
});
