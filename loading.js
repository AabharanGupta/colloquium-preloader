const paths = document.querySelectorAll(".loader path");
for (let i = 0; i < paths.length; i++) {
  console.log(`Letter ${i} is ${paths[i].getTotalLength()}`);
}
