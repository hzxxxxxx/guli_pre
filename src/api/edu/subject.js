import request from '@/utils/request'

export default {
  getAllSubject() {
    return request({
      url: `/eduservice/edu-subject/getSubject`,
      method: 'get',
    })
  },
}

