const app = {
    data(){
        return{     
            guitars: [
                {
                    type: 'electric',
                    name: 'ელექტრო გიტარა',
                    id: 0,
                    checked: false
                }, 
                {
                    type: 'bass',
                    name: 'ბას გიტარა',
                    id: 1,
                    checked: false
                }, 
                {
                    type: 'acoustic',
                    name: 'აკუსტიკური გიტარა',
                    id: 2,
                    checked: false
                }, 
                {
                    type: 'classical',
                    name: 'კლასიკური გიტარა',
                    id: 3,
                    checked: false
                },
                {
                    type: 'electric-classical',
                    name: 'ელექტრო-კლასიკური გიტარა',
                    id: 4,
                    checked: false
                },
                {
                    type: 'electric-acoustic',
                    name: 'ელექტრო-აკუსტიკური გიტარა',
                    id: 5,
                    checked: false
                },
                {
                    type: 'accessories',
                    name: 'აქსესუარები',
                    id: 6,
                    checked: false
                },
                {
                    type: 'sound_amplifiers',
                    name: 'ხმის გამაძლიერებლები',
                    id: 7,
                    checked: false
                }
            ],
            products : [
                {
                    type : 'electric',
                    id : 1000, 
                    src : 'img/guitars/electric/1.jpg',
                    name : '3/4 LA Electric Guitar + Miniamp, Sunburst',
                    price : 100
                },
                {
                    type : 'electric',
                    id : 1001, 
                    src : 'img/guitars/electric/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 150
                },
                {
                    type : 'bass',
                    id : 1002, 
                    src : 'img/guitars/bass/1.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 200
                },
                {
                    type : 'bass',
                    id : 1003, 
                    src : 'img/guitars/bass/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 250
                },
                {
                    type : 'acoustic',
                    id : 1004, 
                    src : 'img/guitars/acoustic/1.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 300
                },
                {
                    type : 'acoustic',
                    id : 1005, 
                    src : 'img/guitars/acoustic/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 350
                },
                {
                    type : 'classical',
                    id : 1006, 
                    src : 'img/guitars/classical/1.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 400
                },
                {
                    type : 'classical',
                    id : 1007, 
                    src : 'img/guitars/classical/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 450
                },
                {
                    type : 'classical',
                    id : 1008, 
                    src : 'img/guitars/classical/3.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 500
                },
                {
                    type : 'electric-classical',
                    id : 1009, 
                    src : 'img/guitars/electric-classical/1.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 550
                },
                {
                    type : 'electric-classical',
                    id : 1010, 
                    src : 'img/guitars/electric-classical/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 600
                },
                {
                    type : 'electric-acoustic',
                    id : 1011, 
                    src : 'img/guitars/electric-acoustic/1.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 650
                },
                {
                    type : 'electric-acoustic',
                    id : 1012, 
                    src : 'img/guitars/electric-acoustic/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 700
                },
                {
                    type : 'accessories',
                    id : 1013, 
                    src : 'img/guitars/accessories/1.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 750
                },
                {
                    type : 'accessories',
                    id : 1014, 
                    src : 'img/guitars/accessories/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 800
                },
                {
                    type : 'sound_amplifiers',
                    id : 1015, 
                    src : 'img/guitars/sound_amplifiers/1.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 850
                },
                {
                    type : 'sound_amplifiers',
                    id : 1016, 
                    src : 'img/guitars/sound_amplifiers/2.jpg',
                    name : 'LA Electric Guitar + Amp Pack, Black',
                    price : 900
                }
            
            ]
        }
    },
    methods: {
        toggleRadio(id){
            this.guitars[id].checked = !this.guitars[id].checked;  
        }
    },
    computed: {
        filterProducts(){
            function check(el){
                return el.checked;
            }
            var filtered = [];
            
            for(var i = 0; i < this.guitars.filter(check).length; i++){
                for(var j = 0; j < this.products.length; j++){
                    if(this.guitars.filter(check)[i].type == this.products[j].type){
                        filtered.push(this.products[j]);
                    }
                }
            }
            if(filtered.length == 0){
                return this.products;
            } else {
                return filtered;
            }
            
        }
    }
}

Vue.createApp(app).mount('#main-body');