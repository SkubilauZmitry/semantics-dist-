(() => {
    "use strict";
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = "";
                }));
                document.body.style.paddingRight = "";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
            lockPaddingElements.forEach((lockPaddingElement => {
                lockPaddingElement.style.paddingRight = lockPaddingValue;
            }));
            document.body.style.paddingRight = lockPaddingValue;
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const headerBlankRight = document.querySelector(".header__blank-right");
    const headerBlankLeft = document.querySelector(".header__blank-left");
    const menuLinkVectorRight = document.querySelector(".menu__link-vector-right");
    const menuLinkVectorleft = document.querySelector(".menu__link-vector-left");
    const headerImg = document.querySelector(".header__img");
    const headerInput = document.querySelector(".header__input");
    menuLinkVectorRight.addEventListener("click", (function(event) {
        headerBlankRight.classList.toggle("active");
    }));
    document.addEventListener("click", (function(event) {
        if (!event.target.closest(".header__menu")) headerBlankRight.classList.remove("active");
    }));
    document.addEventListener("keyup", (function(event) {
        if (event.code === "Escape") headerBlankRight.classList.remove("active");
    }));
    menuLinkVectorleft.addEventListener("click", (function(event) {
        headerBlankLeft.classList.toggle("active");
    }));
    document.addEventListener("click", (function(event) {
        if (!event.target.closest(".header__menu")) headerBlankLeft.classList.remove("active");
    }));
    document.addEventListener("keyup", (function(event) {
        if (event.code === "Escape") headerBlankLeft.classList.remove("active");
    }));
    headerImg.addEventListener("click", (function(event) {
        headerInput.classList.toggle("active");
        console.log("DIMA");
    }));
    document.addEventListener("click", (function(event) {
        if (!event.target.closest(".header__image")) headerInput.classList.remove("active");
    }));
    document.addEventListener("keyup", (function(event) {
        if (event.code === "Escape") headerInput.classList.remove("active");
    }));
    window["FLS"] = true;
    menuInit();
})();