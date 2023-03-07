const forms = document.querySelectorAll('form');

const postData = (url, data) => {
    const request = fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: data,
    });
    return request;
};
const bindPostData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // const request = new XMLHttpRequest();
        // request.open("POST", 'server.php')
        // request.setRequestHeader("Content-Type", "application/json");

        const formData = new FormData(form);
        const obj = {};
        formData.forEach((item, name) => {
            obj[name] = item;
        });

        const json = JSON.stringify(obj);

        fetch("server.php", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: json
        }).then(() => {
            alert('Данные успешно отправлены!')
        }).catch((e) => {
            alert('Ошибка!');
        })
    })
}
forms.forEach((item) => {
    bindPostData(item);
});

//////////////////////////////////////////////////////////
const deadline = "2023-5-20";
console.log(new Date(deadline) - new Date());

const getTime = () => {
    const t = new Date(deadline) - new Date();
    days = Math.floor(t / (1000 * 60 * 60 * 24));
    hours = Math.floor(t / (1000 * 60 * 60)% 24);
    minutes = Math.floor(t / (1000 * 60) % 60);
    seconds = Math.floor(t / (1000)% 60);

    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
};

const setClock = (element, deadline) => {
    const elem = document.querySelector(element);
    const days = elem.querySelector("#days");
    const hours = elem.querySelector("#hours");
    const minutes = elem.querySelector("#minutes");
    const seconds = elem.querySelector("#seconds");

    const updateClock = () => {
        const t = getTime(deadline);
        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;
    };

    setInterval(updateClock, 1000);
};

setClock(".timer", deadline);

///////////////////////////////////////////////////////

// class Menu {
//     constructor(img, alt, title, description, price) {
//         this.img = img
//         this.alt = alt
//         this.title = title
//         this.description = description
//         this.price = price;
//     }
//     render() {
//     const wrapper = document.querySelector("#cardWrapper");
//     const elem = document.querySelector("div");
//
//     elem.innerHTML = `
//     <div class="menu__item">-->
//             <img src="${this.img}" alt="${this.alt}">
//             <h3 class="menu__item-subtitle">${this.title}</h3>
//             <div class="menu__item-descr">${this.description}
//         </div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${this.price}</span>сом/день</div>
//         </div>
//     </div>`;
//
//     wrapper.append(elem);
//     }
// }
//
// const getMenu = async (url) => {
//     const result = await fetch(url);
//     return await result.json();
// };
//
// getMenu("db.json").then(data => {
//     data.menu.forEach(({img, alt, title, description, price}) => {
//         new Menu({img, alt, title, description, price});
//     })
// });

