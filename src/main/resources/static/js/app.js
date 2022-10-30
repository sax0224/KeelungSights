const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const btn4 = document.getElementById("btn4")
const btn5 = document.getElementById("btn5")
const btn6 = document.getElementById("btn6")
const btn7 = document.getElementById("btn7")

let e = document.querySelector('.btn').addEventListener('click', getData);

let data_json = '[{"sightName":"七堵鐵道紀念公園(舊七堵前站)","zone":"七堵區","category":"歷史古蹟","photoURL":"https://photo.travelking.com.tw/scenery/4AFA133B-DAC2-4B19-AE9D-3670B2CDEF85_e.jpg","description":"七堵鐵道紀念公園─關於七堵前站 七堵前站舊稱「七堵驛」，在1972年七堵調車場啟用之後被分軌並拆為前、後站，屬於前站的七堵驛僅停靠北上至基隆及宜蘭之列車，並設有一座島式月台，後於2007年停用並移交予基隆市文化局管理；而七堵前站的舊站房建於日治時期，雖查無正式的建造年代，但從外觀上可判斷該房舍為和洋混合建築，並有日式屋舍樣式之配置。 七堵鐵道紀念公園介紹 停用後的七堵前站在基隆市文化局的評估後，選於原址北方數公尺處興建為鐵道公園，除設有石碑及火車意象外，更將拆下後仔細編號的原舊站體建材，並增添少許新建材後忠實重組，再將原淺綠色塗裝的外牆改漆為白色，並保留營運時所使用的中、英文站名以及鐵路局標誌燈箱，後方月台並放置四種不同型號的小型貨櫃車，讓佔地不大的七堵鐵道紀念公園，保有地方文化特色亦成為基隆旅遊、休憩的景點之一。 \uD83D\uDC81 提醒您：參觀車站或鐵道風情請注意當地告示及遵照車站管理人員指示，並請勿逗留或行走於未開放觀光之鐵路上，以免觸法或危及生命安全。 隋編 【大眾運輸】 搭乘台鐵列車於七堵車站下車，自東出口出站，步行經基隆商工前左轉車行地下道人行步道(約200公尺)，地下道出口即為七堵鐵道紀念公園。","address":"基隆市七堵區光明路23號"},{"sightName":"六堵險圳步道","zone":"七堵區","category":"風景區","photoURL":"https://photo.travelking.com.tw/scenery/ED587EC9-D690-45FD-92E9-35B35852CE83_e.jpg","description":"旅遊王編輯組 【大眾運輸】 搭乘台鐵列車於七堵站下車，由光明路出口出站後往左步行光明路，約10-15分鐘於泰安路口即可見步道入口。","address":"基隆市七堵區明德一路旁臨河人行步道"},{"sightName":"泰安瀑布","zone":"七堵區","category":"風景區","photoURL":"https://photo.travelking.com.tw/scenery/E97B704A-5067-4713-9C4C-C4D411D75521_e.jpg","description":"泰安瀑布位於七堵南方的草濫山區，又稱草濫山瀑布，因過去交通不便，反而保留了純樸自然的景色，原規劃有烤肉區、露營區、戲水區及環山步道，現今已調整為賞花區、涼亭區、觀瀑廣場、休憩廣場並設有公廁，賞花區種植大片杜鵑，盛開時紅白相間美不勝收，不失為賞花秘境。 自瀑布入口進入後，分成二條林蔭步道，左側步道沿溪闢建，略具原始叢林面貌；若自入口循右側步道，不需10分鐘即可抵泰安瀑布，屬拔西猴溪上遊的泰安瀑布，高約20公尺，自山壁傾瀉而下聚成一泓清潭，夏季瀑布水量較少，可見親子同行戲水；沿著瀑布旁的環山步道繞行草濫山一周，還可做一次有身心健康的森林浴，享受茂林修竹的自然清新。 旅遊王編輯組 【自行開車】 自台北行駛台5線至南七堵，轉南七堵地下道、沿泰安路前行即可到達泰安瀑布。 【大眾運輸】 火車轉公車： 搭乘台鐵至七堵站下車，出站後步行至自治街轉搭「706」路公車至「泰安路186-1號」下車，循泰安路步行約1.4公里(約20分鐘)即可抵達泰安瀑布入口","address":"基隆市七堵區泰安路"},{"sightName":"富民親水公園(瑪西桐花步道)","zone":"七堵區","category":"公園","photoURL":"https://photo.travelking.com.tw/scenery/41C4B0BD-88E5-44E8-83A6-F5118FA41BD9_e.jpg","description":"富民親水公園位於基隆市七堵區瑪陵坑休閒遊憩區內，公園裡有瑪陵坑溪流經，一旁即是親水區，適合舉家大小前往休閒、戲水，公園內另有一條約850公尺的瑪西桐花步道，每年4~5月桐花季節雪白小花綻放，為山區增添美感。 客家桐花祭提供各縣市賞桐步道、桐花祭活動訊息與住宿訂房 https://www.travelking.com.tw/tourguide/tung-hakka/ 潘怡樺 撰文 【自行開車】 國道3號瑪東系統交流道(瑞芳/大埔)出口下交流道，行駛東西向快速公路萬里瑞濱線(台62)，於七堵一交流道出口下，朝七安產業道路/大同街方向前進，右轉大華二路並接續行駛至大華三路即可抵達。 【大眾運輸】 搭乘基隆市公車〔701〕路於「大華三路100號」下車即可抵達。","address":"基隆市七堵區瑪陵坑大華三路"}]';

function addData(response){
  console.log("addData")
  result = "";
  // data = JSON.parse(data_json);
  for(var i = 0;i<response.length;i++){
    // console.log(data[i])
    content = `
    <div class="col-md-4">
      <div class="card">
          <div class="card-body">
              <h5 class="card-title mb-3">${response[i]['sightName']}</h5>
              <p class="card-text">景點區域: ${response[i]['zone']}</p>
              <p class="card-text">景點類別: ${response[i]['category']}</p>
              <p>
              <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapseExample">
              詳細資訊
              </button>
            </p>
              <div class="collapse" id="collapse${i}">
                  <div class="card card-body">
                  ​<picture>
                  <img src="${response[i]['photoURL']}" class="card-img-top mb-4" width="100%" height="300px">
                  ​</picture>
                  <p class="card-text">景點地址: <a target="_blank" href=${response[i]['addressURL']}>${response[i]['address']}</a></p>
                  <p class="card-text">景點介紹: ${response[i]['description']}</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
    `
    result += content;
  }
  document.getElementById('content').innerHTML = result;
}

function getData(e){
    let zone = e.target.innerText
    zone = zone.substr(0,2)
    console.log(e)
    console.log(zone);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', `/SightAPI?zone=${zone}`, true);

    xhr.onload = function() {
      if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response)
        addData(response)
        if(response.type === 'success') {
          console.log("success")
          addData(response)
        } else {
          console.log("Not success")
        }
      }
    }
  
    xhr.send();
  
    e.preventDefault();

}