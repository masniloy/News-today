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

// const trying = (code) => {
//     console.log('https://openapi.programming-hero.com/api/news/category/' + code);
// }



const allNews = (code) => {
    fetch('https://openapi.programming-hero.com/api/news/category/' + code)
        .then(res => res.json())
        .then(data => allNewses(data.data));
}

const allNewses = newses => {
    const newsContainer = document.getElementById('newses');
    newsContainer.innerHTML = ``;
    newses.forEach(news => {
        const addNews = document.createElement('div');
        addNews.classList.add('news')
        addNews.innerHTML = `
        <div  class=" m-5">
        <div onclick="forModat('${news._id}')" class="card mb-3">
        <img src="${news.image_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details.slice(0, 200)}</p>
            <section class="d-flex justify-content-between">
                <div class="h-25 w-25 d-flex justify-content-start">
                    <img src="${news.author.img}" class="card-img-top h-25 w-25" alt="...">
                    <p class="card-text m-2"><small
                            class="text-muted">${news.author.name}<br>${news.author.published_date}</small></p>
                </div>
                <div class="h-25 w-25 d-flex justify-content-start">
                    <p class="card-text m-2"><small class="text-muted"><i class="fa-solid fa-eye"></i>
                            ${news.total_view}</small></p>
                </div>
                
            </section>
        </div>
        </div>
        `;
        newsContainer.appendChild(addNews);
    });
}

const forModat = (mCode) => {
    console.log(mCode);
    const url = (`https://openapi.programming-hero.com/api/news/${mCode}`);
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => modal(data.data));
}



const modal = mod => {
    console.log(mod);
    const checkModal = document.getElementById('modal')
    const addModal = document.createElement('div')
    addModal.classList.add('modal-dialog')
    addModal.innerHTML = `
    <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
    </div>                     
    `;

}




allCatagories();
allNews();