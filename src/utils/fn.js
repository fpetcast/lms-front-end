import { courseCategories } from "./enum"

export default function getCourseCategoryObject(slug) {
    return courseCategories.find((cat) => cat.slug == slug)
}