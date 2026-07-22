// import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
// import * as ExternalPlugin from "./.quartz/plugins"

// ExternalPlugin.Explorer({
//   sortFn: (a, b) => {
//     const folderCustomOrders: Record<string, string[]> = {
//       "cs-202": [
//         "Basics",
//         "Classes",
//         "Copying",
//         "Header files",
//         "Operator Overloading",
//         "Pointers",
//         "Reading From a File",
//         "Static Functions & Variables",
//         "Templates",
//         "Virtual Functions",
//         "README",
//       ],
//       "cs-302": ["Prior Knowledge"],
//     }

//     // inline instead of a named helper function
//     const slugA = a.data?.slug
//     const slugB = b.data?.slug
//     const partsA = slugA ? slugA.split("/") : []
//     const partsB = slugB ? slugB.split("/") : []
//     const parentA = partsA.length > 1 ? partsA[partsA.length - 2] : undefined
//     const parentB = partsB.length > 1 ? partsB[partsB.length - 2] : undefined

//     const parentFolder = parentA ?? parentB
//     const customOrder = parentFolder ? folderCustomOrders[parentFolder] : undefined

//     if (customOrder) {
//       const nameA = a.data?.title ?? a.displayName
//       const nameB = b.data?.title ?? b.displayName
//       const indexA = customOrder.indexOf(nameA)
//       const indexB = customOrder.indexOf(nameB)

//       if (indexA !== -1 && indexB !== -1) return indexA - indexB
//       if (indexA !== -1) return -1
//       if (indexB !== -1) return 1
//     }

//     if (a.isFolder && !b.isFolder) return -1
//     if (!a.isFolder && b.isFolder) return 1

//     return a.displayName.localeCompare(b.displayName, undefined, {
//       numeric: true,
//       sensitivity: "base",
//     })
//   },
// })

// const config = await loadQuartzConfig()
// export default config
// export const layout = await loadQuartzLayout()

import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a, b) => {
    if (a.isFolder && !b.isFolder) return -1
    if (!a.isFolder && b.isFolder) return 1

    const nameA = a.slugSegment ?? a.displayName
    const nameB = b.slugSegment ?? b.displayName

    return nameA.localeCompare(nameB, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()