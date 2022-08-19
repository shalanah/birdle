import Chance from "chance";

// Add a bunch of 4-letter birds and add an "s"?
const birds = [
  { name: "booby", wiki: "booby" },
  {
    name: "brant",
    wiki: "Brant_(goose)",
  },
  { name: "crake", wiki: "Spotted_crake" },
  { name: "crane", wiki: "Crane_(bird)" },
  { name: "diver", wiki: "Loon" },
  { name: "eagle", wiki: "Eagle" },
  { name: "egret", wiki: "Great_egret" },
  { name: "eider", wiki: "eider" },
  { name: "finch", wiki: "finch" },
  { name: "galah", wiki: "galah" },
  { name: "goose", wiki: "Goose" },
  { name: "grebe", wiki: "grebe" },
  { name: "heron", wiki: "heron" },
  { name: "hobby", wiki: "Hobby_(bird)" },
  { name: "junco", wiki: "junco" },
  { name: "macaw", wiki: "Macaw" },
  { name: "munia", wiki: "Scaly-breasted_munia" },
  { name: "mynah", wiki: "Myna" },
  { name: "noddy", wiki: "Anous" },
  { name: "owlet", wiki: "Owlet" },
  { name: "pewit", wiki: "Northern_lapwing" },
  { name: "pipit", wiki: "pipit" },
  { name: "pitta", wiki: "pitta" },
  { name: "prion", wiki: "Prion_(bird)" },
  { name: "quail", wiki: "quail" },
  { name: "raven", wiki: "Raven" },
  { name: "robin", wiki: "American_robin" },
  { name: "saker", wiki: "Saker_falcon" },
  { name: "scaup", wiki: "Greater_scaup" },
  { name: "serin", wiki: "serin" },
  { name: "snipe", wiki: "Snipe" },
  { name: "stilt", wiki: "stilt" },
  { name: "stork", wiki: "Stork" },
  { name: "swift", wiki: "Swift_(bird)" },
  { name: "twite", wiki: "twite" },
  { name: "veery", wiki: "veery" },
  { name: "vireo", wiki: "vireo" },
];

// Don't want in alphabetical order... also this will be the same mix every time
const chance = new Chance(124);

export default chance.shuffle(birds);
