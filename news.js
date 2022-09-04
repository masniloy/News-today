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
        <h6> ${catagori.category_name} </h6>
        `;
        catagoriContainer.appendChild(addContainer);
    });
}

const allNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => allNewses(data.data));
}

const allNewses = newses => {
    const newsContainer = document.getElementById('newses')
    newses.forEach(news => {
        console.log(news._id);
        const addNews = document.createElement('div');
        addNews.classList.add('news')
        addNews.innerHTML = `
        <div class=" m-5">
            <div class="card mb-3">
            <img src="${news.image_url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.details}</p>

                <section class="d-flex justify-content-between">

                <div class="h-25 w-25 d-flex justify-content-start"> 
                <img src="${news.author.img}" class="card-img-top h-25 w-25" alt="...">
                <p class="card-text m-2"><small class="text-muted">${news.author.name}<br>${news.author.published_date}</small></p>
                </div>

                <div class="h-25 w-25 d-flex justify-content-start">
                <p class="card-text m-2"><small class="text-muted"><i class="fa-solid fa-eye"></i> ${news.total_view}</small></p>
                </div>

                <div class="d-flex justify-content-end">
                <i class="fa-solid fa-caret-down"></i>
                </div>
                </section>
            </div>
        </div>
        `;
        newsContainer.appendChild(addNews);
    });
}

allCatagories();
allNews();