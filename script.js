fetch("https://coding-week-2024-api.onrender.com/api/data")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    let t1="";
    let v1=data[0];
    t1=`<img src="${v1.image}" class="ima"></h1>
    <div class="imal11">Featured</div> <div class="imal12">${v1.type}</div>
    <div class="imal13">${v1.headline}<div>
    <div class="imal14">${v1.date}</div>
    <div class="imal15>${v1.author}</div>
    `;
    document.getElementById(String("1")).innerHTML=t1;
    let v2=data[1];
    let t2=`<img src="${v2.image}" alt="" class="imb">
    <div class="imbl11">Featured</div> <div class="imbl12">${v2.type}</div>
    <div class="imbl13">${v2.headline}</div>
    <div class="imbl14">${v2.date}</div>
    <div class="imbl15>${v2.author}</div>
    `;
    document.getElementById(String("2")).innerHTML=t2;
    let v3=data[2];
    let t3=`<img src="${v3.image}" alt="" class="im2">
    <div class="imc11">Featured</div> <div class="imc12">${v3.type}</div>
    <div class="imc13">${v3.headline}</div>
    <div class="imc14">${v3.date}</div>
    <div class="imc15">${v3.author}</div>
    `;
    document.getElementById(String("3")).innerHTML=t3;
    let v4=data[3];
    let t4=`<img src="${v4.image}" alt="" class="im3">
    <div class="im311">Featured</div> <div class="im312">${v4.type}</div>
    <div class="im313">${v4.headline}</div>
    <div class="im314">${v4.date}</div>
    <div class="im315">${v4.author}</div>
    `;
    document.getElementById(String("4")).innerHTML=t4;
    let v5=data[4];
    let t5=`<img src="${v5.image}" alt="" class="image"> 
    <div class="t1">${v5.headline}</div>
    <div class="t2">${v5.date}</div>
    `;
    document.getElementById(String("5")).innerHTML=t5;
    let v6=data[5];
    let t6=`<img src="${v6.image}" alt="" class="image1">
    <div class="t11">${v6.headline}</div>
    <div class="t12">${v6.date}</div>`;
    document.getElementById(String("6")).innerHTML=t6;
    let v7=data[6];
    let t7=`<img src="${v7.image}" alt="" class="image2">
    <div class="t21">${v7.headline}</div>
    <div class="t22">${v7.date}</div>`;
    document.getElementById(String("7")).innerHTML=t7;
    let v8=data[7];
    let t8=`<img src="${v8.image}" alt="" class="image3">
    <div class="t31">${v8.headline}</div>
    <div class="t32">${v8.date}</div>`;
    document.getElementById(String("8")).innerHTML=t8;
    let v9=data[8];
    let t9=`<img src="${v9.image}" alt="" class="image4">
    <div class="t41">${v9.headline}</div>
    <div class="t42">${v9.date}</div>`;
    document.getElementById(String("9")).innerHTML=t9;
    let v10=data[9];
    let t10=`<img src="${v10.image}" alt="" class="image5">
    <div class="t51">${v10.headline}</div>
    <div class="t52">${v10.date}</div>`;
    document.getElementById(String("10")).innerHTML=t10;
  })
  .catch((error) => console.error("FETCH ERROR:", error));



