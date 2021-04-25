import request from '@/utils/request'

export default {
  getTeacherListPage(current,limit,teacherQuery) {
      return request({
          url: `/eduservice/edu-teacher/pageTeacherCondition/${current}/${limit}`,
          method: 'post',
          data: teacherQuery
        })
  },
  deleteTeacherById(id){
      return request({
        url: `/eduservice/edu-teacher/${id}`,
        method: 'delete',
      })
  }
}

  