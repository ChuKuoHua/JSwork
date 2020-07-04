document.querySelector('#get').addEventListener('click', getData);
document.querySelector('#post').addEventListener('click', postData);
document.querySelector('#patch').addEventListener('click', patchData);
document.querySelector('#delete').addEventListener('click', deleteData);

var uuid = 'c7010afc-c576-4a2b-9f0e-5a42977d6066';
var token = 'gy0eMTpdLVYbjUSeD2lkNPjEuvYelGpdDpoybgnHNStwel6BD3LLOxMbzzQ4';
var apiPath = 'https://course-ec-api.hexschool.io/';

// 小心，有錯～，請參考課程影片
var sampleData = {
  title: '好茶',
  category: 'tea',
  content: '內容',
  imageUrl: [
    'https://images.unsplash.com/photo-1587918515749-a2a68b40a124?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
  ],
  enabled: true,
  origin_price: 100,
  price: 90,
  unit: '杯',
}

axios.defaults.headers['Authorization'] = `Bearer ${token}`;
// axios 設定說明：https://github.com/axios/axios#config-defaults

function getData() {
  var url = `${apiPath}api/${uuid}/admin/ec/products`
  axios.get(url)
    .then(function (res) {
      console.log(res);   
    })
}

function postData() {
  console.log('postData');
  var url = `${apiPath}api/${uuid}/admin/ec/product`
  var commodity = {
    title: 'Arctic Hunter',
    category: '山用背包',
    content: '強大的背負透氣，立體鞋倉設計，讓你登山沒有顧慮',
    description:'描述',
    imageUrl: [
      'https://upload.cc/i1/2020/06/27/VaNenP.jpg'
    ],
    enabled: true,
    origin_price: 100,
    price: 90,
    unit: '個',
  }
  axios.post(url,commodity)
    .then(function (res) {
      console.log(res);   
    })
}

function patchData() {
  console.log('patchData');
  
}

function deleteData() {
  console.log('deleteData');
  var url = `${apiPath}api/${uuid}/admin/ec/product/kLkpg9WG2aSX1JXP2JYJuFJUKlbIyG3ilACIyPlU0WEyXKvOkhx3KZvknG9txQ5t`
  axios.delete(url)
    .then(function (res) {
      console.log(res);
    })
}


