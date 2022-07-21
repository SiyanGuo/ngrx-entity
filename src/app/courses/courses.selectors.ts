import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers/courses.reducers";
import * as fromCourses from './reducers/courses.reducers';

export const selectorCoursesState = createFeatureSelector<CoursesState>("courses");

export const selectAllCourses = createSelector(
    selectorCoursesState,
    fromCourses.selectAll
)

export const selectBeginnerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'BEGINNER')
)

export const selectAdvancedCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category == 'ADVANCED')
)

export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
)

export const areCoursesLoaded = createSelector(
    selectorCoursesState,
    state => state.allCoursesLoaded
)