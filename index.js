"use strict";

window.onload = () => piano.init();

const piano = {
    element: document.querySelector(".piano"),

    init: function () {
        for (let i = 1; i < 25; i++) {
            const key = document.createElement("div");
            key.classList.add("key");
            key.setAttribute("data-note", `${i < 10 ? `0${i}` : i}`);

            const keyboard_key = this.keyboard[i - 1];
            key.setAttribute("data-key", `${keyboard_key}`);
            key.textContent = keyboard_key;

            this.element.appendChild(key);
            this.keys.push(key);
        }

        this.listen();
    },

    keys: [],

    listen: function () {
        window.addEventListener("keydown", (e) => {
            if (!this.keyboard.includes(e.key)) return;

            const note = this.keys.filter((k) => {
                if (k.getAttribute("data-key") === e.key) return k;
            });

            this.play(note);
        });
        // on click
        for (const key of this.keys) {
            key.addEventListener('click', () => {
                this.play([key])
            })
        }
    },

    play: function (note) {
        const sound = note[0].getAttribute("data-note");
        const key = note[0].getAttribute("data-key");

        // méthode super simple
        const mp3 = new Audio(`24-piano-keys/key${sound}.mp3`);
        document.querySelector(`.key[data-key=${key}]`).classList.add("played");
        mp3.play();
        mp3.addEventListener("ended", () => {
            document
                .querySelector(`.key[data-key=${key}]`)
                .classList.remove("played");
        });

        const key_message = document.querySelector("p.key_message span");
        const sound_message = document.querySelector("p.sound_message span");

        key_message.textContent = key;
        sound_message.textContent = `key${sound}.mp3`;
    },

    display: document.querySelector(".display"),

    keyboard: [
        "a",
        "z",
        "e",
        "r",
        "t",
        "y",
        "u",
        "i",
        "o",
        "p",
        "q",
        "s",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "w",
        "x",
        "c",
        "v",
    ],
};
