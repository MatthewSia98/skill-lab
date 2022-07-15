function ExploreTab(props) {
    function selectTab(event) {
        const all = [...document.querySelectorAll(".unselected-tab")];
        all.forEach((e) => {e.className = "unselected-tab"});

        const active = document.querySelector(".selected-tab");
        if (active) active.className = "unselected-tab";

        event.target.className = "selected-tab";

        const carousels = [...document.querySelectorAll(".carousel")];
        for (let i = 0; i < carousels.length; i++) {
            const carousel = carousels[i];
            if (carousel.className.includes(event.target.textContent.replace(/\s/g, ''))) {
                carousel.style.display = "flex";
            } else {
                carousel.style.display = "none";
            }
        }
    }

    const categories = props.categories;
    const tabs = [];
    for (let i = 0; i < categories.length; i++) {
        const currCategory = categories[i];
        if (i === 0) tabs.push(<button className="selected-tab" onClick={selectTab} key={i}>{currCategory}</button>)
        else tabs.push(<button className="unselected-tab" onClick={selectTab} key={i}>{currCategory}</button>);
    }

    return (
        <div className="tabs">
            {tabs}
        </div>
    );
}

export default ExploreTab;