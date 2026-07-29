/*
THIS FILE IS ENTERIELY WRITTEN BY EITHER ChatGpt or CLAUDE

I do not consider myself knowledgable enough to write something like this myself

Long story short: this file is what sorts the Explorer menu

*/
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    // folders first
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1

    // use frontmatter order
    const orderA = Number(a.data?.order)
    const orderB = Number(b.data?.order)

    if (!isNaN(orderA) && !isNaN(orderB)) {
      return orderA - orderB
    }

    if (!isNaN(orderA)) return -1
    if (!isNaN(orderB)) return 1

    // fallback: alphabetical
    const nameA = a.data?.title ?? a.displayName
    const nameB = b.data?.title ?? b.displayName

    return nameA.localeCompare(nameB, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
  filterFn: (node) => {
    return (
      !node.slug.startsWith("images") &&
      !node.slug.startsWith("dictionary")
    )
  },
  
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()