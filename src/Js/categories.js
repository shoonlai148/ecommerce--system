const categories=[
    {
        name:'Shoes',
    },
    {  
        name:'Fashion',
    },
    {
        name:'Electronics',
    },
    {
        name:'Accessories',
    }
];
    
const categoriescontainer=document.querySelector('#categories-container');

categories.forEach((category) => {
  
  categoriescontainer.innerHTML += `<a id="category-4" href="#beauty" class="group rounded-xl overflow-hidden bg-gray-50
          hover:shadow-lg transition duration-300">
          <div class="p-4 text-center">
            <h3 class="font-semibold text-gray-900 text-lg">
              ${category.name}
            </h3>
          </div>

        </a>`;

});