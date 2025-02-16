document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("directory-container");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");

    let members = [];

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            members = data;
            displayMembers(members, "grid");
        });

    function displayMembers(members, view) {
        container.innerHTML = "";
        container.className = view + "-view";

        members.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            card.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">${member.website}</a>
                <p class="membership-level">${member.membership} Member</p>
            `;

            container.appendChild(card);
        });
    }

    gridViewBtn.addEventListener("click", () => displayMembers(members, "grid"));
    listViewBtn.addEventListener("click", () => displayMembers(members, "list"));
});
