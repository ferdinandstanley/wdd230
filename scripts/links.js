const baseURL = "https://yourgithubusername.github.io/wdd230/"; 
const linksURL = `${baseURL}data/links.json`; 

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const linksContainer = document.querySelector('#activities'); // Change this to match your HTML element ID or class
  linksContainer.innerHTML = ''; // Clear the existing content

  weeks.forEach(week => {
    let weekSection = document.createElement('section');
    let heading = document.createElement('h3');
    heading.textContent = week.week;

    let ul = document.createElement('ul');
    week.links.forEach(link => {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.setAttribute('href', `${baseURL}${link.url}`);
      a.textContent = link.title;
      li.appendChild(a);
      ul.appendChild(li);
    });

    weekSection.appendChild(heading);
    weekSection.appendChild(ul);
    linksContainer.appendChild(weekSection);
  });
}

getLinks();
