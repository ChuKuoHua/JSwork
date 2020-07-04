new Vue({
  el:'#app',
  data:{
    products: [
      {
        id: 1586934917210,
        unit: '個',
        category: '公仔',
        title: '頂上戰爭',
        origin_price: 670,
        price: 420,
        description: '稀有公仔',
        content: '頂上戰爭經典回憶',
        is_enabled: 1,
        imageUrl: 'https://i.imgur.com/rVkiZ4t.jpg',
        options: {
          comments: '極稀有',
        },
      },
      {
        id: 1196934917910,
        unit: '個',
        category: '公仔',
        title: '蛇姬 漢考克',
        origin_price: 760,
        price: 540,
        description: '人人搶著要',
        content: '好想被踢一腳(誤',        
        is_enabled: 0,
        imageUrl: 'https://truth.bahamut.com.tw/s01/202006/10903eab8ddf3140787aeea53b0f8725.JPG',
        options: {
          comments: '',
        },
      },
      {
        id: 1298201545620,
        unit: '片',
        category: '電玩遊戲',
        title: 'ONE PIECE 海賊無雙 4',
        origin_price: 2900,
        price: 1990,
        description: '卓越的遊戲體驗',
        content: '享受各個角色的經典對決',        
        is_enabled: 1,
        imageUrl: 'https://p2.bahamut.com.tw/B/2KU/06/3e2b11e5a54a0c115d47bc492b15ftq5.JPG',
        options: {
          comments: '好像很好玩',
        },
      },   
      {
        id: 1981245561250,
        unit: '個',
        category: '吊飾',
        title: '喬巴鑰匙圈',
        origin_price: 250,
        description: '經典麋鹿',
        content: '可愛的無與倫比',
        price: 120,
        is_enabled: 1,
        imageUrl: 'https://www.books.com.tw/img/N00/034/02/N000340236_t_02.jpg',
        options: {
          comments: '可愛爹斯',
        },
      },
    ],
    listedProduct:{
      imageUrl:[],
      options: {
        comments:'',
      },
    },
  },
  methods:{
    updateProductData(){
      if(this.listedProduct.id){
        const id = this.listedProduct.id;
        this.products.forEach((item,i) => {
          if(item.id === id){
            this.products[i] = this.listedProduct;
          }
        });
        Swal.fire({
          toast: true,
          text: '修改成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          padding: '1em',
          position: 'top',
        });
      }else{
        const id = new Date().getTime();
        this.listedProduct.id = id;
        this.products.push(this.listedProduct);
        Swal.fire({
          toast: true,
          text: '新增成功',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          padding: '1em',
          position: 'top',
        });
      }
      this.listedProduct = {
        imageUrl: [],
        options: {
          comments:'',
        },
      };
      $('#productModal').modal('hide');
    },
    openModel(isNew,item){
      switch (isNew){
        case 'new':
          this.listedProduct = {
            imageUrl: [],
            options: {
              comments:'',
            },
          };
          this.isNew = true;
          $('#productModal').modal('show');
          break;
        case 'edit':
          this.listedProduct = Object.assign({},item);
          this.isNew = false;
          $('#productModal').modal('show');
          break;
        case 'delete':
          $('#delProductModal').modal('show');
          this.listedProduct = Object.assign({},item);
          break;
        default:
          break;
      }
    },
    delProductData(){
      if(this.listedProduct.id){
        const id = this.listedProduct.id;
        this.products.forEach((item, i) =>{
          if(item.id === id){
            this.products.splice(i,1);
            this.listedProduct = {
              imageUrl: [],
              options: {
                comments:'',
              },
            };
          }
          Swal.fire({
            toast: true,
            text: '刪除成功',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            padding: '1em',
            position: 'top',
          });
        });
      }
      $('#delProductModal').modal('hide');
    }
  }
})