(() => {
  "use strict";

  const content = window.SITE_CONTENT;
  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  const escapeSvg = escapeHtml;

  if (!content) {
    document.body.innerHTML =
      '<p class="load-error">页面内容加载失败，请刷新后重试。</p>';
    return;
  }

  const setText = (selector, value) => {
    const element = $(selector);
    if (element) element.textContent = value || "";
  };

  const isSafeHref = (href) => {
    if (!href || typeof href !== "string") return false;
    const trimmed = href.trim();
    if (trimmed.startsWith("#")) return true;

    try {
      const url = new URL(trimmed, window.location.href);
      return ["https:", "http:"].includes(url.protocol) || url.origin === window.location.origin;
    } catch {
      return false;
    }
  };

  const createLink = (action, className = "button") => {
    if (!action || !isSafeHref(action.href)) return "";
    const target = action.href.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
    const ariaLabel = action.ariaLabel
      ? ` aria-label="${escapeHtml(action.ariaLabel)}"`
      : "";
    return `<a class="${className}" href="${escapeHtml(action.href)}"${target}${ariaLabel}>${escapeHtml(
      action.label,
    )}</a>`;
  };

  const createStudyFigure = (figure, className) => {
    if (!figure || !isSafeHref(figure.src)) return "";
    const width = Number.parseInt(figure.width, 10);
    const height = Number.parseInt(figure.height, 10);
    const sizeAttributes =
      Number.isSafeInteger(width) &&
      Number.isSafeInteger(height) &&
      width > 0 &&
      height > 0
        ? ` width="${width}" height="${height}"`
        : "";
    const figureName = figure.caption || figure.alt || "图片";
    return `
      <figure class="${className}">
        <img src="${escapeHtml(figure.src)}" alt="${escapeHtml(figure.alt || "")}"${sizeAttributes} loading="lazy" decoding="async" />
        <figcaption>
          ${figure.caption ? `<span>${escapeHtml(figure.caption)}</span>` : ""}
          <a class="figure-link" href="${escapeHtml(figure.src)}" target="_blank" rel="noreferrer" aria-label="在新标签页查看${escapeHtml(figureName)}的原图">查看原图</a>
        </figcaption>
      </figure>`;
  };

  const renderNavigation = () => {
    const nav = $("#site-nav");
    nav.innerHTML = content.navigation
      .map(
        (item) =>
          `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`,
      )
      .join("");
  };

  const renderHero = () => {
    const { site } = content;
    document.title = site.title;
    setText("#brand-name", site.shortTitle || site.title);
    setText("#site-kicker", site.kicker);
    setText("#site-title", site.title);
    setText("#site-description", site.description);
    setText("#footer-note", site.footerNote);
    $("#hero-members").innerHTML = (site.members || [])
      .map((member) => `<li>${escapeHtml(member)}</li>`)
      .join("");
    $("#hero-actions").innerHTML = [
      createLink(site.primaryAction, "button button-primary"),
      createLink(site.secondaryAction, "button button-quiet"),
    ].join("");
  };

  const renderResearchTypes = () => {
    const { researchTypes } = content;
    setText("#research-types-kicker", researchTypes.kicker);
    setText("#research-types-title", researchTypes.title);
    setText("#research-types-description", researchTypes.description);
    $("#research-type-grid").innerHTML = researchTypes.items
      .map(
        (item) => `
          <article class="research-card" id="${escapeHtml(item.id)}-card">
            <p class="card-number">${escapeHtml(item.number)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="card-summary">${escapeHtml(item.summary)}</p>
            <dl class="field-list">
              ${item.fields
                .map(
                  (field) =>
                    `<div><dt>${escapeHtml(field.label)}</dt><dd>${escapeHtml(field.value)}</dd></div>`,
                )
                .join("")}
            </dl>
          </article>`,
      )
      .join("");
  };

  const renderDiagram = () => {
    const { logicMap } = content;
    const nodes = logicMap.nodes || [];
    const canvas = logicMap.canvas || { width: 1000, height: 560 };
    const canvasWidth = Number(canvas.width) || 1000;
    const canvasHeight = Number(canvas.height) || 560;
    const selectedNode = nodes.find((node) => node.id === logicMap.rootId) || nodes[0];
    let activeNodeId = selectedNode ? selectedNode.id : "";

    setText("#logic-map-kicker", logicMap.kicker);
    setText("#logic-map-title", logicMap.title);
    setText("#logic-map-description", logicMap.description);
    setText("#diagram-help", logicMap.help);
    $("#diagram-map").style.setProperty("--diagram-aspect", `${canvasWidth} / ${canvasHeight}`);
    $("#diagram-lines").setAttribute("viewBox", `0 0 ${canvasWidth} ${canvasHeight}`);

    const nodeById = new Map(nodes.map((node) => [node.id, node]));
    const lines = (logicMap.links || [])
      .map((link) => {
        const from = nodeById.get(link.from);
        const to = nodeById.get(link.to);
        if (!from || !to) return "";

        const dx = to.position.x - from.position.x;
        const dy = to.position.y - from.position.y;
        const bend = Number(link.bend) || 0;
        const controlOne = `${from.position.x + dx * 0.32 + bend},${from.position.y + dy * 0.08}`;
        const controlTwo = `${from.position.x + dx * 0.68 + bend},${from.position.y + dy * 0.92}`;
        const labelX = from.position.x + dx * 0.5 + bend * 0.72;
        const labelY = from.position.y + dy * 0.5 - 16;

        return `
          <path d="M ${from.position.x} ${from.position.y} C ${controlOne} ${controlTwo} ${to.position.x} ${to.position.y}" />
          <text x="${labelX}" y="${labelY}" text-anchor="middle">${escapeSvg(link.label)}</text>`;
      })
      .join("");

    $("#diagram-lines").innerHTML = `
      <defs>
        <marker id="diagram-arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" />
        </marker>
      </defs>
      <g class="diagram-link-group">${lines}</g>`;

    const renderDetail = (node) => {
      $("#diagram-detail").innerHTML = `
        <p class="detail-label">当前节点</p>
        <h3>${escapeHtml(node.label)}</h3>
        <p>${escapeHtml(node.description)}</p>`;
      setText("#diagram-status", `已选择：${node.shortLabel || node.label}`);
    };

    const updateActiveNode = (id, moveFocus = false) => {
      const node = nodeById.get(id);
      if (!node) return;
      activeNodeId = id;
      document.querySelectorAll(".diagram-node").forEach((button) => {
        const isActive = button.dataset.nodeId === id;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      renderDetail(node);
      if (moveFocus) {
        Array.from(document.querySelectorAll(".diagram-node"))
          .find((button) => button.dataset.nodeId === id)
          ?.focus();
      }
    };

    $("#diagram-nodes").innerHTML = nodes
      .map(
        (node) =>
          `<button
            class="diagram-node${node.id === activeNodeId ? " is-active" : ""}"
            type="button"
            data-node-id="${escapeHtml(node.id)}"
            style="--node-x: ${(node.position.x / canvasWidth) * 100}%; --node-y: ${(node.position.y / canvasHeight) * 100}%;"
            aria-pressed="${String(node.id === activeNodeId)}"
            aria-label="查看 ${escapeHtml(node.label)} 的说明"
          ><span>${escapeHtml(node.shortLabel || node.label)}</span></button>`,
      )
      .join("");

    const orderedIds = nodes.map((node) => node.id);
    document.querySelectorAll(".diagram-node").forEach((button) => {
      button.addEventListener("click", () => updateActiveNode(button.dataset.nodeId));
      button.addEventListener("keydown", (event) => {
        const directionalKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
        if (!directionalKeys.includes(event.key)) return;
        event.preventDefault();
        const currentIndex = orderedIds.indexOf(button.dataset.nodeId);
        const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
        const nextIndex = (currentIndex + direction + orderedIds.length) % orderedIds.length;
        updateActiveNode(orderedIds[nextIndex], true);
      });
    });

    if (selectedNode) renderDetail(selectedNode);

    const sourceFigure = $("#logic-map-source");
    if (logicMap.sourceFigure && isSafeHref(logicMap.sourceFigure.src)) {
      sourceFigure.hidden = false;
      sourceFigure.innerHTML = `
        <img src="${escapeHtml(logicMap.sourceFigure.src)}" alt="${escapeHtml(logicMap.sourceFigure.alt)}" loading="lazy" decoding="async" />
        <figcaption>${escapeHtml(logicMap.sourceFigure.caption || "")}</figcaption>`;
    } else {
      sourceFigure.hidden = true;
      sourceFigure.innerHTML = "";
    }
  };

  const renderVisualNotes = () => {
    const { visualNotes } = content;
    if (!visualNotes) return;
    setText("#visual-notes-kicker", visualNotes.kicker);
    setText("#visual-notes-title", visualNotes.title);
    setText("#visual-notes-description", visualNotes.description);
    $("#visual-notes-grid").innerHTML = (visualNotes.groups || [])
      .map((group) => {
        const figures = (group.images || [])
          .filter((image) => isSafeHref(image.src))
          .map(
            (image) => `
              <figure class="visual-note-figure">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async" />
                <figcaption>${escapeHtml(image.caption)}</figcaption>
              </figure>`,
          )
          .join("");
        return `
          <details class="visual-note-group" open>
            <summary>
              <span>${escapeHtml(group.title)}</span>
              <span class="visual-note-summary">${escapeHtml(group.description)}</span>
            </summary>
            <div class="visual-note-figures">${figures}</div>
          </details>`;
      })
      .join("");
  };

  const renderExamplePapers = () => {
    const { examplePapers } = content;
    setText("#example-papers-kicker", examplePapers.kicker);
    setText("#example-papers-title", examplePapers.title);
    setText("#example-papers-description", examplePapers.description);
    $("#example-paper-grid").innerHTML = examplePapers.items
      .map((paper, index) => {
        const paperLink = paper.url
          ? createLink(
              {
                label: "查看论文链接",
                ariaLabel: `在新标签页打开《${paper.title}》的论文链接`,
                href: paper.url,
              },
              "text-link",
            )
          : "";
        const analysis = (paper.analysis || [])
          .map(
            (item) =>
              `<div><dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd></div>`,
          )
          .join("");
        const paperFigure = createStudyFigure(paper.figure, "paper-figure");
        return `
          <article class="paper-card">
            <div class="paper-card-top"><span>实例 0${index + 1}</span><span>${escapeHtml(paper.type)}</span></div>
            <h3>${escapeHtml(paper.title)}</h3>
            <p class="citation">${escapeHtml(paper.citation)}</p>
            <p>${escapeHtml(paper.relevance)}</p>
            ${paperFigure}
            ${paper.origin ? `<p class="paper-origin">${escapeHtml(paper.origin)}</p>` : ""}
            ${analysis ? `<details class="paper-details" open><summary>案例分析</summary><dl class="paper-analysis">${analysis}</dl></details>` : ""}
            ${paperLink}
          </article>`;
      })
      .join("");
  };

  const renderControversialPaper = () => {
    const { controversialPaper } = content;
    setText("#controversial-paper-kicker", controversialPaper.kicker);
    setText("#controversial-paper-title", controversialPaper.title);
    setText("#controversial-paper-description", controversialPaper.description);
    const paperLink = controversialPaper.url
      ? createLink(
          {
            label: "查看论文链接",
            ariaLabel: "在新标签页打开分类争议论文的链接",
            href: controversialPaper.url,
          },
          "text-link",
        )
      : "";
    const controversyFigure = createStudyFigure(controversialPaper.figure, "controversy-figure");
    $("#controversy-card").innerHTML = `
      <div class="controversy-lead">
        <p class="card-tag">边界案例</p>
        <h3>${escapeHtml(controversialPaper.paperTitle || controversialPaper.type)}</h3>
        <p class="controversy-type">分类结论：${escapeHtml(controversialPaper.type)}</p>
        <p class="citation">${escapeHtml(controversialPaper.citation)}</p>
        <p>${escapeHtml(controversialPaper.prompt)}</p>
        ${paperLink}
      </div>
      <dl class="controversy-fields">
        ${controversialPaper.points
          .map(
            (point) =>
              `<div><dt>${escapeHtml(point.label)}</dt><dd>${escapeHtml(point.value)}</dd></div>`,
          )
          .join("")}
      </dl>
      ${controversyFigure}`;
  };

  const renderDiscussion = () => {
    const { discussion } = content;
    setText("#discussion-kicker", discussion.kicker);
    setText("#discussion-title", discussion.title);
    setText("#discussion-description", discussion.description);
    $("#discussion-grid").innerHTML = discussion.items
      .map(
        (item) => `
          <article class="discussion-card">
            <span class="discussion-number">${escapeHtml(item.number)}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>`,
      )
      .join("");
  };

  const renderReferences = () => {
    const { references } = content;
    setText("#references-kicker", references.kicker);
    setText("#references-title", references.title);
    setText("#references-description", references.description);
    $("#reference-list").innerHTML = references.items
      .map((reference) => {
        const text = typeof reference === "string" ? reference : reference.text;
        const url = typeof reference === "string" ? "" : reference.url;
        const body = url && isSafeHref(url)
          ? createLink({ label: text, href: url }, "reference-link")
          : escapeHtml(text);
        return `<li>${body}</li>`;
      })
      .join("");
  };

  const init = () => {
    renderNavigation();
    renderHero();
    renderResearchTypes();
    renderDiagram();
    renderVisualNotes();
    renderExamplePapers();
    renderControversialPaper();
    renderDiscussion();
    renderReferences();
  };

  init();
})();
