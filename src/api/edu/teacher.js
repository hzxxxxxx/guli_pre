import request from '@/utils/request'

export default {
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `/eduservice/edu-teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      data: teacherQuery
    })
  },
  deleteTeacherById(id) {
    return request({
      url: `/eduservice/edu-teacher/${id}`,
      method: 'delete',
    })
  },
  addTeacher(teacher) {
    return request({
      url: `/eduservice/edu-teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },
  getTeachInfo(id) {
    return request({
      url: `/eduservice/edu-teacher/getTeacher/${id}`,
      method: 'post',
    })
  },
  updateTeacher(teacher) {
    return request({
      url: `/eduservice/edu-teacher/updataTeacher`,
      method: 'post',
      data: teacher
    })
  },
}

