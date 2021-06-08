# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Teksts būs paslēpts, jo indeksa fails, no kura lapa ir ielādēta, nav mainījies.

---

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Funkcija `window.addEventListener("load", function(){` (and the closing `})`) from **global.js** aktivīzē skriptu.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

AddEventListener () method piešķir notikumu apstrādātāju elementam, nepārrakstot esošos notikumu apstrādātājus. Jūs varat pievienot daudzus notikumu apstrādātājus vienam elementam.
