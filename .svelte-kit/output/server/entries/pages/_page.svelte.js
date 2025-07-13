import { y as ensure_array_like, w as pop, u as push } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload, $$props) {
  push();
  const projects = [
    {
      title: "Blatant",
      description: "Un jeu de plateau stratégique avec des cartes. Un concept unique et une gameplay captivant.",
      image: "/assets/blatant.png",
      links: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/showcase/blatant-velvaestudios"
        }
      ]
    },
    {
      title: "Raoronia",
      description: "Bienvenue dans Raoronia, un monde où la puissance ne naît pas du bien ou du mal, mais de la Volonté Spirituelle propre à chaque âme. Ici, chacun — qu’il porte la lumière ou qu’il soit plongé dans l’ombre — peut façonner son destin et celui du monde en affirmant une identité forte. L’éveil, la transformation ou la chute ne dépendent que de cette force intérieure.",
      image: "/assets/raoronia-map.png",
      links: [
        { label: "Plus d'infos", url: "https://linktr.ee/nekoniyah" }
      ]
    },
    {
      title: "A suivre",
      description: "On travaille sur de nouveaux projets passionnants ! Jeux vidéos, mangas, etc...",
      image: "/assets/icon-flames.png",
      links: [
        { label: "Plus d'infos", url: "https://linktr.ee/nekoniyah" }
      ]
    }
  ];
  const each_array = ensure_array_like(projects);
  $$payload.out += `<a href="https://www.youtube.com/watch?v=3T3ofoKfEoY&amp;list=RD3T3ofoKfEoY" target="_blank" rel="noopener noreferrer"><img src="/assets/ryuu_wave.png" class="lil-character svelte-1xl7e93" alt=""/></a> <div class="glass svelte-1xl7e93"></div> <div class="container svelte-1xl7e93"><img src="/assets/brand.png" class="logo svelte-1xl7e93" alt="Velvae Studios Logo" style="width: 100%; max-width: 400px;"/> <h1 class="title svelte-1xl7e93">Velvae Studios</h1> <p class="subtitle svelte-1xl7e93">Un Monde à Nous.</p> <br/> <div class="buttons svelte-1xl7e93"><a href="#about" class="button svelte-1xl7e93">A Propos</a> <a href="#projects" class="button svelte-1xl7e93">Projets</a></div></div> <div class="container svelte-1xl7e93" id="about"><p class="subtitle svelte-1xl7e93">Un Monde à Nous.</p> <br/> <div class="bio svelte-1xl7e93"><p class="svelte-1xl7e93">Velvæ Studios est une maison créative née d'une passion pour l'imaginaire et une esthétique
			fusionnant douceur, diversité et élégance. Inspirée par la culture japonaise —
			particulièrement les animés — et les univers fantastiques enchanteurs, Velvæ Studios cherche à
			captiver les cœurs et éveiller la curiosité.</p> <p class="svelte-1xl7e93">Notre mission est d'offrir des expériences immersives et collaboratives à travers divers
			projets : jeux de société, jeux vidéo, animés... Chaque création s'inscrit dans l'univers de
			Raoronia, un monde riche et vibrant incarnant nos valeurs : inclusivité, créativité et
			authenticité.</p> <p class="svelte-1xl7e93">Chez Velvæ Studios , nous croyons en la puissance du collectif et de la diversité. Notre
			esthétique associe des influences « fluffy » et « mignonnes » à des designs élégants et
			captivants, touchant ainsi un large public tout en honorant nos racines dans la communauté
			LGBT+ et le Furry Fandom. Cet équilibre unique permet à Velvæ Studios de rester accessible à
			tous tout en demeurant fidèle à son essence.</p> <p class="svelte-1xl7e93">Nous sommes avant tout un lieu où l'imagination n'a pas de limites, où chaque voix peut
			s'exprimer et où l'art raconte des histoires uniques. Rejoignez-nous dans cette aventure pour
			créer, ensemble, des mondes où rêves et créativité s'entrelacent.</p></div></div> <div class="container svelte-1xl7e93" id="projects"><p class="subtitle svelte-1xl7e93">Nos Projets.</p> <br/> <div class="cards svelte-1xl7e93"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let project = each_array[$$index_1];
    const each_array_1 = ensure_array_like(project.links);
    $$payload.out += `<div class="card svelte-1xl7e93"><h2 class="svelte-1xl7e93">${escape_html(project.title)}</h2> <p class="svelte-1xl7e93">${escape_html(project.description)}</p> <img${attr("src", project.image)}${attr("alt", project.title)} class="svelte-1xl7e93"/> <div class="links svelte-1xl7e93"><!--[-->`;
    for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
      let link = each_array_1[$$index];
      $$payload.out += `<a${attr("href", link.url)} target="_blank" rel="noopener noreferrer" class="svelte-1xl7e93">${escape_html(link.label)}</a>`;
    }
    $$payload.out += `<!--]--></div></div>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="footer svelte-1xl7e93"><p>© 2025 Velvae Studios. Tous droits réservés.</p></div>`;
  pop();
}
export {
  _page as default
};
