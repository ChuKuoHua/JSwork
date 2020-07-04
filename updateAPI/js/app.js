(function (){
  const obj = {
    data: {
      uuid: 'c7010afc-c576-4a2b-9f0e-5a42977d6066',
      apiPath:'https://course-ec-api.hexschool.io',
      products: [],
    },
    getData(){
      const vm = this;
      const url = `${vm.data.apiPath}/api/${vm.data.uuid}/ec/products`;
      axios.get(url)
      .then(res => {
        vm.data.products = res.data.data;
        vm.render();
      })
      .catch( err => {console.log('資料錯誤',err)});
    },
    render() {
      const vm = this;
      const list = document.getElementById('list');
      const products = vm.data.products;
      let str = '';
      products.forEach(item => {
        str += `
        <div class="card-flex shadow-sm">
          <div class="img-box item-img" style="background-image: url(${ item.imageUrl[0] }">
          </div>
          <div class="card-body">
            <h5 class="card-title ls-1 font-weight-bold">${ item.title }</h5>
            <p class="card-text">${ item.content }</p>
          </div>
          <div class="text-right pr-3 origin-price-f price-m-b">
              NT ${item.origin_price} 元
          </div>
          <div class="text-right pr-3 price-color">
              NT ${item.price} 元
          </div>
          <div class="card-footer border-top-0 bg-white btn-flex">
            <button class="btn ls-1 btn-details btn-sm">
              詳情內容
            </button>
            <button class="btn ls-1 btn-shopping btn-sm">
              加到購物車
            </button>
          </div>
        </div>`;
      });
      list.innerHTML = str;
    }
  };
  obj.getData();
})();