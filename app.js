document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list a");
  const sections = document.querySelectorAll(".section");

  // 确保每次点击时只有一个链接是 active
  let currentActiveIndex = -1; // 当前激活的索引

  // 平滑滚动到目标区域并更新 active
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // 阻止默认跳转行为
      const targetId = link.getAttribute("href").substring(1); // 获取 href 中的 id 部分
      const targetSection = document.getElementById(targetId);

      // 确保目标 section 存在
      if (targetSection) {
        // 平滑滚动到目标区域
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start", // 确保目标区域对齐到视口的顶部
        });

        // 查找当前对应的 nav 链接
        const targetIndex = Array.from(navLinks).indexOf(link);

        // 如果当前 active 的链接不是这个新的链接，就更新
        if (currentActiveIndex !== targetIndex) {
          // 移除当前 active
          if (currentActiveIndex !== -1) {
            navLinks[currentActiveIndex].parentElement.classList.remove(
              "active"
            );
          }

          // 添加新的 active
          link.parentElement.classList.add("active");
          currentActiveIndex = targetIndex;
        }
      }
    });
  });

  document.getElementById("researchContent").innerText =
    introduction["research_content"];
  document.getElementById("introduction").innerText =
    introduction["introduction"];
  document.getElementById("email").innerText = `Email:${introduction["email"]}`;
  document.getElementById("google").href = introduction["google_scholar"];
  document.getElementById("github").href = introduction["github"];
  document.getElementById("emailLink").href = `mailto:${introduction["email"]}`;
  const publications_content = document.getElementById("publicationsContent");
  const strongName = "Yunming Liao";
  for (let pub of publications) {
    publications_content.appendChild(
      createItemOfPublications(
        pub["paper"],
        pub["authors"],
        pub["publisher"],
        pub["level"],
        strongName
      )
    );
  }

  const projects_content = document.getElementById("projectsContent");
  for (let proj of projects) {
    projects_content.appendChild(createItemOfProjects(proj));
  }

  const services_content = document.getElementById("servicesContent");
  for (let service of services) {
    services_content.appendChild(createItemofService(service));
  }
});

function loadAwards(opt) {
  const awards_content = document.getElementById("awardsContent");
  awards_content.innerHTML = "";
  if (opt) {
    for (let award of awards) {
      for (const [key, value] of Object.entries(award)) {
        awards_content.appendChild(createItemOfAwards(key, value));
      }
    }
  } else {
    for (let award of awards) {
      for (const [key, value] of Object.entries(award)) {
        awards_content.appendChild(createItemOfAwardsMobile(key, value));
      }
    }
  }
}

let repaint = document.body.clientWidth <= 728 ? false : true;
function handleResize() {
  const viewportWidth = document.body.clientWidth;
  if (viewportWidth < 728 && !repaint) {
    loadAwards(repaint);
    repaint = true;
  } else if (viewportWidth >= 728 && repaint) {
    loadAwards(repaint);
    repaint = false;
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("load", handleResize);

function createItemOfAwards(time, text) {
  // 创建外层容器div
  const containerDiv = document.createElement("div");
  containerDiv.style.display = "flex"; // 使用Flexbox布局
  // containerDiv.style.alignItems = "center"; // 垂直居中
  containerDiv.style.marginBottom = "10px"; // 每个项之间的间距

  // 创建li
  const dot = document.createElement("li");

  // 创建内容部分的容器div
  const contentDiv = document.createElement("div");
  contentDiv.style.display = "flex"; // 使用Flexbox布局
  contentDiv.style.justifyContent = "space-between"; // 两者两端对齐
  contentDiv.style.width = "100%"; // 保证内容区域宽度充满父容器

  // 创建时间部分
  const timeSpan = document.createElement("span");
  timeSpan.className = "card-time";
  timeSpan.innerText = `${time}`;

  // 创建奖项内容部分
  const textSpan = document.createElement("span");
  textSpan.style.color = "black";
  textSpan.textContent = text;

  // 将时间和奖项内容添加到内容容器
  contentDiv.appendChild(textSpan);
  contentDiv.appendChild(timeSpan);

  // 将圆点和内容容器添加到外层容器
  containerDiv.appendChild(dot);
  containerDiv.appendChild(contentDiv);

  return containerDiv;
}

function createItemOfAwardsMobile(time, text) {
  // 创建外层容器div
  const containerDiv = document.createElement("div");
  containerDiv.style.display = "flex"; // 使用Flexbox布局
  // containerDiv.style.alignItems = "center"; // 垂直居中
  containerDiv.style.marginBottom = "10px"; // 每个项之间的间距

  // 创建li
  const dot = document.createElement("li");

  // 创建内容部分的容器div
  const contentDiv = document.createElement("div");
  contentDiv.style.width = "100%"; // 保证内容区域宽度充满父容器

  // 创建时间部分
  const timeSpan = document.createElement("span");
  timeSpan.className = "card-time";
  timeSpan.innerText = `[${time}]`;

  // 创建奖项内容部分
  const textSpan = document.createElement("span");
  textSpan.style.color = "black";
  textSpan.textContent = text;

  // 将时间和奖项内容添加到内容容器
  contentDiv.appendChild(timeSpan);
  contentDiv.appendChild(textSpan);

  // 将圆点和内容容器添加到外层容器
  containerDiv.appendChild(dot);
  containerDiv.appendChild(contentDiv);

  return containerDiv;
}

function createItemOfPublications(
  papername,
  authors,
  publisher,
  level,
  boldName
) {
  const div = document.createElement("div");
  div.style.display = "flex"; // 使用Flexbox布局
  div.style.marginBottom = "10px"; // 每个项之间的间距
  const li = document.createElement("li");
  const card = document.createElement("div");
  const cardTime = document.createElement("span");
  cardTime.className = "card-time";
  cardTime.textContent = `${level}`;

  const cardPaper = document.createElement("span");
  cardPaper.className = "card-paper";
  cardPaper.textContent = `"${papername}"`;

  const cardAuthor = document.createElement("span");
  const authorList = authors.split(", ");
  const formattedAuthors = authorList
    .map((author) => {
      if (author.trim() === boldName) {
        const strong = document.createElement("span");
        strong.style.color = "black";
        strong.style.fontWeight = "bold";
        strong.textContent = author;
        return strong.outerHTML;
      } else {
        return author;
      }
    })
    .join(", ");

  cardAuthor.innerHTML = `${formattedAuthors}.`;
  cardAuthor.style.marginRight = "10px";
  card.appendChild(cardTime);
  card.appendChild(cardAuthor);
  card.appendChild(cardPaper);
  const pubInfo = document.createElement("span");
  // pubInfo.style.color = "#2a9df4";
  pubInfo.innerHTML = `<i>${publisher}</i>`;
  card.appendChild(pubInfo);
  div.appendChild(li);
  div.appendChild(card);
  return div;
}

function createItemOfProjects(proj) {
  const containerDiv = document.createElement("div");
  containerDiv.style.display = "flex"; // 使用Flexbox布局
  containerDiv.style.marginBottom = "10px"; // 每个项之间的间距
  const li = document.createElement("li");
  const div = document.createElement("div");
  const first_div = document.createElement("div");
  const name = document.createElement("span");
  name.innerText = proj["name"];
  name.style.color = "black";
  const funding = document.createElement("span");
  funding.innerText = `[${proj["funding"]}]`;
  funding.style.marginRight = "10px";
  funding.className = "card-time";
  const type = document.createElement("span");
  type.innerText = `Type:${proj["type"]}`;
  type.style.marginRight = "10px";
  const time = document.createElement("span");
  time.innerText = `Period:${proj["time"]}`;
  time.style.marginRight = "10px";
  first_div.appendChild(funding);
  first_div.appendChild(name);
  div.appendChild(first_div);
  div.appendChild(type);
  div.appendChild(time);
  containerDiv.appendChild(li);
  containerDiv.appendChild(div);
  return containerDiv;
}
function createItemofService(service) {
  const containerDiv = document.createElement("div");
  containerDiv.style.display = "flex"; // 使用Flexbox布局
  containerDiv.style.marginBottom = "10px"; // 每个项之间的间距
  const li = document.createElement("li");
  const div = document.createElement("div");
  const type = document.createElement("span");
  type.innerText = `[${service["type"]}]`;
  type.className = "card-time";
  const content = document.createElement("span");
  content.innerText = `${service["name"]}`;
  div.appendChild(type);
  div.appendChild(content);
  containerDiv.appendChild(li);
  containerDiv.appendChild(div);
  return containerDiv;
}
// 切换菜单展开与关闭
function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  navList.classList.toggle("open");
}

// 自动关闭菜单
const navLinks = document.querySelectorAll(".nav-list a");

// 监听每个导航链接的点击事件，点击后关闭菜单
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navList = document.querySelector(".nav-list");
    navList.classList.remove("open"); // 关闭菜单
  });
});
