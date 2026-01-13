const nearEventsStore = [
  {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w ",
    type: "offline",
    attendees: "99 attendees",
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    type: "offline",
    attendees: "43 attendees",
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: "77 attendees",
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: "140 attendees",
    category: "Social Activities",
    distance: 74,
  },
  {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const filters = [
  {
    type: "day",
    options: [
      "Any date",
      new Date(2024, 2, 13, 11),
      new Date(2024, 2, 14, 11),
      new Date(2024, 2, 14, 20),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 16, 14),
      new Date(2024, 2, 23, 11, 30),
      new Date(2024, 2, 23, 14),
      new Date(2024, 2, 28, 20),
      new Date(2024, 2, 30, 14),
      new Date(2024, 3, 11, 20),
      new Date(2024, 3, 25, 20),
    ],
  },
  { type: "type", options: ["Any type", "offline", "online"] },
  { type: "distance", options: ["Any distance", 25, 50, 75, 100] },
  {
    type: "category",
    options: [
      "Any category",
      "Health and Wellbeing",
      "Social Activities",
      "Business",
      "Technology",
    ],
  },
];

const nearList = document.querySelector(".nearList");

function renderEvents(events) {
  nearList.innerHTML = "";
  events.forEach((item) => {
    const li = document.createElement("li");
    const formattedDate = item.date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    li.classList.add("eventsItem1");
    li.innerHTML = `
      <img class="eventsImg1" src="${item.image}" alt="${item.description}" />
      <div class="eventsInfo1">
        <div class="eventsInfo2">
          <p class="date">${formattedDate}</p>
          <h4 class="eventsTitle">${item.title}</h4>
          <div class="eventsCategory">
            <p class="category">${item.category}</p>
            <p class="distance">(${item.distance} km)</p>
          </div>
          <div class="eventsTypeIcon">
            <svg class="icon-online">
              <use href="assets/icons/sprite.svg#icon-online"></use>
            </svg>
            <p class="type">${item.type}</p>
          </div>
        </div>
        <p class="attendees">${item.attendees ?? ""}</p>
      </div>
    `;
    nearList.appendChild(li);
  });
}

renderEvents(nearEventsStore);

const selectedFilters = {
  day: "Any date",
  type: "Any type",
  distance: "Any distance",
  category: "Any category",
};

const filterBlocks = document.querySelectorAll(".filter");
filterBlocks.forEach((block) => {
  const type = block.dataset.type;
  const list = block.querySelector(".filter-list");

  const filterData = filters.find((f) => f.type === type);

  filterData.options.forEach((option) => {
    const li = document.createElement("li");
    if (option instanceof Date) {
      li.textContent = option.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
      li.dataset.value = option.getTime();
    } else {
      li.textContent = option;
      li.dataset.value = option;
    }
    list.appendChild(li);
  });
});

filterBlocks.forEach((block) => {
  const button = block.querySelector(".filter-btn");
  const list = block.querySelector(".filter-list");

  button.addEventListener("click", () => {
    filterBlocks.forEach((f) => {
      if (f !== block) f.classList.remove("open");
    });
    const isOpen = block.classList.toggle("open");

    if (isOpen && window.innerWidth <= 767) {
      const rect = button.getBoundingClientRect();

      list.style.top = `${rect.bottom + 6}px`;
      list.style.left = `${rect.left}px`;
      list.style.minWidth = `${rect.width}px`;
    }
  });

  list.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const value = li.dataset.value;
    const filterType = block.dataset.type;

    selectedFilters[filterType] = value;

    block.querySelector(".filter-text").textContent = li.textContent;

    block.classList.remove("open");
    applyFilters();
  });
});

function applyFilters() {
  let result = [...nearEventsStore];

  if (selectedFilters.day !== "Any date") {
    result = result.filter(
      (event) => event.date.getTime() === Number(selectedFilters.day)
    );
  }
  if (selectedFilters.type !== "Any type") {
    result = result.filter((event) => event.type === selectedFilters.type);
  }
  if (selectedFilters.distance !== "Any distance") {
    result = result.filter(
      (event) => event.distance <= Number(selectedFilters.distance)
    );
  }
  if (selectedFilters.category !== "Any category") {
    result = result.filter(
      (event) => event.category === selectedFilters.category
    );
  }

  renderEvents(result);
}
