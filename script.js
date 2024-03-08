var outsideClick = function (e) {
    var container = document.querySelector(".customDrp");
    if (
        !container.is(e.target) &&
        container.has(e.target).length === 0 &&
        container.is(":visible")
    ) {
        container.classList.remove("active");
        document.addEventListener("click", outsideClick);
    }
};

document.documentElement(function () {
    var customDropDown = document.querySelector(".customDropDown");
    customDropDown.addEventListener("click", function (e) {
        if (e.target.hasClass("crossString") || e.target.hasClass("bowiro")) {
            return false;
        }
        if (e.target.is("a")) {
            return true;
        }

        e.preventDefault();

        console.log(e.target);

        if (
            e.target.hasClass("language") ||
            e.target.parentElement.hasClass("language")
        ) {
            languageFunc();
        }
        if (window.matchMedia("(max-width: 1170px)").matches) {
            document.body.style.overflow = "hidden";
        }
        if (e.target.hasClass("searchCoinDrp")) {
            document.getElementById("tokensearch1").focus();
        }
        if (customDropDown.nextElementSibling(container).length) {
            customDropDown
                .nextElementSibling(container)
                .classList.add("active");
        } else {
            customDropDown.children(container).classList.add("active");
        }

        e.stopPropagation();
        document.addEventListener("click", outsideClick);
    });

    let basic_banner_read_btn = false;
    document
        .querySelector(".basic_banner_read_btn")
        .addEventListener("click", function () {
            if (basic_banner_read_btn == false) {
                document
                    .querySelector(".basic_banner_read_btn")
                    .text("Read Less");
                document.querySelector(".basic_banner_text").slideToggle(500);
                basic_banner_read_btn = true;
            } else {
                document.querySelector(".basic_banner_text").slideToggle(500);
                document
                    .querySelector(".basic_banner_read_btn")
                    .text("Read More");
                basic_banner_read_btn = false;
            }
        });

    document
        .querySelector(".filterToggleBtn")
        .addEventListener("click", function () {
            document.querySelector(".filterToggle").slideToggle("active");
        });

    document
        .querySelector(".hideCustomDrp")
        .addEventListener("click", function () {
            container.classList.remove("active");
        });

    document.querySelector(".closeIcon").addEventListener("click", function () {
        document.querySelector("customPopup").classList.remove("active");
        document.querySelector("commonPopup").classList.remove("active");

        if (
            !document.querySelector(".headerMain").classList.contains("active")
        ) {
            document.body.style.overflow = "auto";
        }
    });

    document
        .querySelector(".mainTable")
        .addEventListener("scroll", function (e) {
            let isScroll = e.currentTarget.scrollLeft;
            if (isScroll) {
                document
                    .querySelector(
                        ".ListingTable th:nth-child(3), td:nth-child(3)"
                    )
                    .classList.add("before");
            } else {
                document
                    .querySelector(
                        ".ListingTable th:nth-child(3), td:nth-child(3)"
                    )
                    .classList.remove("before");
            }
        });
});
