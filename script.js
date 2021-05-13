let En = ["https://scx2.b-cdn.net/gfx/news/2020/thepangolint.jpg", "https://cdn.britannica.com/72/176572-131-0C4617E7/Snow-leopards-skulls-eye-orbits-cats.jpg", "https://cosmosmagazine.com/wp-content/uploads/2020/02/190115-manatee-full-1440x960.jpg"];
for (let Ed of En) {
    $(".gallery").append("<img src=" + Ed + ">");
}

$(".add").click(function(){
  $("img").hide();
    let Em = $(".picture-url").val();
    En.push("Em");
});
