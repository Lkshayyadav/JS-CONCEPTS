  const inp = document.querySelector("input");
        const sp = document.querySelector("span");

        inp.addEventListener("input", function () {
            const left = 20 - inp.value.length;
            sp.textContent = left;

            if (left < 0) {
                sp.style.color = "red";
            } else {
                sp.style.color = "white";
            }
        });