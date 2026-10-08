/* Caprate site behavior. Everything works without this file; it adds
   filtering, saved homes, pre-filled email forms, a photo viewer and the map. */
(function () {
  "use strict";
  var META = window.CAPRATE_META || {};
  var UNITS = window.CAPRATE_UNITS || [];
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---- Mobile menu ---- */
  var menuBtn = $(".menu-btn"), mobileNav = $("#mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      var open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
  }

  /* ---- Saved homes (this browser only) ---- */
  var KEY = "caprate_saved";
  function getSaved() { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } }
  function setSaved(ids) { try { localStorage.setItem(KEY, JSON.stringify(ids)); } catch (e) {} }
  function syncSaved() {
    var saved = getSaved().filter(function (id) { return UNITS.some(function (u) { return u.id === id; }); });
    $$("[data-shortlist-count]").forEach(function (el) {
      el.textContent = saved.length ? String(saved.length) : "";
      if (saved.length) el.removeAttribute("data-zero"); else el.setAttribute("data-zero", "");
    });
    $$("[data-save]").forEach(function (b) {
      var on = saved.indexOf(b.getAttribute("data-save")) > -1;
      b.setAttribute("aria-pressed", String(on));
      var label = $("[data-save-label]", b);
      if (label) label.textContent = on ? "Saved" : "Save this home";
    });
    return saved;
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-save]");
    if (!b) return;
    e.preventDefault();
    var id = b.getAttribute("data-save"), saved = getSaved(), i = saved.indexOf(id);
    if (i > -1) saved.splice(i, 1); else saved.push(id);
    setSaved(saved);
    syncSaved();
    if ($("[data-shortlist-grid]")) renderShortlist();
  });

  /* ---- Filters on the homes grid ---- */
  var filterBox = $("[data-filters]");
  if (filterBox) {
    var cards = $$("[data-home-grid] [data-unit]");
    var count = $("[data-filter-count]"), empty = $("[data-empty]");
    var params = new URLSearchParams(location.search);
    $$("[data-filter]", filterBox).forEach(function (sel) {
      var v = params.get(sel.getAttribute("data-filter"));
      if (v != null) sel.value = v;
      sel.addEventListener("change", apply);
    });
    var clear = $("[data-clear-filters]");
    if (clear) clear.addEventListener("click", function () { $$("[data-filter]", filterBox).forEach(function (s) { s.value = ""; }); apply(); });
    function apply() {
      var f = {};
      $$("[data-filter]", filterBox).forEach(function (s) { f[s.getAttribute("data-filter")] = s.value; });
      var shown = 0;
      cards.forEach(function (c) {
        var ok = (!f.beds || (c.dataset.beds !== "" && Number(c.dataset.beds) >= Number(f.beds))) &&
                 (!f.hood || c.dataset.hood === f.hood) && (!f.when || c.dataset.when === f.when);
        c.hidden = !ok; if (ok) shown++;
      });
      count.textContent = shown + " home" + (shown === 1 ? "" : "s");
      empty.hidden = shown > 0;
      var q = new URLSearchParams();
      Object.keys(f).forEach(function (k) { if (f[k]) q.set(k, f[k]); });
      try { history.replaceState(null, "", location.pathname + (q.toString() ? "?" + q : "") + location.hash); } catch (e) {}
    }
    apply();
  }

  /* ---- Shortlist page ---- */
  function slug(u) { return (u.address + " " + (u.unit || "")).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function title(u) { return u.unit ? u.address + ", Unit " + u.unit : u.address; }
  function escH(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function renderShortlist() {
    var grid = $("[data-shortlist-grid]"); if (!grid) return;
    var saved = syncSaved();
    var list = UNITS.filter(function (u) { return saved.indexOf(u.id) > -1; });
    $("[data-shortlist-empty]").hidden = list.length > 0;
    $("[data-shortlist-actions]").hidden = list.length === 0;
    grid.innerHTML = list.map(function (u) {
      var beds = u.beds == null ? "Inquire" : u.beds === 0 ? "Studio" : u.beds + " bed" + (u.beds > 1 ? "s" : "");
      var photo = u.photos && u.photos.length ? '<img src="/photos/' + escH(u.photos[0]) + '" alt="">' : '<div class="photo-ph"><span>' + escH(u.hood) + '</span><small>Photos coming soon</small></div>';
      return '<article class="home-card"><a class="home-card-media" href="/homes/' + slug(u) + '.html" tabindex="-1">' + photo + '</a>' +
        '<button class="save-btn" type="button" data-save="' + escH(u.id) + '" aria-pressed="true" aria-label="Remove ' + escH(title(u)) + '"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9.2-8.6C1.2 8.3 3 5 6.3 5c2 0 3.2 1.1 3.7 2 .5-.9 1.7-2 3.7-2C17 5 18.8 8.3 17.2 11.4 15 15.6 12 20 12 20z" transform="translate(2 0)"/></svg></button>' +
        '<div class="home-card-body"><h3><a href="/homes/' + slug(u) + '.html">' + escH(title(u)) + '</a></h3><p class="facts"><strong>' + beds + '</strong> · ' + escH(u.hood) + ' ' + escH(u.zip) + '</p></div></article>';
    }).join("");
    var mail = $("[data-shortlist-mail]");
    if (mail) {
      var body = "Hi Caprate,\n\nI'd like to ask about these homes:\n\n" + list.map(function (u) { return "• " + title(u) + " (" + u.hood + ") — " + location.origin + "/homes/" + slug(u) + ".html"; }).join("\n") + "\n\nName:\nPhone:\nPaying with (voucher type):\n\nThank you.";
      mail.href = "mailto:" + (META.email || "") + "?subject=" + encodeURIComponent("Saved homes — tour request") + "&body=" + encodeURIComponent(body);
    }
  }
  var clearBtn = $("[data-shortlist-clear]");
  if (clearBtn) clearBtn.addEventListener("click", function () { setSaved([]); renderShortlist(); });
  renderShortlist();
  syncSaved();

  /* ---- Pre-filled email forms ---- */
  $$("[data-mail-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = null;
      $$("[required]", form).forEach(function (el) {
        var ok = el.value.trim() !== "";
        el.setAttribute("aria-invalid", String(!ok));
        if (!ok && !bad) bad = el;
      });
      if (bad) { bad.focus(); return; }
      var kind = form.getAttribute("data-mail-form"), unit = form.getAttribute("data-unit-title");
      var lines = [];
      $$("input, select, textarea", form).forEach(function (el) {
        if (!el.name || !el.value.trim()) return;
        var label = el.closest("label") ? el.closest("label").firstChild.textContent.trim() : el.name;
        lines.push(label + ": " + el.value.trim());
      });
      var subject = kind === "referral"
        ? "Referral — " + (form.elements.voucher ? form.elements.voucher.value : "") + ", " + (form.elements.beds ? form.elements.beds.value : "")
        : unit ? "Inquiry — " + unit : "Housing inquiry";
      var intro = kind === "referral" ? "Referral from the Caprate website:" : unit ? "I'm interested in " + unit + " (" + location.href + ")." : "I'm interested in a Caprate home.";
      location.href = "mailto:" + (META.email || "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(intro + "\n\n" + lines.join("\n") + "\n");
    });
  });

  /* ---- Photo viewer ---- */
  var gallery = $("[data-gallery]");
  if (gallery) {
    var imgs = $$("img", gallery), idx = 0, box = null;
    function show(i) {
      idx = (i + imgs.length) % imgs.length;
      if (!box) {
        box = document.createElement("div");
        box.className = "lightbox"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Photos");
        box.innerHTML = '<img alt=""><button class="lb-close" aria-label="Close">×</button><button class="lb-prev" aria-label="Previous photo">‹</button><button class="lb-next" aria-label="Next photo">›</button><div class="lb-count"></div>';
        box.addEventListener("click", function (e) {
          if (e.target === box || e.target.classList.contains("lb-close")) close();
          else if (e.target.classList.contains("lb-prev")) show(idx - 1);
          else if (e.target.classList.contains("lb-next")) show(idx + 1);
        });
        document.addEventListener("keydown", function (e) {
          if (!box || !box.isConnected) return;
          if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(idx - 1); else if (e.key === "ArrowRight") show(idx + 1);
        });
      }
      $("img", box).src = imgs[idx].src; $("img", box).alt = imgs[idx].alt;
      $(".lb-count", box).textContent = (idx + 1) + " / " + imgs.length;
      if (!box.isConnected) { document.body.appendChild(box); document.body.style.overflow = "hidden"; $(".lb-close", box).focus(); }
    }
    function close() { box.remove(); document.body.style.overflow = ""; }
    gallery.addEventListener("click", function (e) { var b = e.target.closest(".g-item"); if (b) show(Number(b.dataset.index)); });
  }

  /* ---- Print ---- */
  var printBtn = $("[data-print]");
  if (printBtn) printBtn.addEventListener("click", function () { window.print(); });

  /* ---- Overview map: only when units.js has lat/lng for at least one home ---- */
  var mapWrap = $("[data-map]");
  var pinned = UNITS.filter(function (u) { return typeof u.lat === "number" && typeof u.lng === "number"; });
  if (mapWrap && pinned.length) {
    mapWrap.hidden = false;
    var css = document.createElement("link"); css.rel = "stylesheet"; css.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"; document.head.appendChild(css);
    var s = document.createElement("script"); s.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    s.onload = function () {
      var L = window.L, map = L.map("map", { scrollWheelZoom: false });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18, attribution: "© OpenStreetMap contributors" }).addTo(map);
      var pts = pinned.map(function (u) {
        L.circleMarker([u.lat, u.lng], { radius: 9, color: "#12463A", weight: 2, fillColor: "#C4924B", fillOpacity: .95 })
          .addTo(map).bindPopup('<strong>' + escH(title(u)) + '</strong><br>' + escH(u.hood) + '<br><a href="/homes/' + slug(u) + '.html">View home →</a>');
        return [u.lat, u.lng];
      });
      map.fitBounds(pts, { padding: [40, 40], maxZoom: 15 });
    };
    document.body.appendChild(s);
  }
})();
