export type Episode = {
  /** Internal label, e.g. "E0001". */
  id: string;
  /** 11-character YouTube video ID. */
  youtubeId: string;
  /** Display title. */
  title: string;
  /** ISO date "YYYY-MM-DD" — drives ordering (newest first). */
  publishedAt: string;
};

/**
 * Single source of truth for the site's videos.
 *
 * To add a new Short: add an entry below with its YouTube ID and publish date,
 * then redeploy. The newest `publishedAt` automatically becomes the hero; the
 * rest fill the grid. Do NOT hand-order this array — ordering is derived from
 * `publishedAt`.
 */
export const episodes: Episode[] = [
  {
    id: "E0001",
    youtubeId: "i6W1845qraw",
    title: "ABC Song — Learn the Alphabet with Popi",
    publishedAt: "2026-07-05", // TODO: confirm real publish date
  },
  // "Wheels on the Bus" is uploaded but PRIVATE — uncomment when it goes public:
  // {
  //   id: "E0003",
  //   youtubeId: "sDescdPkajM",
  //   title: "Wheels on the Bus — Gentle Ride",
  //   publishedAt: "2026-07-07",
  // },
];

/** Every episode, newest first. */
export function episodesNewestFirst(): Episode[] {
  return [...episodes].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** The most recently published episode, or undefined if the manifest is empty. */
export function latestEpisode(): Episode | undefined {
  return episodesNewestFirst()[0];
}
