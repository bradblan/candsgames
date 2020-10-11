import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import GalleryLayout from "../components/layout_gallery"
import SpringMasonry from "../components/spring_masonry"

export default function Entrance() {
  return (
    <GalleryLayout>
      <SEO title="Gallery Entrance" />
      <div class="container-fluid">
        <div class="container csg-spring-gallery">
          <SpringMasonry />
        </div>
        <div class="csg-btn-gallery container">
          <Link to="/gallery" class="btn btn-lg csg-btn-action">
            Enter the Gallery
          </Link>
        </div>
      </div>
    </GalleryLayout>
  )
}
