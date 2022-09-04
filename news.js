

const allCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => allcatagori(data.data.news_category));
}

const allcatagori = catagories => {
    const catagoriContainer = document.getElementById('catagories')
    catagories.forEach(catagori => {
        console.log(catagori.category_name);
        const addContainer = document.createElement('div');
        addContainer.classList.add('catagori')
        addContainer.innerHTML = `
        <h6 onclick="allNews('${catagori.category_id}')"> ${catagori.category_name} </h6>
        `;
        catagoriContainer.appendChild(addContainer);

    });
}




const allNews = (code) => {
    fetch('https://openapi.programming-hero.com/api/news/category/' + code)
        .then(res => res.json())
        .then(data => allNewses(data.data));
}

const allNewses = newses => {
    const newsContainer = document.getElementById('newses');
    newsContainer.innerHTML = ``;
    var count = 0;
    newses.forEach(news => {
        count++;
        const addNews = document.createElement('div');
        addNews.classList.add('news')
        addNews.innerHTML = `

        <div onclick="forModat('${news._id}')" class="card mb-3 mt-3" style="max-width: 100%;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0, 200)}</p>
        <section class="d-flex justify-content-between">
                <div class="h-25 w-25 d-flex justify-content-start align-items-center">
                    <img src="${news.author.img}" class="card-img-top h-25 w-25" alt="...">
                    <p class="card-text m-2 h-25 w-100"><small
                            class="text-muted">${news.author.name}<br>${news.author.published_date}</small></p>
                </div>
                <div class="h-25 w-25 d-flex justify-content-start align-items-center">
                    <p class="card-text m-2"><small class="text-muted"><br><br><i class="fa-solid fa-eye"></i>
                            ${news.total_view}</small></p>
                </div>
                
            </section>
      </div>
    </div>
  </div>
</div>
        `;
        newsContainer.appendChild(addNews);
    });
    const countValue = document.getElementById('count');
    countValue.innerHTML = `
    <p><b> ${count} </b> items found for category Entertainment </p>
    `

}

const forModat = (mCode) => {
    console.log(mCode);
    const url = (`https://openapi.programming-hero.com/api/news/${mCode}`);
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => modal(data.data[0]));
}



const modal = mod => {
    console.log(mod.details);
    const checkModal = document.getElementById('modal')

    // const addModal = document.createElement('div')
    // addModal.classList.add('modal')
    checkModal.innerHTML = `
    <div  class=" mt-5 mb-5" style="max-width: 100%;">
        <div class="card mb-3">
        <img src="${mod.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${mod.title}</h5>
            <p class="card-text">${mod.details}</p>
        </div>
        </div>
    `;

    checkModal.append(addModal);


}




allCatagories();
allNews();