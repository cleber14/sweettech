function shareSite() {
  if (navigator.share) {
    navigator.share({
      title: 'Check out this site!',
      text: 'Take a look at this awesome site:',
      url: window.location.href,
    })
    .then(() => console.log('Thanks for sharing!'))
    .catch((err) => console.log('Error sharing:', err));
  } else {
    alert("Your browser doesn't support sharing 😢");
  }
}
