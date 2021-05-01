"use strict"
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};


const minusBtn = document.querySelectorAll('.minus');
const plusBtn = document.querySelectorAll('.plus');
let totalHuman = document.querySelectorAll('.total__man');

if (minusBtn && plusBtn) {
    for (let i = 0; i < minusBtn.length && i < plusBtn.length; i++) {
        let countHuman = parseInt(totalHuman[i].innerHTML);
        minusBtn[i].addEventListener("click", function(e) {
            if (countHuman > 0) {
                countHuman -= 1;
                totalHuman[i].innerHTML = countHuman;
            }
        });
        plusBtn[i].addEventListener("click", function(e) {
            countHuman += 1;
            totalHuman[i].innerHTML = countHuman;

        });
    };
};


const checkBox = document.querySelectorAll('.check__box');
let checkIcon = document.querySelectorAll('.check__icon');

if (checkBox && checkIcon) {
    for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener("click", function(e) {
            checkIcon[i].classList.toggle('checked');
        });
    };
};



const likeIcons = document.querySelectorAll('.icon-thumbs-o-up');
let likeAmount = document.querySelectorAll('.like-amount');

if (likeIcons && likeAmount) {
    for (let i = 0; i < likeIcons.length && i < likeAmount.length; i++) {
        let likeCounter = parseInt(likeAmount[i].innerHTML);
        likeIcons[i].addEventListener("click", function(e) {
            let toggle = this.classList.toggle('_liked');
            if (toggle) {
                likeCounter += 1;
                likeAmount[i].innerHTML = likeCounter;
                likeIcons[i].classList.add('_liked');
                likeAmount[i].classList.add('_liked');
            } else {
                if (likeCounter > 0) {
                    likeCounter -= 1;
                    likeAmount[i].innerHTML = likeCounter;
                    likeIcons[i].classList.remove('_liked');
                    likeAmount[i].classList.remove('_liked');
                }
            };
        });
    };
};