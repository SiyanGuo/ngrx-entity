import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { CourseActions } from "../action-types";
import { allCoursesLoaded } from "../course.actions";
import { compareCourses, Course } from "../model/course";

export interface CoursesState extends EntityState<Course> {
    //entity format (before extends EntityState)
    // entities: {[key: number]: Course},
    // ids:number[]
    allCoursesLoaded: boolean

}

export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses
})

export const initialCoursesState = adapter.getInitialState({
    allCoursesLoaded: false
});

export const coursesReducer = createReducer(
    initialCoursesState,
    on(CourseActions.allCoursesLoaded, (state, action) =>
        adapter.addMany(action.courses, { ...state, allCoursesLoaded: true }
        )),


    on(CourseActions.courseUpdated, (state, action) =>
        adapter.updateOne(action.update, state)
    )
)



export const { selectAll } = adapter.getSelectors();

