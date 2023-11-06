const request = fetch("https://api.msigma.in/btech/v2/branches/");

request.then((response) => response.json())
  .then((data) => {
    console.log(data);
    const courseSet = document.getElementById("course-list");
    for (let i = 0; i <=9; i++) {
            const div = document.createElement("div");
            div.classList.add("div");
            const h3 = document.createElement("h3");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const applyButton = document.createElement("button");
            applyButton.classList.add("button");
    
            const colorList = ["red", "blue", "orange", "green", "violet"];
            const diffColor = colorList[Math.floor(Math.random() * colorList.length)];

            h3.textContent = data.branches[i].short;
            h3.style.color = diffColor;
            p1.textContent = data.branches[i].name;
            applyButton.textContent = "Apply Now";
            applyButton.style.color = diffColor;
            p2.textContent = "Fee starting at ₹799 per subject";
    
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(applyButton);
            div.appendChild(p2);

            courseSet.append(div);
        }
    })
    .catch((error) =>  console.log(error.message));

