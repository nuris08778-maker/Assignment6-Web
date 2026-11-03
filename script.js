$(document).ready(function () {
  console.log("jQuery is ready!");
  $("#readyChip").text("Task 0: jQuery is ready!");

  $("h1").css("letter-spacing", "-1px");
  $("#intro").css("line-height", "1.8");
  $(".section-title").css({
    borderLeft: "5px solid #6366f1",
    paddingLeft: "12px"
  });

  var themes = {
    light: {
      page: "#f3f5fb",
      text: "#1c2030",
      card: "#ffffff",
      border: "#e2e6f0",
      muted: "#5b647a",
      input: "#ffffff",
      track: "#e6e9f5",
      nav: "rgba(255, 255, 255, 0.85)"
    },
    dark: {
      page: "#0e1120",
      text: "#e7e9f4",
      card: "#171b2e",
      border: "#2a3050",
      muted: "#9aa3c0",
      input: "#0e1120",
      track: "#2a3050",
      nav: "rgba(14, 17, 32, 0.85)"
    }
  };
  var currentTheme = "light";

  function applyTheme(name) {
    var t = themes[name];
    currentTheme = name;
    $("body").css({ backgroundColor: t.page, color: t.text });
    $("nav").css("backgroundColor", t.nav);
    $(".card").css({ backgroundColor: t.card, borderColor: t.border });
    $(".muted").css("color", t.muted);
    $("footer").css("color", t.muted);
    $("input").css({ backgroundColor: t.input, color: t.text, borderColor: t.border });
    $(".result-box").css("backgroundColor", t.input);
    $(".accordion-head").css("borderColor", t.border);
    $(".bar-track").css("backgroundColor", t.track);
  }

  $("#lightBtn").click(function () {
    applyTheme("light");
  });

  $("#darkBtn").click(function () {
    applyTheme("dark");
  });

  var headlines = [
    "Aspiring Front-End Developer",
    "jQuery Enthusiast",
    "Future Full-Stack Engineer"
  ];
  var headlineIndex = 0;

  $("#headlineBtn").click(function () {
    headlineIndex = (headlineIndex + 1) % headlines.length;
    $("#headline").text(headlines[headlineIndex]);
  });

  var greetings = [
    "Hello, I am",
    "<strong>Welcome!</strong> My name is",
    "<em>Nice to meet you!</em> I am"
  ];
  var greetingIndex = 0;

  $("#greetingBtn").click(function () {
    greetingIndex = (greetingIndex + 1) % greetings.length;
    $("#greeting").html(greetings[greetingIndex]);
  });

  var nameStyled = false;

  $("#styleBtn").click(function () {
    nameStyled = !nameStyled;
    if (nameStyled) {
      $("#name").css({ color: "#fde68a", fontSize: "3.4rem" });
    } else {
      $("#name").css({ color: "#ffffff", fontSize: "2.8rem" });
    }
  });

  $("#hideBtn").click(function () {
    $("#status, #facts").hide(400);
  });

  $("#showBtn").click(function () {
    $("#status, #facts").show(400);
  });

  $("#toggleBtn").click(function () {
    $("#status, #facts").toggle(400);
  });

  $("#fadeOutBtn").click(function () {
    $(".gallery img").fadeOut(600);
  });

  $("#fadeInBtn").click(function () {
    $(".gallery img").fadeIn(600);
  });

  $("#fadeToggleBtn").click(function () {
    $(".gallery img").fadeToggle(600);
  });

  $(".frame").click(function () {
    $(this).find("img").fadeToggle(400);
  });

  $(".accordion-head").click(function () {
    $(this).toggleClass("open");
    $(this).next(".panel").slideToggle(300);
  });

  $("#openAllBtn").click(function () {
    $(".panel").slideDown(300);
    $(".accordion-head").addClass("open");
  });

  $("#closeAllBtn").click(function () {
    $(".panel").slideUp(300);
    $(".accordion-head").removeClass("open");
  });

  var barsOpen = false;

  function createBar(skill, level) {
    var row = $("<div class='bar-row'></div>");
    var label = $("<div class='bar-label'></div>");
    label.append($("<span></span>").text(skill));
    label.append($("<span class='bar-percent'></span>").text(barsOpen ? level + "%" : "0%"));
    var track = $("<div class='bar-track'></div>");
    track.css("backgroundColor", themes[currentTheme].track);
    var fill = $("<div class='bar-fill'></div>");
    fill.attr("data-level", level);
    fill.css("width", barsOpen ? level + "%" : "0%");
    track.append(fill);
    row.append(label, track);
    return row;
  }

  function randomLevel() {
    return Math.floor(Math.random() * 51) + 40;
  }

  function showMessage(text) {
    $("#skillMessage").stop(true, true).text(text).fadeIn(200).delay(2000).fadeOut(400);
  }

  function readSkill() {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      showMessage("Please enter a skill first!");
      $("#skillInput").focus();
      return null;
    }
    return skill;
  }

  $("#skillList li").each(function () {
    var item = $(this);
    $("#skillBars").append(createBar(item.text(), item.attr("data-level")));
  });

  $("#addSkillBtn").click(function () {
    var skill = readSkill();
    if (skill === null) {
      return;
    }
    $("#skillList").append($("<li></li>").text(skill));
    $("#skillBars").append(createBar(skill, randomLevel()));
    $("#skillInput").val("").focus();
  });

  $("#prependSkillBtn").click(function () {
    var skill = readSkill();
    if (skill === null) {
      return;
    }
    $("#skillList").prepend($("<li></li>").text(skill));
    $("#skillBars").prepend(createBar(skill, randomLevel()));
    $("#skillInput").val("").focus();
  });

  $("#removeSkillBtn").click(function () {
    if ($("#skillList li").length === 0) {
      showMessage("There are no skills left to remove.");
      return;
    }
    $("#skillList li:last").remove();
    $("#skillBars .bar-row:last").remove();
  });

  $("#skillInput").keydown(function (event) {
    if (event.which === 13) {
      $("#addSkillBtn").click();
    }
  });

  var links = [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com" },
    { name: "Personal Website", url: "https://example.com" }
  ];
  var linkIndex = 0;

  $("#linkBtn").click(function () {
    linkIndex = (linkIndex + 1) % links.length;
    var item = links[linkIndex];
    $("#socialLink").attr({ href: item.url, title: item.url }).text(item.name);
    $("#linkUrl").text(item.url);
  });

  $("#liveForm").on("submit", function (event) {
    event.preventDefault();
  });

  $("#nameInput").on("input", function () {
    $("#outName").text($(this).val() || "...");
  });

  $("#emailInput").on("input", function () {
    $("#outEmail").text($(this).val() || "...");
  });

  function updatePercent(fill) {
    var percent = Math.round((fill.width() / fill.parent().width()) * 100);
    fill.closest(".bar-row").find(".bar-percent").text(percent + "%");
  }

  $("#animateBtn").click(function () {
    $(".bar-fill").each(function () {
      var fill = $(this);
      var width = barsOpen ? 0 : fill.attr("data-level");
      fill.stop(true).animate({ width: width + "%" }, {
        duration: 1500,
        step: function () {
          updatePercent(fill);
        },
        complete: function () {
          fill.closest(".bar-row").find(".bar-percent").text(width + "%");
        }
      });
    });
    barsOpen = !barsOpen;
  });

  $("nav a").click(function (event) {
    event.preventDefault();
    var target = $($(this).attr("href"));
    var top = target.attr("id") === "top" ? 0 : target.offset().top - 70;
    $("html, body").stop(true).animate({ scrollTop: top }, 600);
  });

  applyTheme("light");
});
