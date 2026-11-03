const categories=[
    {
        id:1,
        name:'Shoes',
        description:'A wide range of shoes from various genres. ',
        image:'https://th.bing.com/th/id/OIP.SSl8qno6YaNfhh5udM07KQAAAA?w=155&h=150&c=6&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    },
    {
        id:2,
        name:'Fashion',
        description:'Fashionable clothing for men,women and children.',
        image:'https://th.bing.com/th/id/OIP._wzkgBNHQ5QuJw8yqx-d4QHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    },
    {
        id:3,
        name:'Electronics',
        description:'Devices and gadgets for everyday use.',
        image:'https://www.bing.com/th/id/OIP.Hq2RByCRrnxX0uo72YlzyQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2',
    },
    {
        id:4,
        name:'Accessories',
        description:'The various type range  of accessories for women and man.',
        image:'https://tse4.mm.bing.net/th/id/OIP.t3B5zBDuIW5SYYHvBARzjQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    }
];
    
const categoriescontainer=document.querySelector('#categories-container');

categories.forEach((category) => {
  
  categoriescontainer.innerHTML += `<a id="category-4" href="#beauty" class="group rounded-xl overflow-hidden bg-gray-50
          hover:shadow-lg transition duration-300">

          <div class="overflow-hidden">
            <img src="${category.image}" alt="${category.name}" class="w-full h-40 sm:h-52 object-cover
                               group-hover:scale-110 transition duration-500">
          </div>

          <div class="p-4 text-center">
            <h3 class="font-semibold text-gray-900 text-lg">
              ${category.name}
            </h3>
            <p class="text-sm text-gray-500 mt-1">
              ${category.description}
            </p>
          </div>

        </a>`;

});