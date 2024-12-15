let curlang = "en";
let repaint = document.body.clientWidth <= 728 ? false : true;

document.addEventListener("DOMContentLoaded", function () {
  console.log(curlang);
  if (curlang == "en") {
    loadEN();
  } else if (curlang == "zh") {
    loadZH();
  }
  document
    .getElementById("languageToggle")
    .addEventListener("click", function () {
      const toggle = document.querySelector(".language-toggle");
      if (toggle.classList.contains("zh-active")) {
        toggle.classList.remove("zh-active");
        toggle.classList.add("en-active");
        curlang = "en";
        loadEN();
        translateTitle("en");
      } else {
        toggle.classList.remove("en-active");
        toggle.classList.add("zh-active");
        curlang = "zh";
        loadZH();
        translateTitle("zh");
      }
    });
});
function loadZH() {
  loadNavAuto("zh");
  loadProfile(about_zh);
  loadAwards(repaint, awards_zh);
  const publications_content = document.getElementById("publicationsContent");
  publications_content.innerHTML = "";

  const strongName = "Yunming Liao";
  for (let pub of publications_zh) {
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
  projects_content.innerHTML = "";

  for (let proj of projects_zh) {
    projects_content.appendChild(createItemOfProjects(proj, "zh"));
  }

  const services_content = document.getElementById("servicesContent");
  services_content.innerHTML = "";
  for (let service of services_zh) {
    services_content.appendChild(createItemofService(service));
  }
}

function loadEN() {
  loadNavAuto("en");
  loadProfile(about);
  loadAwards(repaint, awards);
  const publications_content = document.getElementById("publicationsContent");
  publications_content.innerHTML = "";
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
  projects_content.innerHTML = "";
  for (let proj of projects) {
    projects_content.appendChild(createItemOfProjects(proj, "en"));
  }

  const services_content = document.getElementById("servicesContent");
  services_content.innerHTML = "";
  for (let service of services) {
    services_content.appendChild(createItemofService(service));
  }
}

function loadAwards(opt, awards) {
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

const translateTitle = (target) => {
  const h2Elements = document.querySelectorAll("h2");
  let title = target == "zh" ? title_zh : title_en;
  h2Elements.forEach((h2) => {
    h2.innerHTML = h2.innerHTML.replace(
      h2.textContent,
      ` ${title[h2.textContent.trim()]}`
    );
  });
};

const loadNavAuto = (lang) => {
  const sections = document.querySelectorAll("section");
  const nav = document.getElementById("nav");
  nav.innerHTML = "";
  if (lang == "zh") {
    sections.forEach((section) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${section.id}`;
      a.textContent = `${nav_zh[section.id]}`;
      li.appendChild(a);
      nav.appendChild(li);
    });
  } else {
    sections.forEach((section) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `#${section.id}`;
      a.textContent = `${section.id[0].toUpperCase()}${section.id.slice(1)}`;
      li.appendChild(a);
      nav.appendChild(li);
    });
  }
  const navLinks = document.querySelectorAll(".nav-list a");

  let currentActiveIndex = -1;

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

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const navList = document.querySelector(".nav-list");
      navList.classList.remove("open"); // 关闭菜单
    });
  });
};

const loadProfile = (info) => {
  document.getElementById("profileName").innerHTML = info["my_name"];
  document.getElementById("profilePosition").innerHTML = info["position"];
  const profile_company = document.getElementById("profileCompany");
  profile_company.innerHTML = "";
  for (let item of info["company"]) {
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.className = "about-link";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.link = item["link"];
    a.innerText = item["name"];
    p.appendChild(a);
    profile_company.appendChild(p);
  }
  document.getElementById("researchContent").innerText =
    info["research_content"];
  document.getElementById("introduction").innerText = info["introduction"];
  document.getElementById("email").innerText = `${info["email"]}`;
  document.getElementById("google").href = info["google_scholar"];
  document.getElementById("github").href = info["github"];
  document.getElementById("emailLink").href = `mailto:${info["email"]}`;
};

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

function createItemOfProjects(proj, lang) {
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
  type.innerText = `${lang == "zh" ? "类型" : "Type"}:${proj["type"]}`;
  type.style.marginRight = "10px";
  const time = document.createElement("span");
  time.innerText = `${lang == "zh" ? "周期" : "Period"}:${proj["time"]}`;
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

function handleResize() {
  const viewportWidth = document.body.clientWidth;
  if (viewportWidth < 728 && !repaint) {
    loadAwards(repaint, curlang == "zh" ? awards_zh : awards);
    repaint = true;
  } else if (viewportWidth >= 728 && repaint) {
    loadAwards(repaint, curlang == "zh" ? awards_zh : awards);
    repaint = false;
  }
}

window.addEventListener("resize", handleResize);
